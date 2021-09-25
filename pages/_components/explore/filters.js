import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { loadFilters, loadFilterAction } from "../../../redux/actions/filters.actions";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ExploreFilters = ({ filters, setFilterClasses, policy }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeState, setActiveState] = useState("National");
  const [apiQuery, setApiQuery] = useState({});

  const getQuery = () => {
    let query = {};
    query.state = router.query.state;
    query.category = router.query.categories ? router.query.categories.split(",") : [];
    query.subcategory = router.query.subcategories ? router.query.subcategories.split(",") : [];
    return query;
  };

  useEffect(async () => {
    let query = getQuery();
    let nf = await dispatch(loadFilters({ ...query })); // new filters
    let nas = nf.filters.usStates.filter((state) => state.active); // new active state
    setActiveState(nas[0].label);
  }, []);
  const changeUsState = (state) => {
    let usStates = [...filters.usStates].map((usstate) => ({ ...usstate, active: usstate.slug === state.slug }));
    let newFilters = { ...filters, usStates };
    let query = { ...apiQuery, policy, state: state.slug };
    dispatch(loadFilterAction(newFilters));
    dispatch(loadScenarios(query));
    setActiveState(state.label);
    setApiQuery(query);
  };
  const loadStateMenu = () => {
    return (
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-repeat-black text-sm font-medium text-white hover:bg-repeat-neutral hover:text-repeat-dark">
                {activeState}
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
                            <button onClick={() => changeUsState(state)} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "w-full text-left block px-4 py-2 text-sm")}>
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
    );
  };
  const assembleCategories = (filters) => {
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
        <div className="flex px-2 pt-5 border-b-4 border-repeat">
          <div
            className={filters.comparison === "benchmark" ? "flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 bg-repeat text-white font-bold rounded-t-md" : "flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 border-repeat-neutral border-l-2 border-t-2 border-r-2 rounded-t-md"}
            onClick={() => {
              setComparison("benchmark");
            }}
          >
            Benchmark
          </div>
          <div
            className={filters.comparison === "timeseries" ? "flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 bg-repeat text-white font-bold rounded-t-md" : "flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 border-repeat-neutral border-l-2 border-t-2 border-r-2 rounded-t-md"}
            onClick={() => {
              setComparison("timeseries");
            }}
          >
            Time Series
          </div>
        </div>
        <p className="text-repeat-dark pt-8">Scope (select state or national)</p>
        <div className="py-2">Category</div>
        <div className="block pt-3 px-3">
          {categories.map((category) => (
            <div
              key={category.slug}
              className={classNames(category.class, "cursor-pointer")}
              onClick={() => {
                toggleCategory(category);
              }}
            >
              {category.label}
            </div>
          ))}
        </div>
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
    );
  };
  const toggleCategory = (category) => {
    let categories = [...filters.levelOneFilters].map((cat) => ({ ...cat, active: cat.slug === category.slug && cat.active ? false : cat.active || cat.slug === category.slug }));
    let categorySlugs = categories.filter((e) => e.active).map((e) => e.slug);
    let subcategories = [...filters.levelTwoFilters].map((sub) => ({ ...sub, active: categorySlugs.includes(sub.slug) }));
    let newFilters = { ...filters, levelOneFilters: categories, levelTwoFilters: subcategories };
    let query = { ...apiQuery, category: category.slug };
    if (!categories.filter((e) => e.active).length) delete query.category;
    dispatch(loadFilterAction(newFilters));
    dispatch(loadScenarios(query));
    setApiQuery(query);
  };
  const toggleSubCategory = (subcategory) => {
    let routerQuery = { ...router.query };
    delete routerQuery.comparison;
    let subcategories = [...filters.levelTwoFilters].map((sub) => ({ ...sub, active: sub.slug === subcategory.slug && sub.active ? false : sub.active || sub.slug === subcategory.slug }));
    let subcategorySlugs = subcategories.filter((e) => e.active).map((e) => e.slug);
    let newFilters = { ...filters, levelTwoFilters: subcategories };
    let query = { ...apiQuery, subcategory: subcategory.slug };
    if (!subcategories.filter((e) => e.active).length) delete query.subcategory;
    routerQuery.state = routerQuery.state || "national";
    routerQuery.subcategories = subcategorySlugs.join(",");
    dispatch(loadFilterAction(newFilters));

    dispatch(loadScenarios({ ...routerQuery }));
    setApiQuery(query);
  };
  const setComparison = (comparison) => {
    let query = getQuery();
    localStorage.setItem("comparison", comparison);
    dispatch(loadFilters({ ...query }));
  };
  return (
    <>
      <div className="flex">
        <div className="flex-item pt-5">{loadStateMenu()}</div>
      </div>

      <div className="py-8">
        <div className="py-2">Filter by</div>
        <>{filters ? assembleCategories(filters) : null}</>
      </div>
    </>
  );
};

export default ExploreFilters;
