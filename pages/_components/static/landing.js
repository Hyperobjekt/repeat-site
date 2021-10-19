import React from "react";
import Link from "next/link";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import Stats from "../global/stats";
import InTheMedia from "../global/in-the-media";
// import reportPPTX from "/public/docs/REPEAT_Preliminary_Report_101921.pptx"

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

const RepeatLanding = () => {
  return (
    <React.Fragment>
      <RepeatHero mode="dark" backgroundClass="bg-home-cover lg:bg-center bg-fixed bg-cover bg-no-repeat" headerText="Data Driven Energy & Climate Policy Evaluation" subheaderText="Compiled by the Princeton ZERO Lab to put granular analysis in the hands of policy makers, media and the general public." />

      <div className="container max-w-screen-lg pt-10 pb-20 m-auto text-lg text-repeat-black">
        <div className="md:w-3/5">
        <h3 className="font-bold text-2xl mt-4 mb-6">Coming Soon ...</h3>
        </div>
      </div>  

          

          
    {/*  <SectionHeader headerText="evaluate the policies" subheaderText="Out data set currently features the Biden administration’s climate program. More policies will become available as their data are integrated with the REPEAT Project." /> 

     <Stats stats={stats} /> 

      <div className="container max-w-screen-lg pt-7 pb-20 m-auto">
        <div className="md:w-1/2">
          <p>Vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla.</p>
        </div>
        <Link href="/policies/biden-administration-plan">
          <a href="/policies/biden-administration-plan" className="text-sm font-bold inline-block pt-5 border-b-2 border-black">
            Read More &gt;
          </a>
        </Link>
      </div>

  <InTheMedia /> */}
    </React.Fragment> 
  );
};

export default RepeatLanding;
