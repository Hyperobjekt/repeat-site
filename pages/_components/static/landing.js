import React from "react";
import Link from "next/link";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import Stats from "../global/stats";
import InTheMedia from "../global/in-the-media";
const { policies } = require("../../../_data/policies.json");

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

			<SectionHeader headerText="Our Reports" subheaderText="Quisque ullamcorper massa augue, sodales a elit congue, ut tempus ex tincidunt. Nulla eu magna neque." />

			<div className="container max-w-screen-lg pb-20 m-auto text-lg text-repeat-black">
        <h3 className="font-bold text-4xl mt-4 mb-4">Latest report: The Climate Impact of Congressional Infrastructure and Budget Bills</h3>
        <div className="md:w-full py-6">
          <div className="flex flex-col md:flex-row h-full items-center">
            <a href="/docs/REPEAT_Prelim_Report_Addendum_111221.pdf" target="_blank" rel="noreferrer noopener" className="block w-full md:w-3/5">
              <img src="/images/summary-report.jpg" alt="" />
            </a>
            <div className="w-full md:w-2/5 pl-0 md:pl-10 d-none">
              <div className="block font-utopia pt-3">
                <em><a href="/docs/REPEAT_Preliminary_Report_102021.pdf" target="_blank" rel="noreferrer noopener" className="primary-link">Download the REPEAT Project Summary Report</a> for details on the impact of recently enacted and pending policies on carbon dioxide emissions, clean energy and electric vehicle deployment, fossil energy use, and more. (This version, January XX, 2021.)</em>
              </div>
              <Link href="/reports">
								<a href="/reports" className="text-sm font-bold inline-block pt-5 border-b-2 border-black">
									View all reports &gt;
								</a>
							</Link>
            </div>
          </div>
        </div>
      </div>

			<SectionHeader headerText="Policy Evaluation" subheaderText="Quisque ullamcorper massa augue, sodales a elit congue, ut tempus ex tincidunt. Nulla eu magna neque." />
			
			<div className="container max-w-screen-lg pb-20 m-auto text-lg text-repeat-black">
        <h3 className="font-bold text-4xl mt-4 mb-4">Dive Into the Policy Analysis</h3>
        <div className="md:w-full py-6">
          <div className="flex flex-col md:flex-row h-full items-center">
            <a href="/docs/REPEAT_Prelim_Report_Addendum_111221.pdf" target="_blank" rel="noreferrer noopener" className="block w-full md:w-3/5">
              <img src="/images/summary-report.jpg" alt="" />
            </a>
            <div className="w-full md:w-2/5 pl-0 md:pl-10 d-none">
              <div className="block font-utopia pt-3">
                <em>Latest policies reviewed include <a href="/policies/iija" target="_blank" rel="noreferrer noopener" className="primary-link">The Infrastructure Investment and American Jobs Act of 2021 ('IIJA')</a>, The Build Back Better Act, <a href="/policies/bbb-1" target="_blank" rel="noreferrer noopener" className="primary-link">September 2021 version ('BBB 1.0')</a> and <a href="/policies/bbb-2" target="_blank" rel="noreferrer noopener" className="primary-link">November 2021 version ('BBB 2.0')</a>.</em>
              </div>
              <Link href="/policies">
								<a href="/policies" className="text-sm font-bold inline-block pt-5 border-b-2 border-black">
									View all policies &gt;
								</a>
							</Link>
            </div>
          </div>
        </div>

			</div>

			<InTheMedia />
		</React.Fragment>
	);
};

export default RepeatLanding;