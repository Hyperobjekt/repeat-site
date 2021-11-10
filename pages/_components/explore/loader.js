import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Pagination } from "antd";
import "antd/dist/antd.css";

import { loadFilterAction } from "../../../redux/actions/filters.actions";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";
import ExploreFilters from "./filters";
import ExploreBenchmark from "./benchmark";
import ExploreTimeseries from "./timeseries";

const ExploreLoader = () => {
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

  useEffect(() => {
    window.PAGE_LIMIT = 200;
    dispatch(loadScenarios({ ...routerQuery }));
  }, []);

  const setFilterClasses = (color, active) => {
    return active ? `inline-block rounded border-2 border-transparent text-sm mb-3 mr-3 px-3 py-1 bg-repeat-${color} text-white` : `inline-block rounded text-sm mb-3 mr-3 px-3 py-1 border-2 border-repeat-${color} text-repeat-${color} text-white`;
  };

  const changePage = (page, pageSize) => {
    let limit = window.PAGE_LIMIT;
    if (pageSize) limit = pageSize;
    let newFilters = { ...filters, page: page };
    let query = { ...apiQuery, page: page };
    dispatch(loadFilterAction(newFilters));
    dispatch(loadScenarios(query));
    setApiQuery(query);
  }

  return (
    <div className="">
      <h2 className="text-repeat-teal text-3xl font-bold mb-3">Examine the Data</h2>
      <p className="text-repeat-dark">Maecenas efficitur dolor. Donec gravida dolor quis dignissim elementum.</p>
      <p className="text-repeat-dark pt-8">Compare by</p>

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
        <div className="block">
        </div>
        <div className="block flex justify-end">
          <Pagination
            total={count}
            current={Number(filters.page) || 1}
            pageSizeOptions={[200, 500, 1000, 1500, 2000]}
            defaultPageSize={Number(filters.limit) || window.PAGE_LIMIT}
            onChange={changePage}
            showSizeChanger />
         </div>
      </div>

    </div>
  );
};

export default ExploreLoader;
