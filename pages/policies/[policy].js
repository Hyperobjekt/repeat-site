import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RepeatHead from "../_components/global/head";
import RepeatHeader from "../_components/global/header";
import SectionHeader from "../_components/global/section-header";
import Stats from "../_components/global/stats";
import InTheMedia from "../_components/global/in-the-media";
import RepeatFooter from "../_components/global/footer";
import RepeatPolicy from "../_components/policy";
const { policies } = require("../../_data/policies.json");

export default function PolicyPage() {
  const router = useRouter();
  // let { policy } = router.query;
  // policy = policies.filter(p => p.slug === policy)[0];

  return (
    <React.Fragment>
      <RepeatHead />
      <a className="absolute -top-6 left-0 z-50 focus:-top-0" href="#maincontent">
        Skip to main
      </a>
      <RepeatHeader />
      <RepeatPolicy />
      <SectionHeader headerText="evaluate the policies" subheaderText="Out data set currently features the Biden administration’s climate program. More policies will become available as their data are integrated with the REPEAT Project." />
      {/*<Stats policy={policy} />*/}
      <div className="py-8"></div>
      <InTheMedia />
      <RepeatFooter />
    </React.Fragment>
  );
}
