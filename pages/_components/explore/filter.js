import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { loadFilters } from "../../../redux/actions/filters.actions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ExploreFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  const setFilterClasses = (i) => {
    let index = (i + 1) % 6;
    index = index ? index : 6 - index;
    return `inline-block rounded text-sm mb-3 mr-3 px-3 py-1 bg-repeat-table-${index} text-white`;
  };

  useEffect(() => {
    console.log(filters);
    let l1 = filters.levelOneFilters.map((cat, i) => ({ ...cat, class: setFilterClasses(i) }));
    let l2 = filters.levelTwoFilters.map((sub, i) => {
      sub.class = l1.filter((e) => e.slug === sub.levelOneSlug)[0].class;
      return sub;
    });
    setCategories(l1);
    setSubcategories(l2);
  }, [filters]);

  return (
    <div className="">
      <div className="py-2">Filter by</div>
      <div className="py-2">Category</div>
      <div className="block pt-3 px-3">
        {categories
          .filter((cat) => cat.label !== "IMPACTS")
          .map((category, i) => (
            <div key={category.slug} className={category.class}>
              {category.label}
            </div>
          ))}
      </div>
      <div className="py-2">Subcategory</div>
      <div className="block pt-3 px-3">
        {subcategories.map((subcategory, i) => (
          <div key={i} className={subcategory.class}>
            {subcategory.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreFilter;

// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { Select, Collapse } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// import { setFilterAction } from "../../../redux/actions/filters.actions";
// import { loadScenarios } from "../../../redux/actions/scenarios.actions";
// import { generateUrl, handleError } from "../../../_helpers";
// import "antd/dist/antd.css";

// const { Option } = Select;
// const { Panel } = Collapse;

// const ExploreFilter = ({ filters, setFilterAction, loadScenarios }) => {
//   const [isFilterDrawOpen, toggleFilterDraw] = useState(localStorage.isFilterDrawOpen === "true");
//   const filterHeader = (
//     <>
//       <span className="pl-0">Filter</span>
//       <DownOutlined rotate={isFilterDrawOpen ? 180 : 0} className="align-baseline pl-4 clickable" />{" "}
//     </>
//   );

//   useEffect(() => {
//     window.history.replaceState(null, null, filters.url);
//     loadScenarios(filters.url || location.search).catch(handleError);
//     // if (!query.state) setQuery({ ...query, state: 'national' })
//     // if (filters.levelOneFilters.length) {
//     //   loadScenarios(query)
//     //   loadFiltersAction(filters, query)
//     // }
//   }, [filters]);

//   function usStateChange(usStateSlug) {
//     let page = null;
//     let usStates = [...filters.usStates].map((state) => ({ ...state, active: state.slug === usStateSlug }));
//     let newFilters = { ...filters, usStates, page };
//     return setFilterAction({ ...newFilters, url: generateUrl(newFilters) });
//   }

//   function examineChange(tab, e) {
//     let key = e ? e.key : "";
//     if (key !== " " && key !== "Enter" && e && isNaN(key)) return;
//     if (key === " ") e.preventDefault();
//     if (key === "Enter") e.preventDefault();
//     let newFilters;
//     let page = null;
//     if (filters.explorer === "year") {
//       let years = [...filters.years].map((year) => ({ ...year, active: year.slug === tab }));
//       newFilters = { ...filters, table: tab, years, page };
//     }
//     if (filters.explorer === "pathway") {
//       let scenarios = [...filters.scenarios].map((scenario) => ({ ...scenario, active: scenario.slug === tab }));
//       newFilters = { ...filters, table: tab, scenarios, page };
//     }
//     return setFilterAction({ ...newFilters, url: generateUrl(newFilters) });
//   }

//   function updateCategories(slug, e) {
//     let key = e ? e.key : "";
//     if (key !== " " && key !== "Enter" && e) return;
//     if (key === " ") e.preventDefault();
//     if (key === "Enter") e.preventDefault();

//     let page = null;
//     let activeSlugs = [...filters.levelOneFilters].filter((category) => category.active).map((category) => category.slug);
//     activeSlugs.includes(slug) ? activeSlugs.splice(activeSlugs.indexOf(slug), 1) : activeSlugs.push(slug);
//     let levelOneFilters = [...filters.levelOneFilters].map((category) => ({ ...category, active: activeSlugs.includes(category.slug) }));
//     let newFilters = { ...filters, levelOneFilters, page };
//     return setFilterAction({ ...newFilters, url: generateUrl(newFilters) });
//   }

//   function updateSubcategories(slug, e) {
//     let key = e ? e.key : "";
//     if (key !== " " && key !== "Enter" && e) return;
//     if (key === " ") e.preventDefault();
//     if (key === "Enter") e.preventDefault();

//     let page = null;
//     let activeSlugs = [...filters.levelTwoFilters].filter((subcategory) => subcategory.active).map((subcategory) => subcategory.slug);
//     activeSlugs.includes(slug) ? activeSlugs.splice(activeSlugs.indexOf(slug), 1) : activeSlugs.push(slug);
//     let levelTwoFilters = [...filters.levelTwoFilters].map((subcategory) => ({ ...subcategory, active: activeSlugs.includes(subcategory.slug) }));
//     let newFilters = { ...filters, levelTwoFilters, page };
//     return setFilterAction({ ...newFilters, url: generateUrl(newFilters) });
//   }

//   function updateFilterDraw(isActive) {
//     localStorage.setItem("isFilterDrawOpen", isActive);
//     toggleFilterDraw(isActive);
//   }

//   const examiner = () => {
//     if (!filters.years || !filters.scenarios) return;
//     let reject = ["", "high", "low", "yes"];
//     let years = [...filters.years].sort((a, b) => (a.slug < b.slug ? -1 : 1));
//     let pathways = [...filters.scenarios].filter((e) => !reject.includes(e.slug));
//     let tabs;
//     if (filters.explorer === "year") tabs = years;
//     if (filters.explorer === "pathway") {
//       let sortOrder = ["ref", "e-positive", "e-negative", "e-b-positive", "ere-negative", "ere-positive"];
//       tabs = [];
//       [...pathways].forEach((e) => (tabs[sortOrder.indexOf(e.slug)] = e));
//     }

//     return (
//       <React.Fragment>
//         {/* Desktop */}
//         <div className="d-none d-md-table text-center w-100 tabs">
//           {tabs.map((tab, i) => (
//             <div
//               role="button"
//               tabIndex={0}
//               key={i}
//               className={filters.table === tab.slug ? "d-table-cell pl-3 pr-3 clickable tab active" : "d-table-cell pl-3 pr-3 clickable tab"}
//               onKeyDown={(e) => {
//                 examineChange(tab.slug, e);
//               }}
//               onClick={() => {
//                 examineChange(tab.slug);
//               }}
//             >
//               <div className="tile tween pt-1">{tab.label}</div>
//             </div>
//           ))}
//         </div>
//         {/* Mobile */}
//         <label htmlFor="explore-by-filter" className="d-block d-md-none pb-2 scope">
//           Scope (select to change {filters.explorer})
//         </label>
//         <Select className="d-block d-md-none w-100 nzap-radius" id="explore-by-filter" showArrow={false} value={filters.table} onChange={examineChange} aria-activedescendant={null} aria-expanded="false">
//           {tabs.map((tab, i) => (
//             <Option key={i} id={tab.slug} value={tab.slug}>
//               {tab.label}
//             </Option>
//           ))}
//         </Select>
//       </React.Fragment>
//     );
//   };

//   const loadSubcategories = (filters) => {
//     let activeCategories = [...filters.levelOneFilters].filter((category) => category.active).map((category) => category.slug);
//     return filters.levelTwoFilters
//       .filter((subcategory) => activeCategories.includes(subcategory.levelOneSlug))
//       .map((category, i) => {
//         const categoryClass = category.active ? "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-3 mr-2 nzap-radius clickable filter-category active" : "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-3 mr-2 nzap-radius clickable filter-category";
//         return (
//           <div
//             role="button"
//             tabIndex={0}
//             key={i}
//             className={categoryClass}
//             onKeyDown={(e) => {
//               return updateSubcategories(category.slug, e);
//             }}
//             onClick={() => {
//               return updateSubcategories(category.slug);
//             }}
//           >
//             {category.label}
//           </div>
//         );
//       });
//   };

//   const loadUI = () => {
//     let activeUsState = filters.usStates.filter((state) => state.active)[0].slug;
//     return (
//       <div className="container nzap-filters">
//         <div className="row">
//           <div className="col-12 pl-0 pt-4 pb-3">
//             <label htmlFor="geo-scope" className="d-block pb-2 scope">
//               Scope (select state or national)
//             </label>
//             <Select className="nzap-radius w-100 w-md-25" id="geo-scope" showArrow={false} defaultValue={activeUsState} onChange={usStateChange} aria-activedescendant={null} aria-expanded="false">
//               {filters.usStates.map((usState, i) => (
//                 <Option key={i} id={usState.slug} value={usState.slug}>
//                   {usState.label}
//                 </Option>
//               ))}
//             </Select>
//           </div>
//           <div className="col-12 position-relative pb-3 pl-0">
//             <Collapse bordered={false} defaultActiveKey={isFilterDrawOpen ? ["1"] : []} expandIcon={({ isActive }) => updateFilterDraw(isActive)} className="site-collapse-custom-collapse">
//               <Panel header={filterHeader} key="1" className="site-collapse-custom-panel">
//                 <div className="container-fluid pl-0">
//                   <div className="row">
//                     <div className="col-12 filter-categories">
//                       <div className="d-block pl-2 filter-label pb-2">Categories</div>
//                       <div className="d-block pl-2 filter-data">
//                         {filters.levelOneFilters.map((category, i) => {
//                           const categoryClass = category.active ? "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-3 mr-2 nzap-radius clickable filter-category active" : "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-3 mr-2 nzap-radius clickable filter-category";
//                           return (
//                             <div
//                               role="button"
//                               tabIndex={0}
//                               key={i}
//                               className={categoryClass}
//                               onKeyDown={(e) => {
//                                 return updateCategories(category.slug, e);
//                               }}
//                               onClick={() => {
//                                 return updateCategories(category.slug);
//                               }}
//                             >
//                               {category.label}
//                             </div>
//                           );
//                         })}
//                       </div>
//                     </div>
//                     {loadSubcategories(filters).length ? (
//                       <div className="col-12 filter-categories">
//                         <div className="d-block pl-2 filter-label pb-2">Subcategories</div>
//                         <div className="d-block pl-2 filter-data">{loadSubcategories(filters)}</div>
//                       </div>
//                     ) : null}
//                   </div>
//                 </div>
//               </Panel>
//             </Collapse>
//           </div>
//           <div className="col-12 pl-md-4 pr-md-4">
//             <div className="row">
//               <div className="d-md-block col-12 pl-0 pr-0 examiner position-relative">
//                 <div className="d-none d-md-block position-absolute" id="top-left-corner"></div>
//                 <div className="d-none d-md-block position-absolute" id="top-right-corner"></div>
//                 {examiner()}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
//   return <>{filters ? loadUI() : null}</>;
// };

// ExploreFilter.propTypes = {
//   filters: PropTypes.object.isRequired,
//   setFilterAction: PropTypes.func.isRequired,
//   loadScenarios: PropTypes.func.isRequired,
// };

// function mapStateToProps(state) {
//   return {
//     filters: state.filters,
//   };
// }

// const mapDispatchToProps = { setFilterAction, loadScenarios };

// export default connect(mapStateToProps, mapDispatchToProps)(ExploreFilter);
