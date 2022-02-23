import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";
import RepeatHead from "../_components/global/head";
import RepeatHeader from "../_components/global/header";
import Stats from "../_components/global/stats";
import InTheMedia from "../_components/global/in-the-media";
import RepeatFooter from "../_components/global/footer";
import RepeatHero from "../_components/global/hero";
import ExploreLoader from "../_components/explore/loader";
let { policies } = require("../../_data/policies.json");

export default function PoliciesPage() {
  return (
    <React.Fragment>
      <RepeatHead />
      <a className="absolute -top-6 left-0 z-50 focus:-top-0" href="#maincontent">
        Skip to main
      </a>
      <RepeatHeader />
      <div className="bg-policy-background bg-repeat-mobile md:bg-repeat-right-top bg-no-repeat">
        <RepeatHero
          bgClasses="bg-policies-cover bg-parallax bg-center-top bg-no-repeat" />
        <div className="white-spacer absolute z-0 -mt-40 bg-white border-t-4 hidden sm:block"></div>
        <div className="max-w-screen-lg m-auto relative z-10 -mt-40 text-repeat-black pb-24">
          <div className="container subpages lg:w-3/4 bg-white rounded-tr-2xl border-t-4 border-repeat">
            <h1 className="text-2xl md:text-5xl pt-8 font-extrabold font-obliqua">
              Climate Policies Evaluated <br />
              in the Repeat Project
            </h1>
            <p className="font-utopia pt-6 md:w-4/5 text-lg text-repeat-burnt">Proin a vestibulum dui. Cras vitae erat felis. Mauris ullamcorper est sit amet velit ultrices egestas. Duis sit amet fringilla risus, non auctor eros. Nulla id tellus ac lectus ornare convallis. Pellentesque efficitur risus ligula, a ullamcorper ipsum porttitor quis.</p>
          </div>
        </div>
      </div>

      {policies.filter(p => !p.benchmark).map((policy, i) => {
        return(
          <div key={i} className="container max-w-screen-lg pb-8 m-auto">
           {/* <h2 className="text-2xl md:text-4xl pt-8 text-repeat-black font-extrabold font-obliqua">
              {policy.title}
            </h2>*/}

            <Stats policy={policy} />

            <div className="md:w-1/2 pb-5 text-lg pt-8 text-repeat-black">
              <p>{policy.description}</p>
              <Link href={`/policies/ + ${policy.slug}`}>
                <a className="text-black hover:text-repeat">
                  <span className="inline-block align-middle leading-5 border-b-2 border-black hover:border-repeat">Read more</span>
                  <span className="inline-block align-middle">
                    <ChevronRightIcon className="h-4 w-4" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        );
      })}

      <div className="container max-w-screen-lg pb-10 m-auto">
        <ExploreLoader canChangeCols={true} />
      </div>

      <InTheMedia />
      <RepeatFooter />
    </React.Fragment>
  );
}
