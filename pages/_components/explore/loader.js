import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Pagination, Progress } from "antd";
import { Download } from 'react-bootstrap-icons'
import * as moment from 'moment-timezone';
import { loadFilters, loadFilterAction } from "../../../redux/actions/filters.actions";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";
import { assembleQuery, convertToCSV } from '../../../_helpers';
import { handleResponse, handleError } from "../../api/apiUtils";
import ExploreFilters from "./filters";
import ExploreBenchmark from "./benchmark";
import ExploreTimeSeries from "./timeseries";
import "antd/lib/style/index.css";
import "antd/lib/select/style/index.css";
import "antd/lib/pagination/style/index.css";

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
  const [comparison, setComparison] = useState(filters.comparison);
  const [loading, setLoading] = useState(true);
  const [reloading, setReloading] = useState(false);

  useEffect(async () => {
    let query = getQuery();
    dispatch(loadFilters({ ...query }));
    dispatch(loadScenarios({ ...routerQuery }));
  }, []);

  useEffect(() => {
    setLoading(false);
    setReloading(false);
  }, [scenarios]);

  useEffect(() => {
    setReloading(comparison == filters.comparison);
    setComparison(filters.comparison);
  }, [filters]);

  const getQuery = () => {
    let query = {};
    query.page = router.query.page;
    query.limit = router.query.limit;
    query.state = router.query.state;
    query.category = router.query.categories ? router.query.categories.split(",") : [];
    query.subcategory = router.query.subcategories ? router.query.subcategories.split(",") : [];
    return query;
  };

  const setFilterClasses = (color, active) => {
    return active ? `inline-block rounded border-2 border-transparent text-sm mb-3 mr-3 px-3 py-1 bg-repeat-${color} text-white` : `inline-block rounded text-sm mb-3 mr-3 px-3 py-1 border-2 border-repeat-${color} text-repeat-${color} text-white`;
  };

  const changePage = (page, pageSize) => {
    let limit = pageSize ? pageSize : pageLimit;
    let newFilters = { ...filters, page, limit };
    let query = { ...apiQuery, policy, page, limit };
    dispatch(loadFilterAction(newFilters));
    dispatch(loadScenarios(query));
    setApiQuery(query);
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

  const downloadCSV = () => {
    let converted = convertToCSV(scenarios);
    let csvContent = 'data:text/csv;charset=utf-8,' + [converted.headers.join(','), ...converted.csvArr].join('\n');
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `repeat-data-${moment().format()}.csv`);
    document.body.appendChild(link); // Required for FF
    link.click();
  }
  
  return (
    <div className="">
      <h2 className="text-repeat-teal text-3xl font-bold mb-3">Examine the Data</h2>
      <p className="text-repeat-dark">Maecenas efficitur dolor. Donec gravida dolor quis dignissim elementum.</p>
      <p className="pt-8 pb-4">Compare by</p>

      <ExploreFilters filters={filters} setFilterClasses={setFilterClasses} policy={policy} />

      <div className="max-h-explorer min-h-explorer relative overflow-hidden">
        {loading ? <div className="repeat-spinner">LOADING...</div> :
          [...scenarios].map((e) => e.values).flat().length ? (
            <div id="tableContainer" className="min-h-explorer overflow-auto">
              {comparison === "benchmark" ?
                <ExploreBenchmark tableData={scenarios} reloading={reloading} /> :
                <ExploreTimeSeries tableData={scenarios} reloading={reloading} />}
            </div>
          ) : (
            <div className="w-full text-center py-10 px-20">
              <div className="px-10 py-24 w-2/3 bg-repeat-light-blue m-auto rounded-xl">
                <h2 className="text-2xl text-repeat">Sorry! No matching data found.</h2>
                <h4 className="text-xl text-repeat-dark">Adjust the filters and try again.</h4>
              </div>
            </div>
          )
        }
      </div>

      <div className="flex gap-10 pt-6">
        <div className="w-4/12">
          <button className="border border-black pt-2 pb-2 pr-3 pl-3 rounded flex items-center" onClick={() => { downloadCSV() }}>
            <span className="pr-2">Download this table as a CSV </span>
            <Download className="" />
          </button>
        </div>
        <div className="w-8/12 flex justify-end">
          <Pagination
            total={count}
            current={Number(filters.page) || 1}
            pageSize={Number(filters.limit) || pageLimit}
            defaultPageSize={pageLimit}
            pageSizeOptions={[25, 50, 100, 200, 500]}
            onChange={changePage}
            showSizeChanger />
         </div>
      </div>

    </div>
  );
};

export default ExploreLoader;
