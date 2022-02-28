import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import PolicyPreview from "../global/policy-preview";
import Stats from "../global/stats";
import InTheMedia from "../global/in-the-media";
const { policies } = require("../../../_data/policies.json");
const { reports } = require("../../../_data/reports.json");

const RepeatLanding = () => {
	return (
		<React.Fragment>
			<RepeatHero mode="dark" bgClasses="bg-home-cover bg-parallax bg-center-top bg-no-repeat" headerText="Data Driven Energy & Climate Policy Evaluation" subheaderText="Compiled by the Princeton ZERO Lab to put granular analysis in the hands of policy makers, media and the general public." />

			<div className="container max-w-screen-lg pt-10 pb-20 m-auto text-lg text-repeat-black">
				<div className="md:w-3/5">
					<p>
						The REPEAT Project provides regular, timely, and independent environmental and economic evaluation of federal energy and climate policies as they’re proposed and enacted. From Congressional legislation to proposed regulations and executive actions, the REPEAT Project provides a detailed look at the United States’ evolving energy and climate policy environment and the country’s progress on the road to net-zero greenhouse gas emissions.
					</p>
					<Link href="/about">
						<a href="/about" className="text-sm font-bold inline-block pt-5 border-b-2 border-black">
							Learn more about the project &gt;
						</a>
					</Link>
				</div>
			</div>

			<SectionHeader headerText="Our Reports" subheaderText="A series of reports summarizing key findings from REPEAT Project analysis." />

			<div className="container max-w-screen-lg pb-20 m-auto text-lg text-repeat-black">
        <h3 className="font-bold text-4xl mt-4 mb-4">
        	Latest report: {reports[0].title}
        </h3>
        <div className="md:w-full py-6">
          <div className="flex flex-col md:flex-row h-full items-center">
            <a href={`/docs/${reports[0].pdf}`} target="_blank" rel="noreferrer noopener" className="block w-full md:w-3/5">
              <img src={`/images/reports/${reports[0].image}`} alt="" />
            </a>
            <div className="w-full md:w-2/5 pl-0 md:pl-10 d-none">
              <div className="block font-utopia pt-3 italic" dangerouslySetInnerHTML={{ __html: reports[0].prompt }} />
              <Link href="/reports">
								<a href="/reports" className="text-sm font-bold inline-block pt-5 border-b-2 border-black">
									View all reports &gt;
								</a>
							</Link>
            </div>
          </div>
        </div>
      </div>

			<SectionHeader headerText="Policy Evaluation" subheaderText="Dive into the details on each federal policy." />

      <div id="policies">
        {policies.filter(p => !p.benchmark).map((policy, i) => (
          <PolicyPreview key={i} policy={policy} />
        ))}
      </div>

			<InTheMedia />
		</React.Fragment>
	);
};

export default RepeatLanding;