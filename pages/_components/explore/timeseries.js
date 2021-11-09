import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const TimeseriesTable = ({ tableData, filters }) => {
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

    if (diffType === "ABSOLUTE") return (r - v).toFixed(0);
    if (diffType === "PERCENT") return (((r - v) / r) * 100).toFixed(0).toString() + "%";
  };

  return (
    <div className="container relative m-auto w-full pb-4 font-effra">
      {/* <div id="highlight" className="absolute top-0 h-full bg-gray-200 rounded-lg transition-all duration-300 ease-in-out highlight--left"></div> */}

      {/* <button className="border border-gray-500 px-2 py-1 text-sm rounded-md absolute z-10 vs--left vs-left-btn bg-black text-white" onClick={() => handleVsChange("left")}>
        ← VS.
      </button>
      <div className="absolute z-10 vs--right text-center">
        <button className="inline-block border border-gray-500 px-2 py-1 text-sm rounded-md bg-white text-black vs-right-btn" onClick={() => handleVsChange("right")}>
          VS. →
        </button>
        <div className="block py-1">Show difference as</div>
        <div className="block text-center">
          <button
            onClick={() => {
              updateDiff("ABSOLUTE");
            }}
            className={diffType === "ABSOLUTE" ? "inline-block border border-black focus:outline-none px-2 py-1 text-sm rounded-bl-md rounded-tl-md bg-black text-white" : "inline-block border border-black focus:outline-none px-2 py-1 text-sm rounded-bl-md rounded-tl-md bg-white text-black"}
          >
            Absolute
          </button>
          <button
            onClick={() => {
              updateDiff("PERCENT");
            }}
            className={diffType === "PERCENT" ? "inline-block border border-black focus:outline-none px-2 py-1 text-sm rounded-br-md rounded-tr-md bg-black text-white" : "inline-block border border-black focus:outline-none px-2 py-1 text-sm rounded-br-md rounded-tr-md bg-white text-black"}
          >
            Percent
          </button>
        </div>
      </div> */}

      <table className="table-fixed w-full relative border-collapse text-sm">
        <thead className="text-left">
          <tr className="table w-full table-fixed">
            <th className="px-2 pt-8 pb-3" colSpan="2"></th>
            <th className="border-b border-dark px-2 pt-8 pb-3">2020</th>
            <th className="border-b border-dark px-2 pt-8 pb-3">2025</th>
            <th className="border-b border-dark px-2 pt-8 pb-3">2030</th>
            <th className="border-b border-dark px-2 pt-8 pb-3">2035</th>
            <th className="border-b border-dark px-2 pt-8 pb-3">2040</th>
            <th className="border-b border-dark px-2 pt-8 pb-3">2045</th>
            <th className="border-b border-dark px-2 pt-8 pb-3">2050</th>
          </tr>
        </thead>
        <tbody className="w-full max-h-96 overflow-auto block pt-3">
          {tableData
            ? tableData.map((row, i) => {
                return row.values.length ? (
                  <Fragment key={i}>
                    <tr className={`bg-repeat-${getColor(row.category)} text-white rounded-md table w-full table-fixed`}>
                      <td className="p-2" colSpan="8">
                        {row.category} - {row.subcategory} ({row.state} | {row.policy})
                      </td>
                    </tr>
                    {row.values.map((valueRow, vi) => {
                      return (
                        <tr className="table w-full table-fixed hover:bg-repeat hover:bg-opacity-5" key={vi}>
                          <td className="p-2" colSpan="2">
                            {valueRow.variable}
                          </td>
                          <td className="p-2">{valueRow.history ? valueRow.history[2020] : 0}</td>
                          <td className="p-2">{valueRow.core ? valueRow.core[2025] : 0}</td>
                          <td className="p-2">{valueRow.core ? valueRow.core[2030] : 0}</td>
                          <td className="p-2">{valueRow.core ? valueRow.core[2035] : 0}</td>
                          <td className="p-2">{valueRow.core ? valueRow.core[2040] : 0}</td>
                          <td className="p-2">{valueRow.core ? valueRow.core[2045] : 0}</td>
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
      <TimeseriesTable tableData={tableData} filters={filters} />
    </div>
  );
};

export default ExploreFilter;
