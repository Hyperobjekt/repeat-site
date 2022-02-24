import React from "react";
import Link from "next/link";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import InTheMedia from "../global/in-the-media";
import PolicyPreview from "../global/policy-preview";
const { policies } = require("../../../_data/policies.json");

const team = [{
				name: "Jesse D. Jenkins (PI)",
				title: "Princeton University Zero Lab",
		},
		{
				name: "Erin Mayfield (co-PI)",
				title: "Princeton University Zero Lab",
		},
		{
				name: "Neha Patankar",
				title: "Princeton University Zero Lab",
		},
		{
				name: "Qingyu Xu",
				title: "Princeton University Zero Lab",
		},
		{
				name: "Anna Jacobson",
				title: "Princeton University Zero Lab",
		},
		{
				name: "Ryan Jones",
				title: "Evolved Energy Research",
		},
		{
				name: "Jamil Farbes",
				title: "Evolved Energy Research",
		},
		{
				name: "Greg Schivley",
				title: "Carbon Impact Consulting",
		},
		{
				name: "Emily Leslie",
				title: "Montara Mountain Energy",
		},
		{
				name: "Andrew Pascale",
				title: "Montara Mountain Energy",
		},
		{
				name: "Claire Wayner",
				title: "Princeton University Zero Lab",
		},
		{
				name: "Aneesha Manocha",
				title: "Princeton University Zero Lab",
		},
		{
				name: "Riti Bhandarkar",
				title: "Princeton University Zero Lab",
		},
		{
				name: "Cady Feng",
				title: "Princeton University Zero Lab",
		},
];

