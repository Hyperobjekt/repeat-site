import React from "react";
// import { useRouter } from "next/router";
import RepeatHead from "../_components/global/head";
import RepeatHeader from "../_components/global/header";
import SectionHeader from "../_components/global/section-header";
import Stats from "../_components/global/stats";
import InTheMedia from "../_components/global/in-the-media";
import RepeatFooter from "../_components/global/footer";
import RepeatPolicy from "../_components/policy";


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
  // const router = useRouter();
  // const { policy } = router.query;
  return (
    <React.Fragment>
      <RepeatHead />
      <a className="absolute -top-6 left-0 z-50 focus:-top-0" href="#maincontent">
        Skip to main
      </a>
      <RepeatHeader />
      <RepeatPolicy  />
      <SectionHeader headerText="evaluate the policies" subheaderText="Out data set currently features the Biden administration’s climate program. More policies will become available as their data are integrated with the REPEAT Project." />
      <Stats stats={stats} />
      <div className="py-8"></div>
      <InTheMedia />
      <RepeatFooter />
    </React.Fragment>
  );
}
