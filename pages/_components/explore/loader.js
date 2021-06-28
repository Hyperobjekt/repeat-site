import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { loadFilters } from "../../../redux/actions/filters.actions";
import ExploreFilter from "./filter";
import ExploreBenchmark from "./benchmark";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ExploreLoader = () => {
  const dispatch = useDispatch();
  const [activeState, setActiveState] = useState("National");
  const filters = useSelector((state) => state.filters);
  useEffect(() => {
    dispatch(loadFilters());
  }, []);
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
      <h2 className="text-repeat-teal text-3xl font-bold mb-3">Examine the Data</h2>
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
        <ExploreFilter />
      </div>
      <div className="">
        <ExploreBenchmark />
      </div>
    </div>
  );
};

export default ExploreLoader;
