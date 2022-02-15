import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";
const { policies } = require("../../../_data/policies.json");

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const TimeSeriesTable = ({ policy, tableData, filters, reloading }) => {

  const activePolicy = policy || {};

  const getColor = (category) => {
    let filteredCategory = filters.levelOneFilters.filter((cat) => cat.label === category);
    return filteredCategory.length ? filteredCategory[0].color : "";
  };

  let years = tableData ? [...new Set(tableData.map((row) => row.values.map((valueRow) => Object.keys(valueRow[activePolicy.slug])).flat()).flat())] : [];
  years.pop();

  return (
    <div className="relative m-auto w-full pb-4 font-effra">
      <table className="table-fixed w-full relative border-collapse text-sm">
        <thead className="text-left">
          <tr className="table w-full table-fixed">
            <th className="border-b border-dark px-2 pt-8 pb-3" colSpan="2">Category</th>
            {years.map((year, yi) => {
              return <th className="border-b border-dark px-2 pt-8 pb-3" key={yi}>{year}</th>
            })}
          </tr>
        </thead>
        <tbody className={`w-full max-h-96 overflow-auto block pt-3 transition-opacity duration-300 delay-100 ${reloading ? "opacity-25" : ""}`}>
          {tableData
            ? tableData.map((row, i) => {
                return row.values.length ? (
                  <Fragment key={i}>
                    <tr className={`bg-repeat-${getColor(row.category)} text-white rounded-md table w-full table-fixed`}>
                      <td className="p-2" colSpan="8">
                        <span>
                          <strong>
                            {row.category} - {row.subcategory}
                          </strong>
                        </span>
                        &nbsp;&nbsp;
                        <span>( {row.units} )</span>
                      </td>
                    </tr>
                    {row.values.map((valueRow, vi) => {
                      return (
                        <tr className="table w-full table-fixed hover:bg-repeat hover:bg-opacity-5" key={vi}>
                          <td className="p-2" colSpan="2">
                            {valueRow.variable}
                          </td>
                          {years.map((year, yi) => {
                            return <td className="p-2" key={yi}>{valueRow[activePolicy.slug] ? valueRow[activePolicy.slug][year] : 0}</td>;
                          })}
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

const ExploreTimeSeries = ({ policy, tableData, reloading }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const scenarios = useSelector((state) => state.scenarios);
  useEffect(() => {
    router.push(filters.url, undefined, { shallow: true });
  }, [filters]);

  return (
    <div className="relative text-xs">
      <TimeSeriesTable policy={policy} tableData={tableData} filters={filters} reloading={reloading} />
    </div>
  );
};

export default ExploreTimeSeries;
