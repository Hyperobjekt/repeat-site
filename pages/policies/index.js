import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";
import RepeatHead from "../_components/global/head";
import RepeatHeader from "../_components/global/header";
import Stats from "../_components/global/stats";
import InTheMedia from "../_components/global/in-the-media";
import RepeatFooter from "../_components/global/footer";
import RepeatHero from "../_components/global/hero";

let policies = [
  {
    stats: {
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
    },
    description: "Vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla.",
  },
  {
    stats: {
      header: "U.S. Climate Action Partnership 2050 Carbon Plan",
      background: "",
      stats: [
        {
          value: "15.2%",
          label: "Average Reduction in Fossil Fuels",
          supportingText: "Every year",
        },
        {
          value: "75%",
          label: "Increase in Renewable Energy",
          supportingText: "By 2050",
        },
        {
          value: "1.2 Trillion",
          label: "Private Sector Investment",
          supportingText: "In Clean Energy",
        },
      ],
    },
    description: "Vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla.",
  },
  {
    stats: {
      header: "Small Business Alliance Clean Jobs Proposal",
      background: "",
      stats: [
        {
          value: "37%",
          label: "Increase in Renewables",
          supportingText: "By 2050",
        },
        {
          value: "13.5%",
          label: "Average Annual Reduction in Fossil Fuels",
          supportingText: "Starting in 2023",
        },
        {
          value: "1.4 Million",
          label: "New Roles Created",
          supportingText: "In Energy Industries",
        },
      ],
    },
    description: "Vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla.",
  },
];

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
          <RepeatHero backgroundClass="bg-policies-cover md:bg-center bg-fixed md:bg-cover bg-no-repeat" />
          <div className="white-spacer absolute z-0 -mt-40 bg-white border-t-4 hidden sm:block"></div>
          <div className="max-w-screen-lg m-auto relative z-10 -mt-40 text-repeat-black pb-24">
            <div className="container subpages lg:w-3/4 bg-white rounded-tr-2xl border-t-4 border-repeat">
              <h2 className="text-2xl md:text-5xl pt-8 font-extrabold font-obliqua">
                Climate Policies Evaluated <br />
                in the Repeat Project
              </h2>
              <p className="font-utopia pt-6 md:w-4/5 text-lg text-repeat-burnt">Proin a vestibulum dui. Cras vitae erat felis. Mauris ullamcorper est sit amet velit ultrices egestas. Duis sit amet fringilla risus, non auctor eros. Nulla id tellus ac lectus ornare convallis. Pellentesque efficitur risus ligula, a ullamcorper ipsum porttitor quis.</p>
            </div>
          </div>
          {/* <RepeatHero headerText="Climate Policies Evaluated in the Repeat Project" subheaderText="Proin a vestibulum dui. Cras vitae erat felis. Mauris ullamcorper est sit amet velit ultrices egestas. Duis sit amet fringilla risus, non auctor eros. Nulla id tellus ac lectus ornare convallis. Pellentesque efficitur risus ligula, a ullamcorper ipsum porttitor quis." bg="" />
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
         */}
        </div>
      </>

      {policies.map((policy, i) => (
        <div key={i} className="container max-w-screen-lg pb-8 m-auto">
          <Stats stats={policy.stats} />
          <div className="md:w-1/2 pb-5 text-lg pt-8 text-repeat-black">
            <p>{policy.description}</p>
            <a className="text-black hover:text-repeat" href="">
              <span className="inline-block align-middle leading-5 border-b-2 border-black hover:border-repeat">Read more</span>
              <span className="inline-block align-middle">
                <ChevronRightIcon className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      ))}

      <InTheMedia />
      <RepeatFooter />
    </React.Fragment>
  );
}
