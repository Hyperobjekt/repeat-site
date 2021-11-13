import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const BenchmarkTable = ({ tableData, filters }) => {
  const [vsWith, setVsWith] = useState("CURRENT"); // CURRENT | NZAP
  const [diffType, setDiffType] = useState("ABSOLUTE");

  const handleVsChange = (position) => {
    const toPos = position;
    const fromPos = position === "left" ? "right" : "left";

    let highlight = document.getElementById("highlight");
    let vsFrom = document.getElementsByClassName(`vs-${fromPos}-btn`)[0];
    let vsTo = document.getElementsByClassName(`vs-${toPos}-btn`)[0];

    highlight.classList.remove(`highlight--${fromPos}`);
    highlight.classList.add(`highlight--${toPos}`);

    vsFrom.classList.remove("vs-active");
    vsFrom.classList.add("vs-inactive");

    vsTo.classList.add("vs-active");
    vsTo.classList.remove("vs-inactive");

    position === "left" ? setVsWith("CURRENT") : setVsWith("NZAP");
  };

  const getColor = (category) => {
    let filteredCategory = filters.levelOneFilters.filter((cat) => cat.label === category);
    return filteredCategory.length ? filteredCategory[0].color : "";
  };

  const updateDiff = (diff) => {
    setDiffType(diff);
  };
  const calculateDelta = (repeatValue, vsValue, year) => {
    let r = Number(repeatValue[year]),
        v = Number(vsValue ? vsValue[year] : 0);
    if (diffType === "ABSOLUTE") return addSign((r - v).toFixed(0).replace('-0', '0'));
    if (diffType === "PERCENT") return (((r - v) / r) * 100).toFixed(0).toString() + "%";
  };
  const addSign = (delta) => {
    if (Number(delta) > 0) return `+${delta}`;
    if (delta === "0") return <span className="ml-1.5">{delta}</span>;
    return `${delta}`;
  }

  return (
    <div id="tableContainer__shell" className="container mt-4 relative m-auto w-full pt-8 pb-4 font-effra">
      <div id="highlight" className="absolute top-0 h-full bg-gray-200 rounded-lg transition-all duration-300 ease-in-out highlight--left"></div>

      <button className="border border-gray-500 px-2 py-1 text-xs rounded-md absolute z-10 vs--left vs-left-btn bg-black text-white" onClick={() => handleVsChange("left")}>
        ← VS.
      </button>
      <div className="absolute z-10 vs--right text-center">
        <button className="inline-block border border-gray-500 px-2 py-1 text-xs rounded-md bg-white text-black vs-right-btn" onClick={() => handleVsChange("right")}>
          VS. →
        </button>
        <div className="block pt-3 pb-2">Show difference as</div>
        <div className="block text-center">
          <button
            onClick={() => {
              updateDiff("ABSOLUTE");
            }}
            className={diffType === "ABSOLUTE" ? "inline-block border border-black focus:outline-none px-2 py-1 text-xs rounded-bl-md rounded-tl-md bg-black text-white" : "inline-block border border-black focus:outline-none px-2 py-1 text-xs rounded-bl-md rounded-tl-md bg-white text-black"}
          >
            Absolute
          </button>
          <button
            onClick={() => {
              updateDiff("PERCENT");
            }}
            className={diffType === "PERCENT" ? "inline-block border border-black focus:outline-none px-2 py-1 text-xs rounded-br-md rounded-tr-md bg-black text-white" : "inline-block border border-black focus:outline-none px-2 py-1 text-xs rounded-br-md rounded-tr-md bg-white text-black"}
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
            <th className="p-2" colSpan="3">
              Frozen Policy
            </th>
            <th className="p-2" colSpan="3">
              {tableData ? tableData[0].policy : "Repeat"} Policy
            </th>
            <th className="p-2" colSpan="2">
              Net Zero
            </th>
          </tr>
          <tr className="table w-full table-fixed text-base tracking-wide	">
            <th className="px-2 pt-8 pb-3"></th>
            <th className="px-2 pt-8 pb-3">2020</th>
            <th className="px-2 pt-8 pb-3">2030</th>
            <th className="px-2 pt-8 pb-3" colSpan="2">
              2050
            </th>
            <th className="px-2 pt-8 pb-3">2030</th>
            <th className="px-2 pt-8 pb-3" colSpan="2">
              2050
            </th>
            <th className="px-2 pt-8 pb-3">2030</th>
            <th className="px-2 pt-8 pb-3">2050</th>
          </tr>
        </thead>
        <tbody className="w-full max-h-96 overflow-auto block text-sm">
          {tableData
            ? tableData.map((row, i) => {
                return row.values.length ? (
                  <Fragment key={i}>
                    <tr className={`bg-repeat-${getColor(row.category)} text-white rounded-md table w-full table-fixed`}>
                      <td className="p-2" colSpan="10">
                        <span>
                          <b>
                            {row.category} - {row.subcategory}
                          </b>
                        </span>{" - "}
                        <span>( {row.units} )</span>
                      </td>
                    </tr>
                    {row.values
                      .map((valueRow) => {
                        if (vsWith === "CURRENT") {
                          valueRow.repeat.deltas[2030] = calculateDelta(valueRow.repeat, valueRow.current, 2030);
                          valueRow.repeat.deltas[2050] = calculateDelta(valueRow.repeat, valueRow.current, 2050);
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
                            <td className="p-2">{valueRow.variable}</td>
                            <td className="p-2">{valueRow.history ? valueRow.history[2020] : 0}</td>

                            <td className="p-2">{valueRow.current ? valueRow.current[2030] : 0}</td>
                            <td className="p-2" colSpan="2">
                              {valueRow.current ? valueRow.current[2050] : 0}
                            </td>

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

                            <td className="p-2">{valueRow.core ? valueRow.core[2030] : 0}</td>
                            <td className="p-2">{valueRow.core ? valueRow.core[2050] : 0}</td>
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

const ExploreFilter = ({ tableData }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const scenarios = useSelector((state) => state.scenarios);
  useEffect(() => {
    router.push(filters.url, undefined, { shallow: true });
    // dispatch(loadScenarios({ url: filters.url }));
  }, [filters]);

  return (
    <div className="relative text-xs">
      <BenchmarkTable tableData={tableData} filters={filters} />
    </div>
  );
};

export default ExploreFilter;
