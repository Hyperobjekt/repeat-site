import React from "react";
import Link from "next/link";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import PolicyPreview from "../global/policy-preview";
import InTheMedia from "../global/in-the-media";

const { policies } = require("../../../_data/policies.json");
const { reports } = require("../../../_data/reports.json");

const RepeatReports = () => {
	return (
		<React.Fragment>
			<RepeatHero bgClasses="bg-media-cover bg-parallax bg-center-top bg-no-repeat" />
			<div className="white-spacer absolute z-0 -mt-40 bg-white border-t-4 hidden sm:block"></div>
			<div className="max-w-screen-lg m-auto relative z-10 -mt-40 text-repeat-black pb-24">
				<div className="container subpages lg:w-3/4 bg-white rounded-tr-2xl border-t-4 border-repeat">
					<h2 className="text-2xl md:text-5xl pt-8 font-extrabold font-obliqua">
						Reports
					</h2>
					<p className="font-utopia pt-6 md:w-4/5 text-lg text-repeat-burnt">
						A series of reports summarizing key findings from REPEAT Project analysis of proposed and recently enacted federal energy and climate policies.
					</p>
				</div>
				<div className="container max-w-screen-lg pb-8 m-auto text-lg">

					{reports.map(report => (
						<div className="mt-24">
							<div className="md:w-3/5">
								<h3 className="font-bold text-2xl mt-4 mb-6">
									{report.title}
								</h3>
								<div>
									<div dangerouslySetInnerHTML={{ __html: report.desc }} />
								</div>
							</div>
							<div className="md:w-full py-6">
								<div className="flex flex-col md:flex-row h-full items-center">
									<a href={`/docs/${report.pdf}`} target="_blank" rel="noreferrer noopener" className="block w-full md:w-3/5">
										<img src={`/images/${report.image}`} alt="" />
									</a>
									<div className="w-full md:w-2/5 pl-0 md:pl-10 d-none">
										<div className="block font-utopia pt-3 italic" dangerouslySetInnerHTML={{ __html: report.prompt }} />
									</div>
								</div>
							</div>
						</div>
					))}

				</div>
			</div>

			<SectionHeader headerText="Evaluate the policies" subheaderText={"The REPEAT Project provides regular, timely, and independent environmental and economic evaluation of federal energy and climate policies as they’re proposed and enacted. <a href=\"/policies\" class=\"primary-link\">Dive into the details for each of the policies analyzed by the project to date...</a>"} />
			<PolicyPreview policy={policies[0]} />

			<div className="py-8"></div>
		</React.Fragment>
	);
};

export default RepeatReports;
