/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { ChartBarIcon, CursorClickIcon, MenuIcon, ViewGridIcon, XIcon } from "@heroicons/react/outline";

const pages = [
  /* {
    name: "Policies",
    icon: CursorClickIcon,
    href: "/policy",
  }, */
  {
    name: "About",
    icon: ChartBarIcon,
    href: "/about",
  },
  {
    name: "Media",
    icon: ViewGridIcon,
    href: "/media",
  },
  /*{
    name: "NZAP",
    icon: RefreshIcon,
    target: "blank",
    href: "https://netzeroamerica.princeton.edu",
  },*/
];

const policies = [
  {
    name: "Biden Administration Plan",
    icon: ChartBarIcon,
  },

  {
    name: "U.S. Climate Action Partnership 2050 Carbon Plan",
    icon: CursorClickIcon,
  },
  {
    name: "Small Business Alliance Clean Jobs Proposal",
    icon: ViewGridIcon,
  },
  // {
  //   name: "Green New Deal",
  //   icon: RefreshIcon,
  // },
].map((e) => ({ ...e, href: "/policies/" + e.name.replace(/ /gi, "-").toLocaleLowerCase() }));

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const readScroll = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    let hasPtClass = document.getElementById("nav-bar").classList.contains("md:pt-6");
    if (document.documentElement.scrollTop > 100 && hasPtClass) {
      document.getElementById("nav-bar").classList.add("md:pt-0");
      document.getElementById("nav-bar").classList.remove("md:pt-6");
    }
    if (document.documentElement.scrollTop < 100 && !hasPtClass) {
      console.log("unshrinking");
      document.getElementById("nav-bar").classList.add("md:pt-6");
      document.getElementById("nav-bar").classList.remove("md:pt-0");
    }
    //   document.getElementById("navbar").style.padding = "30px 10px";
    //   document.getElementById("logo").style.fontSize = "25px";
    // } else {
    //   document.getElementById("navbar").style.padding = "80px 10px";
    //   document.getElementById("logo").style.fontSize = "35px";
    // }
  }
};

export default function RepeatHeader() {
  if (typeof window !== "undefined") readScroll();

  return (
    <Popover className="fixed w-screen top-0 border-t-8 border-repeat bg-black bg-opacity-80 z-50">
      {({ open }) => (
        <>
          <div className="container max-w-screen-lg mx-auto pt-4 md:px-1 sm:px-6">
            <div id="nav-bar" className="flex justify-between items-center md:pt-6 pb-4 md:justify-start md:space-x-10 transition-all duration-200 ease-in-out">
              <div className="flex justify-start pl-2 md:pl-0 lg:w-0 lg:flex-1">
                <Link href="/">
                  <a href="/">
                    <span className="text-repeat text-2xl font-bold">REPEAT</span>
                    <span className="text-repeat-light text-sm md:text-base md:pl-3 md:inline-block block">Rapid Energy Policy Evaluation and Analysis Toolkit</span>
                  </a>
                </Link>
              </div>
              <div className="pr-2 -mt-4 md:hidden">
                <Popover.Button className="p-2 inline-flex items-center justify-center text-repeat hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <div className="relative group">
                  <button className={classNames(open ? "text-white" : "font-medium border-b-4 border-transparent text-white hover:border-b-4 hover:border-repeat", "group inline-flex items-center text-base font-medium hover:text-white focus:outline-none")}>
                    <Link href="/policies">
                      <a href="/policies" className="text-base font-medium text-white">
                        <p>Policies</p>
                      </a>
                    </Link>
                  </button>
                  <div className="absolute -m-2 z-10 hidden -right-40 bg-grey-200 group-hover:block">
                    <div className="mt-6 shadow-lg">
                      {policies.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a href={item.href} className="p-3 bg-white flex items-start hover:bg-repeat-light">
                            <div className="px-2">
                              <p className="text-base font-medium text-black">{item.name}</p>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <Link href="/about">
                  <a href="/about" className="text-base font-medium border-b-4 border-transparent text-white hover:border-b-4 hover:border-repeat">
                    About
                  </a>
                </Link>
                {/* <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button className={classNames(open ? "text-white" : "font-medium border-b-4 border-transparent text-white hover:border-b-4 hover:border-repeat", "group inline-flex items-center text-base font-medium hover:text-white focus:outline-none")}>
                        <span>Policies</span>
                      </Popover.Button>

                      <Transition show={show} as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel static className="absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                          <div className="overflow-hidden">
                            <div className="relative grid gap-3 bg-white px-3 py-3 sm:gap-4 sm:p-4">
                              {policies.map((item) => (
                                <Link key={item.name} href={item.href}>
                                  <a href={item.href} className="-m-3 p-3 flex items-start hover:bg-repeat-light">
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-black">{item.name}</p>
                                    </div>
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover> */}
                <Link href="/media">
                  <a href="/media" className="text-base font-medium border-b-4 border-transparent text-white hover:border-b-4 hover:border-repeat">
                    Media
                  </a>
                </Link>
                {/* <a href="https://netzeroamerica.princeton.edu" target="blank" className="text-base font-medium border-b-4 border-transparent text-white hover:border-b-4 hover:border-repeat">
                  NZAP
                              </a> */}
              </Popover.Group>
            </div>
          </div>

          <Transition show={open} as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Popover.Panel focus static className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link href="/">
                        <a href="/">
                          <span className="text-repeat text-xl font-bold">REPEAT</span>
                        </a>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white p-2 inline-flex items-center justify-center text-repeat hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {pages.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a href={item.href} target={item.target} className="-m-3 px-3 py-2 flex items-center hover:bg-gray-50">
                            {/* <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" /> */}
                            <span className="text-base font-medium text-gray-900">{item.name}</span>
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* ..... */}
                <div className="py-6 px-5">
                  <div className="font-bold text-repeat pb-2">Policies</div>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {policies.map((item) => (
                      <a key={item.name} href={item.href} className="text-base font-medium text-gray-900 hover:text-gray-700">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