const stats = {
		header: "The Biden Administration Climate Program",
		background: "",
		stats: [{
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

const RepeatAbout = () => {
		return (
			<React.Fragment>
				<RepeatHero bgClasses="bg-about-cover bg-parallax bg-center-top bg-no-repeat" />
				<div className="white-spacer absolute z-0 -mt-40 bg-white border-t-4 hidden sm:block"></div>
				<div className="max-w-screen-lg m-auto relative z-10 -mt-40 text-repeat-black text-lg">
					<div className="container subpages lg:w-3/4 bg-white rounded-tr-2xl border-t-4 border-repeat">
						<h2 className="text-2xl md:text-5xl pt-8 font-extrabold font-obliqua">
							A New Toolkit for Evaluating Energy and Climate Policy
						</h2>
						<p className="font-utopia pt-6 md:w-4/5 text-repeat-burnt">
							The REPEAT Project provides regular, timely, and independent environmental and economic evaluation of federal energy and climate policies as they’re proposed and enacted.
						</p>
						<div className="md:w-4/5 leading-7 py-7 text-lg">
							<p className="pt-3">
								From Congressional legislation to proposed regulations and executive actions, the REPEAT Project provides a detailed look at the United States’ evolving policy environment and the country’s progress on the road to net-zero greenhouse gas emissions.
							</p>
							<p className="pt-3">
								Led by the Princeton ZERO Lab (<a className="primary-link" href="https://mae.princeton.edu/people/faculty/jenkins" target="_blank" rel="noreferrer noopener">Prof. Jesse D. Jenkins, PI</a>), in partnership with <a className="primary-link" href="https://www.evolved.energy/" target="_blank" rel="noreferrer noopener">Evolved Energy Research</a> and <a className="primary-link" href="https://engineering.dartmouth.edu/community/faculty/erin-mayfield" target="_blank" rel="noreferrer noopener">Prof. Erin Mayfield</a> of Dartmouth College, the REPEAT Project employs a suite of geospatial planning and analysis tools coupled with detailed macro-energy system optimization models capable of rapidly evaluating policy and regulatory proposals at politically-relevant spatial resolutions (e.g., state, county, and sometimes finer resolutions). This includes evaluation of candidate sites for wind and solar development, thermal power plant siting and repowering, and transmission expansion as well as the impacts of the nation’s energy infrastructure on air quality and public health, and changes in energy sector employment.
								Results and publications are intended to provide independent, timely, and credible information and analysis for broad educational purposes, including as a resource for stakeholders, decision-makers, and the media.
								Funding for the REPEAT Project was provided by a grant from <a className="primary-link" href="https://hewlett.org/" target="_blank" rel="noreferrer noopener">the Hewlett Foundation</a>.
							</p>
							<p className="pt-3">
								The REPEAT toolkit reflects further development and refinement of the models and methods used in the landmark <a className="primary-link" href="https://netzeroamerica.princeton.edu/" target="_blank" rel="noreferrer noopener">Princeton <i>Net-Zero America</i> Study</a>, which “set an entirely new standard” in energy transition modeling by offering an “unprecedented degree of clarity and granularity” in its results, according to John Holdren, former Science Advisor to President Obama and Director of the White House Office of Science and Technology Policy. The influential report was <a className="primary-link" href="https://netzeroamerica.princeton.edu/media" target="_blank" rel="noreferrer noopener">widely covered in major media</a> and the spatially-explicit and granular results and associated maps have proven to be highly relevant to a wide range of stakeholders and decision makers. The impact of and reception to the <i>Net-Zero America</i> project indicates the desire for more politically-salient outputs from energy systems models and inspired and motivated the REPEAT Project, which aims to evolve and automate these detailed methods for timely and granular evaluation of federal policies.
							</p>
						</div>
						<a href="https://mae.princeton.edu/people/faculty/jenkins" target="_blank" rel="noreferrer noopener" className="pt-8 inline-block">
							<div className="block text-3xl border-4 border-repeat text-center py-5 font-mono relative">
								<div className="block -top-6 w-full absolute">
									<span className="bg-white text-xs font-mono text-repeat py-1 px-3 uppercase">Princeton University</span>
								</div>
								ZERO LAB
							</div>
							<span className="block pt-2 text-xs px-4 font-mono font-bold text-repeat-black">
								<span className="text-repeat">Z</span>ero-carbon&nbsp;
								<span className="text-repeat">E</span>nergy Systems&nbsp;
								<span className="text-repeat">R</span>esearch and&nbsp;
								<span className="text-repeat">O</span>ptimization&nbsp;
								<span className="text-repeat">Lab</span>oratory&nbsp;
							</span>
						</a>
						<div className="py-6 md:w-4/5 leading-7">
							<h3 className="font-bold text-2xl mt-4 mb-3">Princeton University Zero Lab</h3>
							<p className="pt-3 pb-6">The Princeton Zero-carbon Energy systems Research and Optimization Laboratory (<a className="primary-link" href="https://mae.princeton.edu/people/faculty/jenkins" target="_blank" rel="noreferrer noopener">ZERO Lab</a>) conducts research to improve decision-making and accelerate rapid, affordable, and effective transitions to net-zero carbon energy systems. ZERO Lab’s research focuses on improving and applying optimization-based macro-energy systems models to evaluate low-carbon energy technologies and generate insights to guide policy and planning decisions.</p>
							<b>The REPEAT Project Team</b>
						</div>
					</div>
				</div>
				{/* Team */}
				<div className="container max-w-screen-lg m-auto text-repeat-black">
					<div className="subpages w-100 m-auto pb-10 pt-0 px-0">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-2">
							{team.map((member) => (
							<div key={member.name} className="py-2 px-0 text-center">
								{/* <img className="w-full rounded-full" src={`images/${member.name.split(" ").join(" -").toLocaleLowerCase()}.svg`} alt={member.name} /> */}
								<div className="text-left pt-2">
									<h3 className="font-bold">{member.name}</h3>
									<h5 className="text-sm">{member.title}</h5>
								</div>
							</div>
							))}
						</div>
					</div>
				</div>
				{/* Organizations */}
				<div className="container max-w-screen-lg m-auto text-repeat-black pb-20">
					<div className="subpages lg:w-3/4 bg-white">
						<a href="https://www.evolved.energy/" target="_blank" rel="noreferrer noopener" className="md:w-4/5 leading-7 pt-10">
							<img src="images/evolved-energy-research.svg" alt="" />
						</a>
						<div className="md:w-4/5 leading-7 pt-2 text-lg">
							<h3 className="font-bold text-2xl mt-4 mb-3">Evolved Energy Research</h3>
							<p className="pt-3"><a className="primary-link" href="https://www.evolved.energy/" target="_blank" rel="noreferrer noopener">Evolved Energy Research</a> (EER) is a research and consulting firm focused on questions posed by transforming the energy economy. Their consulting work and insight, supported by complex technical analyses of energy systems, are designed to support strategic decision-making for policymakers, stakeholders, utilities, investors, and technology companies. EER has developed models to simulate and optimize economy-wide energy systems, bulk power systems operations, and utility distribution systems.</p>
						</div>
						<div className="md:w-4/5 leading-7 pt-10 text-lg">
							<h3 className="font-bold text-2xl mt-4 mb-3">Carbon Impact Consulting</h3>
							<p className="pt-3"><a className="primary-link" href="https://www.linkedin.com/in/gregschivley/" target="_blank" rel="noreferrer noopener">Carbon Impact Consulting</a> leads development of the <a className="primary-link" href="https://github.com/PowerGenome/PowerGenome" target="_blank" rel="noreferrer noopener">PowerGenome</a> open-source software project and works with clients to produce data and analysis for energy system models.</p>
						</div>
						<div className="md:w-4/5 leading-7 pt-10 text-lg">
							<h3 className="font-bold text-2xl mt-4 mb-3">Montara Mountain Energy</h3>
							<p className="pt-3"><a className="primary-link" href="https://www.linkedin.com/in/emilyleslie/" target="_blank" rel="noreferrer noopener">Montara Mountain Energy</a> provides technical and analytic consulting services addressing the spatial component of the decarbonization challenge. Much of our work consists of data-driven visual problem-solving, answering questions like the following: where are the best clean energy opportunities, from a technical, economic, societal and environmental perspective?</p>
						</div>
						<div className="max-w-screen-lg m-auto bg-white">
							<div className="flex flex-col md:flex-row md:w-5/8 h-full items-center">
								<a href="https://netzeroamerica.princeton.edu/" target="_blank" rel="noreferrer noopener" className="w-full block md:w-full leading-7 pt-10 text-lg">
									<img src="images/Princeton_NZA_Interim_Report_15_Dec_2020.svg" alt="" />
								</a>
								<div className="hidden w-full block md:w-1/3 font-utopia md:pl-7 pt-3">
									<i>The Net-Zero America study “set an entirely new standard” in energy transition modeling by offering an “unprecedented degree of clarity and granularity” in its results.</i>
								</div>
							</div>
						</div>
						<div className="md:w-4/5 leading-7 pt-3 text-lg">
							<h3 className="font-bold text-2xl mt-4 mb-3">The Net Zero America Study</h3>
							<p className="pt-3">
								The <a className="primary-link" href="https://netzeroamerica.princeton.edu/" target="_blank" rel="noreferrer noopener">Princeton <i>Net-Zero America</i> Study</a> provides the most detailed and granular analysis of paths to net-zero greenhouse gas emissions in the United States. The study quantified five distinct technological pathways, all using technologies known today, by which the United States could decarbonize its entire economy. With multiple plausible and affordable pathways available, the societal conversation can now turn from “if” to “how” and focus on the choices the nation and its myriad stakeholders wish to make to shape the energy transition. Net-Zero America provides granular guidance to inform these critical choices.
							</p>
						</div>
					</div>
					{/* NZA report image */}
				</div>
				
				<SectionHeader headerText="Evaluate the policies" subheaderText={"The REPEAT Project provides regular, timely, and independent environmental and economic evaluation of federal energy and climate policies as they’re proposed and enacted. <a href=\"/policies\" class=\"primary-link\">Dive into the details for each of the policies analyzed by the project to date...</a>"} />
				<PolicyPreview policy={policies[0]} />
				
				<div className="py-8"></div>
				<InTheMedia />
			</React.Fragment>
		);
};

export default RepeatAbout;