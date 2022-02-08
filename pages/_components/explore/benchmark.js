import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const BenchmarkTable = ({ tableData, filters, reloading }) => {
  const [vsWith, setVsWith] = useState("NZAP"); // FROZEN | NZAP
  const [diffType, setDiffType] = useState("ABSOLUTE");
  const [fromPos, setFromPos] = useState("left");
  const [toPos, setToPos] = useState("right");

  const toggleVs = () => {
    setVsWith(vsWith === "NZAP" ? "FROZEN" : "NZAP");
    setFromPos(fromPos === "left" ? "right" : "left");
    setToPos(toPos === "right" ? "left" : "right");
  };

  const getCatColor = (category) => {
    let filteredCategory = filters.levelOneFilters.filter((cat) => cat.label === category);
    return filteredCategory.length ? filteredCategory[0].color : "";
  };

  const getColColor = (position) => {
    return position === vsWith ? "" : "text-repeat-gray";
  };

  const updateDiff = (diff) => {
    setDiffType(diff);
  };

  const calculateDelta = (repeatValue, vsValue, year) => {
    let r = Number(repeatValue[year]),
        v = Number(vsValue ? vsValue[year] : 0);
    if (diffType === "ABSOLUTE") return formatDelta((r - v));
    if (diffType === "PERCENT") return formatDelta((((r - v) / v) * 100))+"%";
  };

  const formatDelta = (delta) => {
    delta = Number(delta);
    if(isNaN(delta) || !isFinite(delta)) delta = (0).toFixed(2);
    else if(Math.abs(delta) >= 100) delta = delta.toFixed(0);
    else if(Math.abs(delta) >= 10) delta = delta.toFixed(1);
    else if(Math.abs(delta) >= 1) delta = delta.toFixed(2);
    else delta = delta.toFixed(2);
    if(Number(delta) === 0) delta = (0).toFixed(2);
    if(Number(delta) >= 0) delta = `+${delta}`;
    return delta;
  };

  const vsEnClasses = "w-15 flex items-center border border-gray-500 px-2 py-1 text-xs rounded-md bg-white text-black";
  const vsDisClasses = "w-15 flex items-center border border-gray-500 px-2 py-1 text-xs rounded-md bg-black text-white pointer-events-none";

  return (
    <div id="tableContainer__shell" className="container mt-4 relative m-auto w-full pt-8 pb-4 font-effra transition-colors duration-300 ease-in-out">
      <div id="highlight" className={`absolute top-0 h-full bg-gray-200 rounded-lg transition-all duration-300 ease-in-out highlight--${toPos}`}></div>

      <div className="absolute z-10 vs--left text-center">
        <button className={vsWith === "FROZEN" ? vsDisClasses : vsEnClasses}
                disabled={vsWith === "FROZEN"}
                onClick={() => toggleVs()}><ChevronLeft className="mr-2" /> VS.</button>
      </div>

      <div className="absolute z-10 vs--right text-center">
        <button className={vsWith === "NZAP" ? vsDisClasses : vsEnClasses}
                disabled={vsWith === "NZAP"}
                onClick={() => toggleVs()}>VS. <ChevronRight className="ml-2" /></button>
      </div>

      <div className={`absolute z-10 pt-7 vs--${toPos} text-center`}>
        <div className="block pt-3 pb-2">Show difference as</div>
        <div className="block text-center">
          <button
            onClick={() => {
              updateDiff("ABSOLUTE");
            }}
            className={`${diffType === "ABSOLUTE" ? "bg-black text-white" : "bg-white text-black"} inline-block border border-black focus:outline-none px-2 py-1 text-xs rounded-bl-md rounded-tl-md`}
          >
            Absolute
          </button>
          <button
            onClick={() => {
              updateDiff("PERCENT");
            }}
            className={`${diffType === "PERCENT" ? "bg-black text-white" : "bg-white text-black"} inline-block border border-black focus:outline-none px-2 py-1 text-xs rounded-br-md rounded-tr-md`}
          >
            Percent
          </button>
        </div>
      </div>

      <table className="table-fixed w-full relative border-collapse">
        <thead className="text-left">
          <tr className="table w-full table-fixed text-base tracking-wide	">
            <th className="p-2" colSpan="2">
              Category
            </th>
            <th className={`p-2 ${getColColor("FROZEN")}`} colSpan="3">
              Frozen Policy
            </th>
            <th className="p-2" colSpan="3">
              {tableData ? tableData[0].policy.replace("-", " ").toUpperCase() : "REPEAT"} Policy
            </th>
            <th className={`p-2 ${getColColor("NZAP")}`} colSpan="2">
              Net Zero
            </th>
          </tr>
          <tr className="table w-full table-fixed text-base tracking-wide	">
            <th className="px-2 pt-8 pb-3" colSpan="2"></th>
            <th className={`px-2 pt-8 pb-3 ${getColColor("FROZEN")}`}>2030</th>
            <th className={`px-2 pt-8 pb-3 ${getColColor("FROZEN")}`} colSpan="2">2050</th>
            <th className="px-2 pt-8 pb-3">2030</th>
            <th className="px-2 pt-8 pb-3" colSpan="2">2050</th>
            <th className={`px-2 pt-8 pb-3 ${getColColor("NZAP")}`}>2030</th>
            <th className={`px-2 pt-8 pb-3 ${getColColor("NZAP")}`}>2050</th>
          </tr>
        </thead>
        <tbody className={`w-full max-h-96 overflow-auto block text-sm transition-opacity duration-300 delay-100 ${reloading ? "opacity-25" : ""}`}>
          {tableData
            ? tableData.map((row, i) => {
                return row.values.length ? (
                  <Fragment key={i}>
                    <tr className={`bg-repeat-${getCatColor(row.category)} text-white rounded-md table w-full table-fixed`}>
                      <td className="p-2" colSpan="10">
                        <span>
                          <strong>
                            {row.category} - {row.subcategory}
                          </strong>
                        </span>
                        &nbsp;&nbsp;
                        <span>( {row.units} )</span>
                      </td>
                    </tr>
                    {row.values
                      .map((valueRow) => {
                        if (vsWith === "FROZEN") {
                          valueRow.repeat.deltas[2030] = calculateDelta(valueRow.repeat, valueRow.frozen, 2030);
                          valueRow.repeat.deltas[2050] = calculateDelta(valueRow.repeat, valueRow.frozen, 2050);
                        }
                        if (vsWith === "NZAP") {
                          valueRow.repeat.deltas[2030] = calculateDelta(valueRow.repeat, valueRow.core, 2030);
                          valueRow.repeat.deltas[2050] = calculateDelta(valueRow.repeat, valueRow.core, 2050);
                        }

                        return valueRow;
                      })
                      .map((valueRow, vi) => {
                        return (
                          <tr className="table w-full table-fixed hover:bg-repeat hover:bg-opacity-5" key={vi}>
                            <td className="p-2" colSpan="2">{valueRow.variable}</td>

                            <td className={`p-2 ${getColColor("FROZEN")}`}>{valueRow.frozen ? valueRow.frozen[2030] : 0}</td>
                            <td className={`p-2 ${getColColor("FROZEN")}`} colSpan="2">{valueRow.frozen ? valueRow.frozen[2050] : 0}</td>

                            <td className="p-2">
                              <div className="flex">
                                <div className="w-10">{valueRow.repeat[2030]}</div>
                                <div className="pl-2 flex text-xs text-repeat-dark">
                                  <div className="my-auto ml-auto">{valueRow.repeat.deltas[2030]}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="flex">
                                <div className="w-10">{valueRow.repeat[2050]}</div>
                                <div className="pl-2 flex text-xs text-repeat-dark">
                                  <div className="my-auto ml-auto">{valueRow.repeat.deltas[2050]}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                            </td>

                            <td className={`p-2 ${getColColor("NZAP")}`}>{valueRow.core ? valueRow.core[2030] : 0}</td>
                            <td className={`p-2 ${getColColor("NZAP")}`}>{valueRow.core ? valueRow.core[2050] : 0}</td>
                          </tr>
                        );
                      })}
                  </Fragment>
                ) : null;
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

const ExploreBenchmark = ({ tableData, reloading }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const scenarios = useSelector((state) => state.scenarios);
  useEffect(() => {
    router.push(filters.url, undefined, { shallow: true });
  }, [filters]);

  return (
    <div className="relative text-xs">
      <BenchmarkTable tableData={tableData} filters={filters} reloading={reloading} />
    </div>
  );
};

export default ExploreBenchmark;
