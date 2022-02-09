import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Select, Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { loadFilters, loadFilterAction } from "../../../redux/actions/filters.actions";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";
import "antd/lib/style/index.css";
import "antd/lib/select/style/index.css";
import "antd/lib/collapse/style/index.css";
let { policies } = require("../../../_data/policies.json");

const { Panel } = Collapse;

const ExploreFilters = ({ filters, policy, setFilterClasses, updatePolicy, canChangeCols }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeState, setActiveState] = useState("national");
  const [apiQuery, setApiQuery] = useState({});

  const [isFilterDrawerOpen, toggleFilterDrawer] = useState(
    typeof localStorage !== "undefined" && localStorage.isFilterDrawerOpen === "true"
  );

  useEffect(async () => {
    let query = getQuery();
    let newFilters = await dispatch(loadFilters({ ...query }));
    let newActiveState = newFilters.filters.usStates.filter((state) => state.active);
    setActiveState(newActiveState[0].slug);
    // setActivePolicy(policy);
    setApiQuery(query);
    dispatch(loadScenarios(query));
    // policies = [...policies].map(p => ({ ...p, active: p.slug === policy.slug }));
  }, []);

  //useEffect(async () => {
    // setActivePolicy(policy);
  //   console.log(policy);
  //   let query = getQuery();
  //   let newFilters = await dispatch(loadFilters({ ...query }));
  //   let newActiveState = newFilters.filters.usStates.filter((state) => state.active);
  //   setActiveState(newActiveState[0].slug);
  //   dispatch(loadScenarios({ ...query, state: "national", page: 1, limit: 25 }));
  //}, [policy]);

  const getQuery = () => {
    let query = {};
    query.page = router.query.page || 1;
    query.limit = router.query.limit || 25;
    query.state = router.query.state || "national";
    query.category = router.query.categories ? router.query.categories.split(",") : [];
    query.subcategory = router.query.subcategories ? router.query.subcategories.split(",") : [];
    return query;
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const changePolicy = (policy) => {
    // policies = [...policies].map(p => ({ ...p, active: p.slug === policy.slug }));
    // let newApiQuery = { ...apiQuery, page: 1, state: activeState };
    // dispatch(loadScenarios(newApiQuery));
    updatePolicy(policies.find((p => p.slug === policy.slug )));
    // setApiQuery(newApiQuery);
  };

  const changeUsState = (state) => {
    let usStates = [...filters.usStates].map((usstate) => ({ ...usstate, active: usstate.slug === state.slug }));
    let newFilters = { ...filters, page: 1, usStates};
    let newApiQuery = { ...apiQuery, page: 1, state: state.slug };
    dispatch(loadFilterAction(newFilters));
    dispatch(loadScenarios(newApiQuery));
    setActiveState(state.slug);
    setApiQuery(newApiQuery);
  };

  const updateFilterDrawer = (e) => {
    let isActive = e.length ? true : false;
    localStorage.setItem("isFilterDrawerOpen", isActive);
    toggleFilterDrawer(isActive);
  };

  const toggleCategory = (category) => {
    let categories = [...filters.levelOneFilters].map((cat) => ({ ...cat, active: cat.slug === category.slug && cat.active ? false : cat.active || cat.slug === category.slug }));
    let categorySlugs = categories.filter((c) => c.active).map((c) => c.slug);
    let subcategories = [...filters.levelTwoFilters].map((sub) => ({ ...sub, active: categorySlugs.includes(sub.slug)}));
    let subcategorySlugs = subcategories.filter((s) => s.active).map((s) => s.slug);
    let newFilters = { ...filters, page: 1, levelOneFilters: categories, levelTwoFilters: subcategories };
    let newApiQuery = { ...apiQuery, page: 1, category: categorySlugs, subcategory: subcategorySlugs };
    if (!categories.filter((c) => c.active).length) delete newApiQuery.category;
    if (!subcategories.filter((c) => c.active).length) delete newApiQuery.subcategory;
    dispatch(loadFilterAction(newFilters));
    dispatch(loadScenarios(newApiQuery));
    setApiQuery(newApiQuery);
  };

  const toggleSubCategory = (subcategory) => {
    let subcategories = [...filters.levelTwoFilters].map((sub) => ({ ...sub, active: sub.slug === subcategory.slug && sub.active ? false : sub.active || sub.slug === subcategory.slug }));
    let subcategorySlugs = subcategories.filter((s) => s.active).map((s) => s.slug);
    let newFilters = { ...filters, page: 1, levelTwoFilters: subcategories };
    let newApiQuery = { ...apiQuery, page: 1, subcategory: subcategorySlugs };
    if (!subcategories.filter((s) => s.active).length) delete newApiQuery.subcategory;
    dispatch(loadFilterAction(newFilters));
    dispatch(loadScenarios(newApiQuery));
    setApiQuery(newApiQuery);
  };

  const setComparison = (comparison) => {
    let query = getQuery();
    localStorage.setItem("comparison", comparison);
    dispatch(loadFilters({ ...query }));
  };


  const PolicyMenu = () => {
    return (
      <div className="flex">
        <div className="flex-item flex">
          <span className="my-auto">Policy</span>
        </div>
        <div className="flex-item pl-4">
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-repeat-black text-sm font-medium text-white hover:bg-repeat-neutral hover:text-repeat-dark">
                    {policy.navTitle}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition show={open} as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                  <Menu.Items static className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 h-60 overflow-auto">
                      {policies
                        ? policies.map((p) => (
                            <Menu.Item key={p.slug}>
                              {({ active }) => (
                                <>
                                  <button
                                    onClick={() => changePolicy(p)}
                                    className={classNames(p.slug === policy.slug || active ? "bg-gray-100 text-gray-900" : "text-gray-700", "w-full text-left block px-4 py-2 text-sm")}>
                                    {p.navTitle}
                                  </button>
                                </>
                              )}
                            </Menu.Item>
                          ))
                        : null}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    );
  };

  const ComparisonMenu = ({ filters }) => {
    return (
      <>
        <p className="pt-8 pb-4">Compare by</p>
        <div className="flex px-2 border-b-4 border-repeat">
          <div
            className={filters.comparison === "benchmark" ? "flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 bg-repeat text-white font-bold rounded-t-md" : "flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 border-repeat-neutral border-l-2 border-t-2 border-r-2 rounded-t-md"}
            onClick={() => {
              setComparison("benchmark");
            }}>
            Benchmark
          </div>
          <div
            className={filters.comparison === "timeseries" ? "flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 bg-repeat text-white font-bold rounded-t-md" : "flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 border-repeat-neutral border-l-2 border-t-2 border-r-2 rounded-t-md"}
            onClick={() => {
              setComparison("timeseries");
            }}>
            Time Series
          </div>
        </div>
      </>
    )
  }

  const StateMenu = () => {

    const activeStateObj = filters && filters.usStates ? filters.usStates.find(s => s.slug === activeState) || {} : {};

    return (
      <div className="flex">
        <div className="flex-item flex">
          <span className="my-auto">Scope</span>
        </div>
        <div className="flex-item pl-4">
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-repeat-black text-sm font-medium text-white hover:bg-repeat-neutral hover:text-repeat-dark">
                    {activeStateObj.label}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition show={open} as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                  <Menu.Items static className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 h-60 overflow-auto">
                      {filters
                        ? filters.usStates.map((state) => (
                            <Menu.Item key={state.slug}>
                              {({ active }) => (
                                <button
                                  onClick={() => changeUsState(state)}
                                  className={classNames(state.slug === activeState || active ? "bg-gray-100 text-gray-900" : "text-gray-700", "w-full text-left block px-4 py-2 text-sm")}>
                                  {state.label}
                                </button>
                              )}
                            </Menu.Item>
                          ))
                        : null}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    );
  };

  const FilterHeader = () => {
    return(
      <>
        <span className="pl-0 py-2">Filter by</span>
        <DownOutlined
          rotate={isFilterDrawerOpen ? 180 : 0}
          className="align-baseline pl-4"
        />
      </>
    );
  };

  const CategoriesMenu = ({ filters }) => {
    let categories = [...filters.levelOneFilters]
      .map((cat, i) => {
        return { ...cat, class: setFilterClasses(cat.color, cat.active) };
      })
      .filter((cat) => cat.label !== "IMPACTS");
    let subcategories = [...filters.levelTwoFilters]
      .filter((sub) => sub.levelOneSlug !== "impacts")
      .map((sub, i) => {
        sub.class = setFilterClasses(sub.color, sub.active);
        sub.visible = !!categories.filter((e) => e.slug === sub.levelOneSlug).filter((e) => e.active).length;
        return sub;
      });
    return (
      <>
        <Collapse
          ghost
          bordered={false}
          defaultActiveKey={isFilterDrawerOpen ? ["1"] : []}
          onChange={updateFilterDrawer}
          className="site-collapse-custom-collapse clickable">
          <Panel
            header={<FilterHeader />}
            showArrow={false}
            key="1">
            <div className="py-2">Category</div>
            <div className="block pt-3 px-3">
              {categories.map((category) => (
                <div
                  key={category.slug}
                  className={classNames(category.class, "cursor-pointer")}
                  onClick={() => {
                    toggleCategory(category);
                  }}>
                  {category.label}
                </div>
              ))}
            </div>

            {subcategories.filter(sub => sub.visible).length ?
              <>
                <div className="py-2">Subcategory</div>
                <div className="block pt-3 px-3">
                  {subcategories
                    .filter((sub) => sub.visible)
                    .map((subcategory, i) => (
                      <div
                        key={i}
                        className={classNames(subcategory.class, "cursor-pointer")}
                        onClick={() => {
                          toggleSubCategory(subcategory);
                        }}
                      >
                        {subcategory.label}
                      </div>
                    ))}
                </div>
              </>
            : null}
          </Panel>
        </Collapse>
      </>
    );
  };

  return (
    <>
      {canChangeCols ?
        <div className="pt-12 relative z-40">
          <PolicyMenu />
        </div>
      : null}

      <div>
        {filters ? <ComparisonMenu filters={filters} /> : null}
      </div>

      <div className="pt-12 relative z-30">
        <StateMenu />
      </div>

      <div className="py-8">
        {filters ? <CategoriesMenu filters={filters} /> : null}
      </div>
    </>
  );
};

export default ExploreFilters;
