import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Pagination, Progress } from "antd";
import { Download } from 'react-bootstrap-icons'
import * as moment from 'moment-timezone';
 
import { loadFilterAction } from "../../../redux/actions/filters.actions";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";
import { assembleQuery, convertToCSV } from '../../../_helpers';
import { handleResponse, handleError } from "../../api/apiUtils";
import ExploreFilters from "./filters";
import ExploreBenchmark from "./benchmark";
import ExploreTimeseries from "./timeseries";

const ExploreLoader = () => {
  let sheetArr = [];
  let pageLimit = 25;
  const dispatch = useDispatch();
  const router = useRouter();
  let routerQuery = { ...router.query };
  delete routerQuery.comparison;
  routerQuery.state = routerQuery.state || "national";
  let filters = useSelector((state) => state.filters);
  let scenarios = useSelector((state) => state.scenarios);
  let count = useSelector((state) => state.count);
  const [policy, setPolicy] = useState(routerQuery.policy);
  const [params, setParams] = useState(routerQuery);
  const [apiQuery, setApiQuery] = useState({});
  const [downloadingCSV, setDownloadingCSV] = useState(false)
  const [dlProgress, setDlProgress] = useState(0);

  useEffect(() => {
    dispatch(loadScenarios({ ...routerQuery }));
  }, []);

  const setFilterClasses = (color, active) => {
    return active ? `inline-block rounded border-2 border-transparent text-sm mb-3 mr-3 px-3 py-1 bg-repeat-${color} text-white` : `inline-block rounded text-sm mb-3 mr-3 px-3 py-1 border-2 border-repeat-${color} text-repeat-${color} text-white`;
  };

  const changePage = (page, pageSize) => {
    let limit = pageLimit;
    if (pageSize) limit = pageSize;
    let newFilters = { ...filters, page, limit };
    let newRouterQuery = { ...routerQuery, policy, page, limit };
    let newQuery = { ...apiQuery, policy, page, limit };

    dispatch(loadFilterAction(newFilters));
    dispatch(loadScenarios(newRouterQuery));
    setApiQuery(newQuery);
  }

  const getScenarios = (query = null) => {
    let baseUrl = `/api/scenarios?limit=${query.limit}&skip=${query.skip || 0}&sort=${query.sort || 'filter_level_1'}`;
    delete query.limit;
    delete query.skip;
    delete query.sort;
    return fetch(baseUrl, {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(query)
    })
      .then(handleResponse)
      .catch(handleError);
  }

  const downloadFullCSV = (sheetArr, headers) => {
    let csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...sheetArr].join('\n');
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `repeat-data-${moment().format()}.csv`);
    document.body.appendChild(link); // Required for FF
    link.click();
    setTimeout(() => {
      setDownloadingCSV(false);
      setDlProgress(0)
    }, 3000)
  }

  const downloadBatch = i => {
    setDownloadingCSV(true);
    let downloadCount = Math.ceil(count / pageLimit);
    let queryObject = { ...assembleQuery(filters.url), skip: i * pageLimit, limit: pageLimit, sort: '_alt_l1,_alt_l2,_alt_l3,_alt_v,_variabl_name,_year' }
    getScenarios(queryObject).then(dl => {
      let data = dl.data.map(row => {
        Object.keys(row).filter(cell => cell.charAt(0) === '_' || cell === 'id' || cell.substring(0, 4) === 'alt_' || cell.substring(0, 5) === 'unit_').forEach(key => delete row[key])
        return row;
      })
      let converted = convertToCSV(data);
      i++;
      setDlProgress(Math.round((i / downloadCount) * 100))
      sheetArr = [...sheetArr, ...converted.csvArr]
      if (downloadCount > i) return downloadBatch(i);
      if (downloadCount === i) return downloadFullCSV(sheetArr, converted.headers)
    })
  }

  return (
    <div className="">
      <h2 className="text-repeat-teal text-3xl font-bold mb-3">Examine the Data</h2>
      <p className="text-repeat-dark">Maecenas efficitur dolor. Donec gravida dolor quis dignissim elementum.</p>
      <p className="pt-8 pb-4">Compare by</p>

      <ExploreFilters filters={filters} setFilterClasses={setFilterClasses} policy={policy} />

      {[...scenarios].map((e) => e.values).flat().length ? (
        <div id="tableContainer" className="overflow-auto">
          {filters.comparison === "benchmark" ? <ExploreBenchmark tableData={scenarios} /> : <ExploreTimeseries tableData={scenarios} />}
        </div>
      ) : (
        <div className="w-full text-center py-10 px-20">
          <div className="px-10 py-24 w-2/3 bg-repeat-light-blue m-auto rounded-xl">
            <h2 className="text-2xl text-repeat">Sorry! No matching data found.</h2>
            <h4 className="text-xl text-repeat-dark">Adjust the filters and try again.</h4>
          </div>
        </div>
      )}

      <div className="flex gap-10 pt-6">
        <div className="w-4/12">
          <button className="border border-black pt-2 pb-2 pr-3 pl-3 rounded flex items-center" onClick={() => { downloadBatch(0) }}>
            {
              downloadingCSV
                ? <React.Fragment>
                  {dlProgress === 100 ? <span className="pr-2">Done</span> : <span className="pr-2">Downloading...</span>}
                  <Progress strokeColor={{ from: '#108ee9', to: '#ed6d08' }} type="circle" percent={dlProgress} width={30} />
                </React.Fragment>
                : <React.Fragment>
                  <span className="pr-2">Download this table as a csv </span>
                  <Download className="" />
                </React.Fragment>
            }
          </button>
        </div>
        <div className="w-8/12 flex justify-end">
          <Pagination
            total={count}
            current={Number(filters.page) || 1}
            pageSizeOptions={[25, 50, 100, 200, 500]}
            defaultPageSize={Number(filters.limit) || pageLimit}
            onChange={changePage}
            showSizeChanger />
         </div>
      </div>

    </div>
  );
};

export default ExploreLoader;
