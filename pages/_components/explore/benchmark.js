import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const BenchmarkTable = ({ tableData }) => {
  const [vsWith, setVsWith] = useState("CURRENT"); // CURRENT | NZAP

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

    position === "left" ? setVsWith("CURRENT") : setVsWith("NZAP");
  };

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
            <th className="p-2">2020</th>
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
          {tableData.map((row, i) => {
            return (
              <Fragment key={i}>
                <tr className="bg-black text-white rounded-md table w-full table-fixed">
                  <td className="p-2" colSpan="10">
                    {row.category}
                  </td>
                </tr>
                {row.values
                  .map((valueRow) => {
                    if (vsWith === "CURRENT") {
                      valueRow.repeat.deltas[2030] = (Number(valueRow.repeat[2030]) - Number(valueRow.policy[2030])).toFixed(2);
                      valueRow.repeat.deltas[2050] = (Number(valueRow.repeat[2050]) - Number(valueRow.policy[2050])).toFixed(2);
                    }
                    if (vsWith === "NZAP") {
                      valueRow.repeat.deltas[2030] = (Number(valueRow.repeat[2030]) - Number(valueRow.nzap[2030])).toFixed(2);
                      valueRow.repeat.deltas[2050] = (Number(valueRow.repeat[2050]) - Number(valueRow.nzap[2050])).toFixed(2);
                    }

                    return valueRow;
                  })
                  .map((valueRow, vi) => {
                    return (
                      <tr className="table w-full table-fixed" key={vi}>
                        <td className="p-2">{valueRow.variable}</td>
                        <td className="p-2">{valueRow.history[2020]}</td>

                        <td className="p-2">{valueRow.policy[2030]}</td>
                        <td className="p-2" colSpan="2">
                          {valueRow.policy[2050]}
                        </td>

                        <td className="p-2">
                          {valueRow.repeat[2030]} <span className="inline-block text-xs pl-2 text-repeat-dark">{valueRow.repeat.deltas[2030]}</span>
                        </td>
                        <td className="p-2" colSpan="2">
                          {valueRow.repeat[2050]} <span className="inline-block text-xs pl-2 text-repeat-dark">{valueRow.repeat.deltas[2050]}</span>
                        </td>

                        <td className="p-2">{valueRow.nzap[2030]}</td>
                        <td className="p-2">{valueRow.nzap[2050]}</td>
                      </tr>
                    );
                  })}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const ExploreFilter = ({tableData}) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const scenarios = useSelector((state) => state.scenarios);
  useEffect(() => {
    dispatch(loadScenarios(filters.url));
  }, []);

  return (
    <div className="relative text-xs">
      <BenchmarkTable tableData={tableData} />
    </div>
  );
};

export default ExploreFilter;
