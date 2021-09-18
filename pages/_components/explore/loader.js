import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { loadFilters } from "../../../redux/actions/filters.actions";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";
import ExploreFilters from "./filters";
import ExploreBenchmark from "./benchmark";
import ExploreTimeseries from "./timeseries";

const ExploreLoader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let routerQuery = { ...router.query };
  let filters = useSelector((state) => state.filters);
  let scenarios = useSelector((state) => state.scenarios);
  const [policy, setPolicy] = useState(routerQuery.policy);
  const [params, setParams] = useState(routerQuery);

  useEffect(() => {
    let query = { ...routerQuery };
    console.log(">>>", routerQuery, router.query, query, policy);
    dispatch(loadScenarios(query));
  }, []);

  const setFilterClasses = (color, active) => {
    return active ? `inline-block rounded border-2 border-transparent text-sm mb-3 mr-3 px-3 py-1 bg-repeat-${color} text-white` : `inline-block rounded text-sm mb-3 mr-3 px-3 py-1 border-2 border-repeat-${color} text-repeat-${color} text-white`;
  };

  const setComparison = (comparison) => {
    localStorage.setItem("comparison", comparison);
    dispatch(loadFilters());
  };
  return (
    <div className="">
      <h2 className="text-repeat-teal text-3xl font-bold mb-3">Examine the Data</h2>
      <p className="text-repeat-dark">Maecenas efficitur dolor. Donec gravida dolor quis dignissim elementum.</p>
      <p className="text-repeat-dark pt-8">Compare by</p>
      <div className="flex px-2 pt-5 border-b-4 border-repeat">
        <div
          className={filters.comparison === "benchmark" ? "flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 bg-repeat text-white font-bold rounded-t-md" : "flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 border-repeat-neutral border-l-2 border-t-2 border-r-2 rounded-t-md"}
          onClick={() => {
            setComparison("benchmark");
          }}
        >
          Benchmark
        </div>
        <div
          className={filters.comparison === "timeseries" ? "flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 bg-repeat text-white font-bold rounded-t-md" : "flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 border-repeat-neutral border-l-2 border-t-2 border-r-2 rounded-t-md"}
          onClick={() => {
            setComparison("timeseries");
          }}
        >
          Time Series
        </div>
      </div>
      <p className="text-repeat-dark pt-8">Scope (select state or national)</p>
      <ExploreFilters filters={filters} setFilterClasses={setFilterClasses} policy={policy} />
      <div id="tableContainer" className="overflow-auto">
        {filters.comparison === "benchmark" ? <ExploreBenchmark tableData={scenarios} /> : <ExploreTimeseries tableData={scenarios} />}
      </div>
    </div>
  );
};

export default ExploreLoader;
