import React from "react";
import Link from "next/link";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import Stats from "../global/stats";
import InTheMedia from "../global/in-the-media";

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
      <RepeatHero mode="dark" backgroundClass="bg-home-cover bg-fixed bg-cover bg-no-repeat" headerText="Data Driven Energy & Climate Policy Evaluation" subheaderText="Compiled by the Princeton ZERO Lab to put granular analysis in the hands of policy makers, media and the general public." />

      <div className="container max-w-screen-lg pt-10 pb-20 m-auto text-lg text-repeat-black">
        <div className="md:w-3/5">
          <p>
            The Princeton ZERO Lab and{" "}
            <a className="primary-link" href="http://netzeroamerica.princeton.edu/" target="_blank" rel="noreferrer noopener">
              Net-Zero America study
            </a>{" "}
            team, in partnership with{" "}
            <a className="primary-link" href="https://www.evolved.energy/" target="_blank" rel="noreferrer noopener">
              Evolved Energy Research
            </a>
            , have developed a suite of geospatial planning and analysis tools coupled with detailed macro-energy system optimization models capable of rapidly evaluating policy and regulatory proposals at politically-relevant spatial resolutions (e.g., state, county, and sometimes finer resolutions). This includes evaluation of candidate sites for wind and solar development, thermal power plant siting and repowering, and transmission expansion as well as associated impacts on air quality and
            labor/employment.
          </p>
        </div>
        <div className="md:w-full py-10">
          <div className="flex flex-col md:flex-row h-full items-center">
            <div className="block w-full md:w-1/2">
              <img src="/images/map.svg" alt="" />
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-20">
              <div className="block">
                <span className="inline-block rounded-full w-4 h-4 mr-3 bg-repeat"></span>
                <span className="inline-block font-bold">PV</span>
              </div>
              <div className="block">
                <span className="inline-block rounded-full w-4 h-4 mr-3 bg-repeat"></span>
                <span className="inline-block font-bold">Wind</span>
              </div>
              <div className="block">
                <span className="inline-block rounded-full w-4 h-4 mr-3 bg-repeat-neutral"></span>
                <span className="inline-block font-bold">Population Density &lt; 100 people per sq. mi</span>
              </div>
              <div className="block font-utopia pt-3">
                <i>A suite of geospatial planning tools coupled with detailed macro-energy system optimization models capable of rapid evaluation.</i>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-3/5">
          <p>
            These tools were employed to great impact in the Princeton Net-Zero America study, which “set an entirely new standard” in energy transition modeling by offering an “unprecedented degree of clarity and granularity” in its results, according to John Holdren, former Science Advisor to President Obama and Director of the White House Office of Science and Technology Policy. The spatially-explicit and granular results and associated maps have proven to be highly relevant to a wide range
            of stakeholders and decision makers, and the responses to the report indicate the desire for more politically-salient outputs from energy systems models.
          </p>
          <p className="pt-6">The REPEAT Project is further developing and refininge this suite of geospatially-granular planning, modeling, and visualization tools and employing them to rapidly evaluate federal energy and climate policy proposals, providing independent, timely, and credible information and analysis for broad educational purposes, including as a resource available publicly for stakeholders, decision-makers, and the media.</p>
        </div>
      </div>

      <SectionHeader headerText="evaluate the policies" subheaderText="Out data set currently features the Biden administration’s climate program. More policies will become available as their data are integrated with the REPEAT Project." />

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

      <InTheMedia />
    </React.Fragment>
  );
};

export default RepeatLanding;
