import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const handleVsChange = (position) => {
  const toPos = position;
  const fromPos = position === "left" ? "right" : "left";

  let highlight = document.getElementById("highlight");
  let vsFrom = document.getElementsByClassName(`vs--${fromPos}`)[0];
  let vsTo = document.getElementsByClassName(`vs--${toPos}`)[0];

  highlight.classList.remove(`highlight--${fromPos}`);
  highlight.classList.add(`highlight--${toPos}`);

  vsFrom.classList.remove("vs-active");
  vsFrom.classList.add("vs-inactive");

  vsTo.classList.add("vs-active");
  vsTo.classList.remove("vs-inactive");
};

// $('.vs--left').click((e) => handleVsChange("left"))
// $('.vs--right').click((e) => handleVsChange("right"))

export const BenchmarkTable = () => {
  return (
    <div className="container mt-4 relative m-auto w-full pt-8 pb-4">
      <div id="highlight" className="absolute top-0 h-full bg-gray-200 rounded-lg transition-all duration-300 ease-in-out highlight--left"></div>

      <button className="border border-gray-500 px-2 py-1 text-sm rounded-md absolute z-10 vs--left bg-black text-white" onClick={() => handleVsChange("left")}>
        ← VS.
      </button>
      <button className="border border-gray-500 px-2 py-1 text-sm rounded-md absolute z-10 vs--right bg-white text-black" onClick={() => handleVsChange("right")}>
        VS. →
      </button>

      <table className="table-fixed w-full relative border-collapse">
        <thead className="text-left">
          <tr className="table w-full table-fixed">
            <th className="p-2" colSpan="2">
              Category
            </th>
            <th className="p-2" colSpan="3">
              Current Policy
            </th>
            <th className="p-2" colSpan="3">
              Repeat Scenario
            </th>
            <th className="p-2" colSpan="2">
              Net Zero
            </th>
          </tr>
          <tr className="table w-full table-fixed">
            <th className="p-2"></th>
            <th className="p-2">2019</th>
            <th className="p-2">2030</th>
            <th className="p-2" colSpan="2">
              2050
            </th>
            <th className="p-2">2030</th>
            <th className="p-2" colSpan="2">
              2050
            </th>
            <th className="p-2">2030</th>
            <th className="p-2">2050</th>
          </tr>
        </thead>
        <tbody className="w-full max-h-96 overflow-auto block">
          <tr className="bg-black text-white rounded-md table w-full table-fixed">
            <td className="p-2" colSpan="10">
              Pillar 3: Clean Fuels
            </td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>

          <tr className="bg-black text-white rounded-md table w-full table-fixed">
            <td className="p-2" colSpan="10">
              Pillar 3: Clean Fuels
            </td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>

          <tr className="bg-black text-white rounded-md table w-full table-fixed">
            <td className="p-2" colSpan="10">
              Pillar 3: Clean Fuels
            </td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
          <tr className="table w-full table-fixed">
            <td className="p-2">Tellus</td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2" colSpan="2">
              12.34
            </td>
            <td className="p-2">12.34</td>
            <td className="p-2">12.34</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const tableRow = (scenario, i) => {
  return (
    <div key={i}>
      <div className="col-span-2">{scenario.variable_name}</div>
      <div className="col-span-2">{scenario.value}</div>
      <div className="">{scenario.value}</div>
      <div className="">{scenario.value}</div>
      <div className="col-span-2"></div>
      <div className="">{scenario.value}</div>
      <div className="">{scenario.value}</div>
      <div className="col-span-2"></div>
      <div className="">{scenario.value}</div>
      <div className="">{scenario.value}</div>
    </div>
  );
};

const ExploreFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const scenarios = useSelector((state) => state.scenarios);
  useEffect(() => {
    dispatch(loadScenarios(filters.url));
  }, []);

  return (
    <div className="relative text-xs">
      <BenchmarkTable />
      {/* {tableHeader()}
      <div className="">
        <div className="grid grid-cols-14">{scenarios.map((scenario, i) => tableRow(scenario, i))}</div>
      </div> */}
    </div>
  );
};

export default ExploreFilter;
