import React from "react";
import Link from "next/link"
import RepeatHead from "../_components/global/head";
import RepeatHeader from "../_components/global/header";
import SectionHeader from "../_components/global/section-header";
import Stats from "../_components/global/stats";
import InTheMedia from "../_components/global/in-the-media";
import RepeatFooter from "../_components/global/footer";
import RepeatHero from "../_components/global/hero";

let stats = {
  header: "The Biden Administration Climate Program",
  background: "",
  stats: [
    {
      value: "78%",
      label: "Increase in Renewables",
      supportingText: "By 2050",
    },
    {
      value: "13.5%",
      label: "Average Annual Reduction in Fossil Fuels",
      supportingText: "Starting in 2023",
    },
    {
      value: "16 Million",
      label: "New Roles Created",
      supportingText: "In Energy Industries",
    },
  ],
};

export default function HomePage() {
  return (
    <React.Fragment>
      <RepeatHead />
      <a className="absolute -top-6 left-0 z-50 focus:-top-0" href="#maincontent">
        Skip to main
      </a>
      <RepeatHeader />

      <>
        <div className="bg-policy-background bg-repeat-mobile md:bg-repeat-right-top bg-no-repeat">
          <RepeatHero headerText="Policies" subheaderText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio praesentium sunt eveniet earum voluptates minus illo impedit vel fugiat, reprehenderit dolores enim suscipit reiciendis laboriosam sit neque ullam in. Minima!" bg="" />
          <div className="container max-w-screen-lg pb-8 m-auto">
            <div className="md:w-1/2 pb-5 text-lg text-repeat-black">
              <ul className="list-disc">
                <li className="text-3xl py-2 text-repeat-teal">
                  <Link href="/policies/biden-administration-plan">
                    <a className="text-repeat-teal" href="/policies/biden-administration-plan">
                      The GREEN Act (from the House)
                    </a>
                  </Link>
                </li>
                <li className="text-3xl py-2 text-repeat-teal">
                  <Link href="/policies/biden-administration-plan">
                    <a className="text-repeat-teal" href="/policies/biden-administration-plan">
                      The Clean Energy for America Act (from the Senate)
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>

      <SectionHeader headerText="evaluate the policies" subheaderText="Out data set currently features the Biden administration’s climate program. More policies will become available as their data are integrated with the REPEAT Project." />
      <Stats stats={stats} />
      <div className="py-8"></div>
      <InTheMedia />
      <RepeatFooter />
    </React.Fragment>
  );
}
