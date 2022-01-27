import React from "react";
import Link from "next/link";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import Stats from "../global/stats";
import InTheMedia from "../global/in-the-media";
import policies from '../../../_data/policies.json';
import reports from '../../../_data/reports.json';

const RepeatLanding = () => {
		return (
			<React.Fragment>
				<RepeatHero mode="dark" bgClasses="bg-home-cover bg-parallax bg-center-top bg-no-repeat" headerText="Data Driven Energy & Climate Policy Evaluation" subheaderText="Compiled by the Princeton ZERO Lab to put granular analysis in the hands of policy makers, media and the general public." />

				<div className="container max-w-screen-lg pt-10 pb-20 m-auto text-lg text-repeat-black">
					<div className="md:w-3/5">
						<p>
							The REPEAT Project provides regular, timely, and independent environmental and economic evaluation of federal energy and climate policies as they’re proposed and enacted. From Congressional legislation to proposed regulations and executive actions, the REPEAT Project provides a detailed look at the United States’ evolving energy and climate policy environment and the country’s progress on the road to net-zero greenhouse gas emissions.
						</p>
						<br />
						<p>
							Led by the Princeton ZERO Lab (<a className="primary-link" href="https://mae.princeton.edu/people/faculty/jenkins" target="_blank" rel="noreferrer noopener">Prof. Jesse D. Jenkins, PI</a>), in partnership with <a className="primary-link" href="https://www.evolved.energy/" target="_blank" rel="noreferrer noopener">Evolved Energy Research</a> and <a className="primary-link" href="https://engineering.dartmouth.edu/community/faculty/erin-mayfield" target="_blank" rel="noreferrer noopener">Prof. Erin Mayfield</a> of Dartmouth College, the REPEAT Project employs a suite of geospatial planning and analysis tools coupled with detailed macro-energy system optimization models capable of rapidly evaluating policy and regulatory proposals at politically-relevant spatial resolutions (e.g., state, county, and sometimes finer resolutions). This includes evaluation of candidate sites for wind and solar development, thermal power plant siting and repowering, and transmission expansion as well as the impacts of the nation’s energy infrastructure on air quality and public health, and changes in energy sector employment. The REPEAT toolkit reflects further development and refinement of the models and methods used in the landmark <a className="primary-link" href="https://netzeroamerica.princeton.edu/" target="_blank" rel="noreferrer noopener">Princeton Net-Zero America Study</a>. Data and publications are intended to provide independent, timely, and credible information and analysis for broad educational purposes, including as a resource for stakeholders, decision-makers, and the media. Funding for the REPEAT Project was provided by a grant from <a className="primary-link" href="https://hewlett.org/" target="_blank" rel="noreferrer noopener">the Hewlett Foundation</a>.
						</p>
					</div>

					{Object.keys(reports).map(slug => {
						const report = reports[slug];
						return (
							<div className="mt-24" key={slug}>
								<div className="md:w-3/5">
									<h3 className="font-bold text-2xl mt-4 mb-6">{report.title}</h3>
									<div dangerouslySetInnerHTML={{ __html: report.description }}></div>
								</div>
								<div className="md:w-full py-6">
									<div className="flex flex-col md:flex-row h-full items-center">
										<a href={`/docs/${report.pdf}`} target="_blank" rel="noreferrer noopener" className="block w-full md:w-3/5">
											<img src={`/images/${slug}.jpg`} alt="" />
										</a>
										<div className="w-full md:w-2/5 pl-0 md:pl-10 d-none">
											<div className="block font-utopia pt-3">
												<em dangerouslySetInnerHTML={{ __html: report.aside }}></em>
											</div>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>

				<SectionHeader headerText="Dive Into the Policy Analysis" />
				<div className="container max-w-screen-lg pb-20 m-auto text-lg text-repeat-black">
					<div className="md:w-3/5">
						<p className="font-bold text-2xl">View our granular analysis of the impact of current and pending federal energy and climate policy and our detailed data portal.</p>
						<Link href="/policies">
							<a href="/policies" className="text-2xl font-bold inline-block pt-5 border-b-2 border-black">
								Explore Data &gt;
							</a>
						</Link>
					</div>
				</div>

				<InTheMedia />
			</React.Fragment>
		);
};

export default RepeatLanding;