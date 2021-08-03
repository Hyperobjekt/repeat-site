import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { loadFilters } from "../../../redux/actions/filters.actions";
import ExploreBenchmark from "./benchmark";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ExploreLoader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let routerQuery = { ...router.query };
  delete routerQuery.policy;
  const [activeState, setActiveState] = useState("National");
  const [params, setParams] = useState(routerQuery);
  let filters = useSelector((state) => state.filters);

  const setFilterClasses = (i) => {
    let index = (i + 1) % 6;
    index = index ? index : 6 - index;
    return `inline-block rounded text-sm mb-3 mr-3 px-3 py-1 bg-repeat-table-${index} text-white`;
  };

  const assembleCategories = (filters) => {
    let categories = [...filters.levelOneFilters]
      .map((cat, i) => {
        return { ...cat, class: setFilterClasses(i) };
      })
      .filter((cat) => cat.label !== "IMPACTS");
    let subcategories = [...filters.levelTwoFilters]
      .filter((sub) => sub.levelOneSlug !== "impacts")
      .map((sub, i) => {
        sub.class = categories.filter((e) => e.slug === sub.levelOneSlug)[0].class;
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
          {subcategories.map((subcategory, i) => (
            <div key={i} className={subcategory.class}>
              {subcategory.label}
            </div>
          ))}
        </div>
      </>
    );
  };

  useEffect(() => {
    dispatch(loadFilters());
  }, []);

  const toggleCategory = (category) => {
    console.log(category, filters);
    // setCategories([...categories].map((e) => ({ ...e, active: true || category.slug === e.slug })));
    // setParams({
    //   categories,
    // });
    // router.push(`?counter=10`, undefined, { shallow: true });
  };

  const loadScopeMenu = () => {
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
                        <button onClick={() => setActiveState(state.label)} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "w-full text-left block px-4 py-2 text-sm")}>
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
      <h2 className="text-repeat-light-blue text-3xl font-bold mb-3 bg-repeat-table-1">Examine the Data</h2>
      <p className="text-repeat-dark">Maecenas efficitur dolor. Donec gravida dolor quis dignissim elementum.</p>
      <p className="text-repeat-dark pt-8">Compare by</p>
      <div className="flex px-2 pt-5 border-b-4 border-repeat">
        <div className="flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 bg-repeat text-white font-bold rounded-t-md">Benchmark</div>
        <div className="flex-item px-3 text-sm pt-2 pb-1 cursor-pointer mx-2 border-repeat-neutral border-l-2 border-t-2 border-r-2 rounded-t-md">Time Series</div>
      </div>
      <p className="text-repeat-dark pt-8">Scope (select state or national)</p>
      <div className="flex">
        <div className="flex-item pt-5">{loadScopeMenu()}</div>
      </div>

      <div className="py-8">
        <div className="py-2">Filter by</div>
        <>{assembleCategories(filters)}</>
      </div>
      <div className="">
        <ExploreBenchmark />
      </div>
    </div>
  );
};

export default ExploreLoader;
