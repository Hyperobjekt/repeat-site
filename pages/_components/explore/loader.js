import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { loadFilters, loadFilterAction } from "../../../redux/actions/filters.actions";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";
import ExploreBenchmark from "./benchmark";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const rawData = [
  {
    state: "Arizona",
    color: "table-1",
    category: "Pillar 1: Efficiency/Electrification",
    subcategory: "Electricity Demand",
    policy: "biden-administration",
    values: [
      {
        variable: "Bulk demand",
        history: {
          2020: "97.88",
        },
        policy: {
          2030: "97.88",
          2050: "46.66",
        },
        repeat: {
          2030: "93.88",
          2050: "93.88",
          deltas: { 2030: 0, 2050: 0 },
        },
        nzap: {
          2030: "97.88",
          2050: "43.02",
        },
      },
      {
        variable: "unbulk demand",
        history: {
          2020: "97.88",
        },
        policy: {
          2030: "97.88",
          2050: "46.66",
        },
        repeat: {
          2030: "93.88",
          2050: "93.88",
          deltas: { 2030: 0, 2050: 0 },
        },
        nzap: {
          2030: "97.88",
          2050: "46.66",
        },
      },
    ],
  },
];

const ExploreLoader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let routerQuery = { ...router.query };
  delete routerQuery.policy;
  let filters = useSelector((state) => state.filters);
  let scenarios = useSelector((state) => state.scenarios);
  const [tableData, setTableData] = useState(rawData);
  const [activeState, setActiveState] = useState("National");
  const [params, setParams] = useState(routerQuery);

  useEffect(() => {
    dispatch(loadFilters());
    dispatch(loadScenarios());
    console.log(filters, scenarios, params);
  }, []);

  const setFilterClasses = (color, active) => {
    return active ? `inline-block rounded border-2 border-transparent text-sm mb-3 mr-3 px-3 py-1 bg-repeat-${color} text-white` : `inline-block rounded text-sm mb-3 mr-3 px-3 py-1 border-2 border-repeat-${color} text-repeat-${color} text-white`;
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

  const changeUsState = (state) => {
    let newDataTable = [...rawData].filter((row) => row.state === state.label);
    let usStates = [...filters.usStates].map((usstate) => ({ ...usstate, active: usstate.slug === state.slug }));
    let newFilters = { ...filters, usStates };
    dispatch(loadFilterAction(newFilters));
    setActiveState(state.label);
    setTableData(newDataTable);
  };

  const toggleCategory = (category) => {
    let categories = [...filters.levelOneFilters].map((cat) => ({ ...cat, active: cat.slug === category.slug && cat.active ? false : cat.active || cat.slug === category.slug }));
    let newFilters = { ...filters, levelOneFilters: categories };
    dispatch(loadFilterAction(newFilters));
    // setCategories([...categories].map((e) => ({ ...e, active: true || category.slug === e.slug })));
    // setParams({
    //   categories,
    // });
    // router.push(`?counter=10`, undefined, { shallow: true });
  };
  const toggleSubCategory = (subcategory) => {
    let subcategories = [...filters.levelTwoFilters].map((sub) => ({ ...sub, active: sub.slug === subcategory.slug && sub.active ? false : sub.active || sub.slug === subcategory.slug }));
    let newFilters = { ...filters, levelTwoFilters: subcategories };
    dispatch(loadFilterAction(newFilters));
    // setCategories([...categories].map((e) => ({ ...e, active: true || category.slug === e.slug })));
    // setParams({
    //   categories,
    // });
    // router.push(`?counter=10`, undefined, { shallow: true });
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
              <Menu.Items static className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 h-60 overflow-auto">
                  {filters.usStates.map((state) => (
                    <Menu.Item key={state.slug}>
                      {({ active }) => (
                        <button onClick={() => changeUsState(state)} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "w-full text-left block px-4 py-2 text-sm")}>
                          {state.label}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    );
  };
  return (
    <div className="">
      <h2 className="text-repeat-teal text-3xl font-bold mb-3">Examine the Data</h2>
      <p className="text-repeat-dark">Maecenas efficitur dolor. Donec gravida dolor quis dignissim elementum.</p>
      <p className="text-repeat-dark pt-8">Compare by</p>
      <div className="flex px-2 pt-5 border-b-4 border-repeat">
        <div className="flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 bg-repeat text-white font-bold rounded-t-md">Benchmark</div>
        <div className="flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 border-repeat-neutral border-l-2 border-t-2 border-r-2 rounded-t-md">Time Series</div>
      </div>
      <p className="text-repeat-dark pt-8">Scope (select state or national)</p>
      <div className="flex">
        <div className="flex-item pt-5">{loadStateMenu()}</div>
      </div>

      <div className="py-8">
        <div className="py-2">Filter by</div>
        <>{assembleCategories(filters)}</>
      </div>
      <div className="">
        <ExploreBenchmark tableData={scenarios} />
      </div>
    </div>
  );
};

export default ExploreLoader;
