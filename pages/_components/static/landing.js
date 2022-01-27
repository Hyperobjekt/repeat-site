import React from "react";
import Link from "next/link";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import Stats from "../global/stats";
import InTheMedia from "../global/in-the-media";
import policies from '../../../_data/policies.json';

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

				<div className="mt-24">
					<div className="md:w-3/5">
						<h3 className="font-bold text-2xl mt-4 mb-6">Summary Report: The Climate Impact of Congressional Infrastructure and Budget Bills</h3>
						<div>
							<p>The <strong>Infrastructure Investment and Jobs Act</strong> (<a href="https://www.congress.gov/bill/117th-congress/house-bill/3684/text" className="primary-link" target="_blank">H.R. 3684</a>) signed into law on November 15th contains billions of dollars for energy efficiency, electric vehicle charging, transmission networks, and historic investments in clean energy innovation. But how far will it cut U.S. emissions of greenhouse gases? What are the impacts of the <strong>Build Back Better Act</strong> (<a href="https://rules.house.gov/bill/117/hr-5376" className="primary-link" target="_blank">H.R. 5376</a>) still pending in Congress? Will current policies put the United States on track to cut emissions 50% below peak levels by 2030 and net-zero by 2050?</p>
						</div>
					</div>
					<div className="md:w-full py-6">
						<div className="flex flex-col md:flex-row h-full items-center">
							<a href="/docs/REPEAT_Prelim_Report_Addendum_111221.pdf" target="_blank" rel="noreferrer noopener" className="block w-full md:w-3/5">
								<img src="/images/summary-report.jpg" alt="" />
							</a>
							<div className="w-full md:w-2/5 pl-0 md:pl-10 d-none">
								<div className="block font-utopia pt-3">
									<em><a href="/docs/REPEAT_Preliminary_Report_102021.pdf" target="_blank" rel="noreferrer noopener" className="primary-link">Download the REPEAT Project Summary Report</a> for details on the impact of recently enacted and pending policies on carbon dioxide emissions, clean energy and electric vehicle deployment, fossil energy use, and more. (This version, January XX, 2021.)</em>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-24">
					<div className="md:w-3/5">
						<h3 className="font-bold text-2xl mt-4 mb-6">Preliminary Report: The Climate Impact of Congressional Infrastructure and Budget Bills</h3>
						<div>
							<p>With Congress considering infrastructure and budget bills that would provide unprecedented public investments in clean energy infrastructure, clean vehicles, and other low-carbon solutions, the REPEAT Project is releasing this preliminary report on the national-scale impacts of the Build Back Better Act being considered in the House of Representatives (<a className="primary-link" href="https://www.congress.gov/bill/117th-congress/house-bill/5376/text" target="_blank" rel="noreferrer noopener">H.R. 5376</a>, as reported by the Budget Committee on September 27, 2021) and the Infrastructure Investment and Jobs Act (<a className="primary-link" href="https://www.congress.gov/bill/117th-congress/house-bill/3684/text" target="_blank" rel="noreferrer noopener">H.R. 3684</a>, as passed by the Senate on August 10, 2021). </p>
						</div>
					</div>
					<div className="md:w-full py-6">
						<div className="flex flex-col md:flex-row h-full items-center">
							<a href="/docs/REPEAT_Preliminary_Report_102021.pdf" target="_blank" rel="noreferrer noopener" className="block w-full md:w-3/5">
								<img src="/images/preliminary-report.jpg" alt="" />
							</a>
							<div className="w-full md:w-2/5 pl-0 md:pl-10 d-none">
								<div className="block font-utopia pt-3">
									<em><a className="primary-link" href="/docs/REPEAT_Preliminary_Report_102021.pdf" target="_blank" rel="noreferrer noopener">Download the report</a> for details on the impact of these pending policies on carbon dioxide emissions, clean energy and electric vehicle deployment, fossil energy use, and more. (This version, October 20, 2021.)</em>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-24">
					<div className="md:w-3/5">
						<h3 className="font-bold text-2xl mt-4 mb-6">Addendum to Preliminary Report (11/12/21)</h3>
						<div>
							<p>Since release of our "Preliminary Report: The Climate Impact of Congressional Infrastructure and Budget Bills," on October 20th, 2021, the U.S. House of Representatives passed the <b>Infrastructure Investment and Jobs Act</b> (<a href="https://www.congress.gov/bill/117th-congress/house-bill/3684/text" className="primary-link" target="_blank" rel="noopener noreferrer"> H.R. 3684 </a>) on November 6th and introduced a new version of the <b>Build Back Better Act</b> (<a href="https://rules.house.gov/bill/117/hr-5376" className="primary-link" target="_blank" rel="noopener noreferrer"> H.R. 5376, RCP 117-18 </a>) on November 3, 2021.</p>
							<br />
							<p>There are a significant number of changes to the Build Back Better Act, which the REPEAT Project has carefully documented along with a thorough catalog of all climate and clean energy provisions in the final Infrastructure Bill in <a className="primary-link" href="http://bit.ly/REPEAT-Policies" target="_blank" rel="noopener noreferrer">this document</a>.</p>
						</div>
					</div>
					<div className="md:w-full py-6">
						<div className="flex flex-col md:flex-row h-full items-center">
							<a href="/docs/REPEAT_Prelim_Report_Addendum_111221.pdf" target="_blank" rel="noreferrer noopener" className="block w-full md:w-3/5">
								<img src="/images/addendum-report.jpg" alt="" />
							</a>
							<div className="w-full md:w-2/5 pl-0 md:pl-10 d-none">
								<div className="block font-utopia pt-3">
									<em><a href="/docs/REPEAT_Prelim_Report_Addendum_111221.pdf" target="_blank" rel="noreferrer noopener" className="primary-link">This addendum to our preliminary report</a> compiles emissions results from our original analysis of the Build Back Better Act (‘BBB 1.0’) as reported by the Budget Committee on September 27, 2021 but <i>without</i> the Clean Electricity Performance Program (the most substantive single change from BBB 1.0 to BBB 2.0) as well as our initial analysis of the Infrastructure Bill impacts.</em>
								</div>
							</div>
						</div>
					</div>
				</div>

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