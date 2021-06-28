import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ExploreFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const scenarios = useSelector((state) => state.scenarios);
  useEffect(() => {
    dispatch(loadScenarios(filters.url));
  }, []);

  // const tableHeader = () => {
  //   return (
  //     <div className="grid grid-cols-14 sticky top-0 bg-white">
  //       <div className="col-start-5 col-span-2">Current Policy</div>
  //       <div className="col-span-2 text-center">vs</div>
  //       <div className="col-span-2 bg-repeat-light-blue">Repeat Scenario</div>
  //       <div className="col-span-2 text-center bg-repeat-light-blue">vs</div>
  //       <div className="col-span-2 bg-repeat-light-blue">Net Zero</div>
  //       <div className="col-span-2 ">Categories/Subcategories</div>
  //       <div className="col-start-9 col-span-2 bg-repeat-light-blue"></div>
  //       <div className="col-span-2 text-center bg-repeat-light-blue">Show differences as</div>
  //       <div className="bg-repeat-light-blue"></div>
  //       <div className="bg-repeat-light-blue"></div>
  //       <div className="col-span-2">
  //         <input className="w-full border-none bg-transparent h-7 text-xs" placeholder="Search for an output" type="text" />
  //       </div>
  //       <div className="col-span-2">2019</div>
  //       <div className="">2030</div>
  //       <div className="">2050</div>
  //       <div className="col-span-2"></div>
  //       <div className="">2030</div>
  //       <div className="">2050</div>
  //       <div className="">Absolute</div>
  //       <div className="">Percent</div>
  //       <div className="">2030</div>
  //       <div className="">2050</div>
  //     </div>
  //   );
  // };

  // const tableRow = (scenario, i) => {
  //   return (
  //     <div key={i}>
  //       <div className="col-span-2">{scenario.variable_name}</div>
  //       <div className="col-span-2">{scenario.value}</div>
  //       <div className="">{scenario.value}</div>
  //       <div className="">{scenario.value}</div>
  //       <div className="col-span-2"></div>
  //       <div className="">{scenario.value}</div>
  //       <div className="">{scenario.value}</div>
  //       <div className="col-span-2"></div>
  //       <div className="">{scenario.value}</div>
  //       <div className="">{scenario.value}</div>
  //     </div>
  //   );
  // };

  return (
    <div className="relative overflow-auto h-96 text-xs">
      {/* {tableHeader()}
      <div className="">
        <div className="grid grid-cols-14">{scenarios.map((scenario, i) => tableRow(scenario, i))}</div>
      </div> */}
    </div>
  );
};

export default ExploreFilter;
