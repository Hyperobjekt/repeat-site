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
      <RepeatHero mode="dark" backgroundClass="bg-home-cover lg:bg-center bg-fixed bg-cover bg-no-repeat" headerText="Rapid Energy & Climate Policy Evaluation" subheaderText="Compiled by the Princeton ZERO Lab to put granular analysis in the hands of policy makers, media and the general public." />

      <div className="container max-w-screen-lg pt-10 pb-20 m-auto text-lg text-repeat-black">
        <div className="md:w-3/5">
          <p>
            The REPEAT Project provides regular, timely, and independent environmental and economic evaluation of federal energy and climate policies as they’re proposed and enacted. From Congressional legislation to proposed regulations and executive actions, the REPEAT Project provides a detailed look at the United States’ evolving energy and climate policy environment and the country’s progress on the road to net-zero greenhouse gas emissions. 
          </p>
          <br/>
          <p>
          Led by the Princeton ZERO Lab (<a className="primary-link" href="https://mae.princeton.edu/people/faculty/jenkins" target="_blank" rel="noreferrer noopener">Prof. Jesse D. Jenkins, PI</a>), in partnership with <a className="primary-link" href="https://www.evolved.energy/" target="_blank" rel="noreferrer noopener">Evolved Energy Research</a> and <a className="primary-link" href="https://engineering.dartmouth.edu/community/faculty/erin-mayfield" target="_blank" rel="noreferrer noopener">Prof. Erin Mayfield</a> of Dartmouth College, the REPEAT Project employs a suite of geospatial planning and analysis tools coupled with detailed macro-energy system optimization models capable of rapidly evaluating policy and regulatory proposals at politically-relevant spatial resolutions (e.g., state, county, and sometimes finer resolutions). This includes evaluation of candidate sites for wind and solar development, thermal power plant siting and repowering, and transmission expansion as well as the impacts of the nation’s energy infrastructure on air quality and public health, and changes in energy sector employment. The REPEAT toolkit reflects further development and refinement of the models and methods used in the landmark <a className="primary-link" href="https://netzeroamerica.princeton.edu/" target="_blank" rel="noreferrer noopener">Princeton Net-Zero America Study</a>. Data and publications are intended to provide independent, timely, and credible information and analysis for broad educational purposes, including as a resource for stakeholders, decision-makers, and the media. Funding for the REPEAT Project was provided by a grant from <a className="primary-link" href="https://hewlett.org/" target="_blank" rel="noreferrer noopener">the Hewlett Foundation</a>.
          </p>
          <br/>
          <h3 className="font-bold text-2xl mt-4 mb-6">Preliminary Report: The Climate Impact of Congressional Infrastructure and Budget Bills</h3>

          <p>With Congress considering infrastructure and budget bills that would provide unprecedented public investments in clean energy infrastructure, clean vehicles, and other low-carbon solutions, the REPEAT Project is releasing this preliminary report on the national-scale impacts of the Build Back Better Act being considered in the House of Representatives (H.R. 5376, as reported by the Budget Committee on September 27, 2021) and the Infrastructure Investment and Jobs Act (<a className="primary-link" href="https://www.congress.gov/bill/117th-congress/house-bill/3684/text" target="_blank" rel="noreferrer noopener">H.R. 3684</a>, as passed by the Senate on August 10, 2021). </p>
          <br/>
          </div>

          <div className="md:w-full py-6">
          <div className="flex flex-col md:flex-row h-full items-center">
            <a href="/docs/REPEAT_Preliminary_Report_101921.pptx" target="_blank" rel="noreferrer noopener" className="block w-full md:w-3/5">
              <img src="/images/report-image.jpg" alt="" />
            </a>
            <div className="w-full md:w-2/5 pl-0 md:pl-10 d-none">
              <div className="block hidden">
                <span className="inline-block rounded-full w-4 h-4 mr-3 bg-repeat"></span>
                <span className="inline-block font-bold">PV</span>
              </div>
              <div className="block hidden">
                <span className="inline-block rounded-full w-4 h-4 mr-3 bg-repeat"></span>
                <span className="inline-block font-bold">Wind</span>
              </div>
              <div className="block hidden">
                <span className="inline-block rounded-full w-4 h-4 mr-3 bg-repeat-neutral"></span>
                <span className="inline-block font-bold">Population Density &lt; 100 people per sq. mi</span>
              </div>
              <div className="block font-utopia pt-3">
                <i>Download the report for details on the impact of these pending policies on carbon dioxide emissions, clean energy and electric vehicle deployment, fossil energy use, and more. (This version, October XX, 2021)</i>
              </div>
            </div>
          </div>
        </div>

          <div className="md:w-3/5">

          <br/>
          <h3 className="font-bold text-2xl mt-4 mb-6">Detailed Data Portal, Coming Soon ...</h3>

          <p>REPEAT will release granular, geospatially resolved results, analysis of air quality, public health, and employment impacts, and a state-by-state data portal at this website very soon. Stay tuned!</p>

            {/* The Princeton ZERO Lab and{" "}
            <a className="primary-link" href="http://netzeroamerica.princeton.edu/" target="_blank" rel="noreferrer noopener">
              Net-Zero America study
            </a>{" "}
            team, in partnership with{" "}
            <a className="primary-link" href="https://www.evolved.energy/" target="_blank" rel="noreferrer noopener">
              Evolved Energy Research
            </a>
            , have developed a suite of geospatial planning and analysis tools coupled with detailed macro-energy system optimization models capable of rapidly evaluating policy and regulatory proposals at politically-relevant spatial resolutions (e.g., state, county, and sometimes finer resolutions). This includes evaluation of candidate sites for wind and solar development, thermal power plant siting and repowering, and transmission expansion as well as associated impacts on air quality and labor/employment. */}
         
        </div>
        
        <div className="hidden md:w-3/5">
          <p>
            These tools were employed to great impact in the Princeton Net-Zero America study, which “set an entirely new standard” in energy transition modeling by offering an “unprecedented degree of clarity and granularity” in its results, according to John Holdren, former Science Advisor to President Obama and Director of the White House Office of Science and Technology Policy. The spatially-explicit and granular results and associated maps have proven to be highly relevant to a wide range
            of stakeholders and decision makers, and the responses to the report indicate the desire for more politically-salient outputs from energy systems models.
          </p>
          <p className="pt-6">The REPEAT Project is further developing and refininge this suite of geospatially-granular planning, modeling, and visualization tools and employing them to rapidly evaluate federal energy and climate policy proposals, providing independent, timely, and credible information and analysis for broad educational purposes, including as a resource available publicly for stakeholders, decision-makers, and the media.</p>
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
