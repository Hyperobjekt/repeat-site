import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function getTableHeader(filtersYears) {
  return {
    headers: [...filtersYears].filter((e) => Number(e.slug) % 5 === 0).sort((a, b) => (a.slug > b.slug ? 1 : -1)),
  };
}
function getTableBody(scenarios) {
  let obj = {};
  scenarios.forEach((e) => {
    obj[e._filter_level_1] = obj[e._filter_level_1] || { label: e.filter_level_1 };
    obj[e._filter_level_1][e._filter_level_2] = obj[e._filter_level_1][e._filter_level_2] || { label: e.filter_level_2 };
    obj[e._filter_level_1][e._filter_level_2][e._variable_name] = obj[e._filter_level_1][e._filter_level_2][e._variable_name] || {
      sortVals: `${e.alt_l1}.${e.alt_l2}.${e.alt_v}`,
      label: e.variable_name,
      unit: e.unit,
      unit_alt: e._unit_alt ? e.unit_alt : "",
      unit_alt_equation: e.unit_alt_equation,
    };
    obj[e._filter_level_1][e._filter_level_2][e._variable_name][e._year] = obj[e._filter_level_1][e._filter_level_2][e._variable_name][e._year] || {
      category: e.filter_level_1,
      subcategory: e.filter_level_2,
      variableName: e.variable_name,
      scenario: e.scenario,
      value: e.value,
    };
  });
  return obj;
}

const formatValue = (value) => {
  let vNum = Number(value);
  let sign = Math.sign(vNum);

  // Keep 3 numbers to right of decimal for numbers less than 1."
  if (vNum * sign < 1)
    return vNum
      .toFixed(3)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // Keep 2 numbers to right of decimal for number >1 and <10.
  if (vNum * sign < 10)
    return vNum
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // Keep 1 number to right of decimal for numbers > 10 and < 100.
  if (vNum * sign < 100)
    return vNum
      .toFixed(1)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // Remove completely for any number = 100 or higher.
  return vNum
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ExploreByPathway = ({ filters, scenarios }) => {
  const [table, setTable] = useState(getTableHeader(filters.years));
  useEffect(() => {
    setTable({ ...table, body: getTableBody(scenarios) });
  }, [scenarios]);

  const format = (data) => {
    // data, unitData
    let isNumber = !isNaN(Number(data.value));
    if (isNumber) return formatValue(data.value);
    return data.value;
  };

  const renderBody = (table) => {
    let headers = [...table.headers];
    let headerKeys = headers.map((e) => e.slug);
    headerKeys.unshift("");
    let l1 = Object.keys(table.body);
    const renderCells = (varNameRow, index, length) => {
      let rowLength = [];
      headerKeys.filter((e) => e).forEach((e) => (!varNameRow[e] ? rowLength.push(true) : null));
      let rowData = headerKeys.map((e, i) => {
        let unitData = {};
        if (varNameRow) {
          unitData.unit = varNameRow.unit;
          unitData.unit_alt = varNameRow.unit_alt;
          unitData.unit_alt_equation = varNameRow.unit_alt_equation;
        }
        if (i === 0)
          return (
            <td key={i} className="d-table-cell nzap-table-cell pl-2 pr-2 pt-2 pb-2 pathway cell-lead">
              <b className="pr-2" style={{ color: "#ed6d0a", fontFamily: "monospace" }}>
                {varNameRow.sortVals}
              </b>
              {varNameRow.label} {unitData.unit ? `(${unitData.unit})` : null}
            </td>
          );
        if (!varNameRow[e] || varNameRow[e].value === "NA")
          return (
            <td key={i} className="d-table-cell nzap-table-cell pl-2 pr-2 pt-2 pathway pb-2">
              ---
            </td>
          );
        return (
          <td key={i} className="d-table-cell nzap-table-cell pl-2 pr-2 pt-2 pathway pb-2">
            {format(varNameRow[e], unitData)}
          </td>
        );
      });
      return rowLength.length > 0 && index === length - 1 ? null : rowData;
    };

    const renderVariableNames = (l2Row) => {
      let varName = Object.keys(l2Row);
      return varName.map((varNameKey, varNameIndex) => {
        let varNameRow = l2Row[varNameKey];
        return (
          <tr key={varNameIndex} className="nzap-table-row tween">
            {varNameKey !== "label" ? renderCells(varNameRow, varNameIndex, varName.length) : null}
          </tr>
        );
      });
    };

    const renderLevelTwo = (l1Row) => {
      let l2 = Object.keys(l1Row);
      return l2.map((l2Key, l2Index) => {
        let l2Row = l1Row[l2Key];
        if (l2Key === "label") return;
        return (
          <React.Fragment key={l2Index}>
            <tr className="position-relative text-uppercase pt-1 pb-1 pl-3 mb-2">
              <td className="d-table-cell pb-2" colSpan={table.headers.length + 1}>
                <div className="l2-label pl-2 pt-1 pb-1 nzap-radius cell-lead">{l2Row.label}</div>{" "}
              </td>
            </tr>
            {renderVariableNames(l2Row)}
          </React.Fragment>
        );
      });
    };
    return l1.map((l1Key, l1Index) => {
      let l1Row = table.body[l1Key];
      if (l1Key === "label") return;
      return (
        <React.Fragment key={l1Index}>
          <tr className="position-relative text-uppercase pt-1 pb-1 pl-3 mb-2">
            <td className="d-table-cell pb-2" colSpan={table.headers.length + 1}>
              <div className="l1-label pl-2 pt-1 pb-1 nzap-radius cell-lead">{l1Row.label}</div>{" "}
            </td>
          </tr>
          {renderLevelTwo(l1Row)}
        </React.Fragment>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="table-header-holder">
        <table className="w-100 position-relative nzap-table">
          <thead>
            <tr className="nzap-table-header-row">
              <th className="pt-2 pb-2 pl-2 pr-2 position-sticky nzap-table-header-cell d-table-cell align-base cell-lead">Categories &amp; Subcategories</th>
              {table.headers.map((header, i) => (
                <th key={i} className="pt-2 pb-2 pl-2 pr-2 position-sticky nzap-table-header-cell d-table-cell align-top">
                  <span className="label">{header.label}</span> <span className="alt-name d-none d-md-inline-block">{header.altName}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{table.body ? renderBody(table) : null}</tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
ExploreByPathway.propTypes = {
  filters: PropTypes.object.isRequired,
  scenarios: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    filters: state.filters,
    scenarios: state.scenarios,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreByPathway);
