import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import RepeatHead from "../_components/global/head";
import RepeatHeader from "../_components/global/header";
import PolicyPreview from "../_components/global/policy-preview";
import InTheMedia from "../_components/global/in-the-media";
import RepeatFooter from "../_components/global/footer";
import RepeatHero from "../_components/global/hero";
import ExploreLoader from "../_components/explore/loader";
let { policies } = require("../../_data/policies.json");

export default function PoliciesPage() {
	return (
		<React.Fragment>
			<RepeatHead />
			<a className="absolute -top-6 left-0 z-50 focus:-top-0" href="#maincontent">
				Skip to main
			</a>
			<RepeatHeader />
			<div className="bg-policy-background bg-repeat-mobile md:bg-repeat-right-top bg-no-repeat">
				<RepeatHero
					bgClasses="bg-policies-cover bg-parallax bg-center-top bg-no-repeat" />
				<div className="white-spacer absolute z-0 -mt-40 bg-white border-t-4 hidden sm:block"></div>
				<div className="max-w-screen-lg m-auto relative z-10 -mt-40 text-repeat-black pb-24">
					<div className="container subpages lg:w-3/4 bg-white rounded-tr-2xl border-t-4 border-repeat">
						<h1 className="text-2xl md:text-5xl pt-8 font-extrabold font-obliqua">
							Climate Policies Evaluated <br />
							in the Repeat Project
						</h1>
						<div className="pt-6 md:w-4/5 text-repeat-burnt">
							<p className="font-utopia text-lg">
								Use our Data Explorer tool to compare energy usage by category for each policy we evaluate, relative to benchmarks or other policies.
								{" "}
								<a href="#data" className="text-repeat-burnt hover:text-black">
									<span className="inline-block align-middle leading-5 border-b-2 border-repeat-burnt hover:border-black">
										Jump to Data Explorer
									</span>
									<span className="inline-block align-middle">
										<ChevronDownIcon className="h-4 w-4" />
									</span>
								</a>
							</p>

							<p className="font-utopia text-lg">
								You can also read our analysis and explore data for individual policies.
								{" "}
								<a href="#policies" className="text-repeat-burnt hover:text-black">
									<span className="inline-block align-middle leading-5 border-b-2 border-repeat-burnt hover:border-black">
										Jump to Policies
									</span>
									<span className="inline-block align-middle">
										<ChevronDownIcon className="h-4 w-4" />
									</span>
								</a>
							</p>

						</div>
					</div>
				</div>
			</div>

			<div id="policies">
				{policies.filter(p => !p.benchmark).map((policy, i) => (
					<PolicyPreview key={i} policy={policy} />
				))}
			</div>

			<div className="container max-w-screen-lg pb-10 m-auto" id="data">
				<ExploreLoader canChangeCols={true} />
			</div>

			<InTheMedia />
			<RepeatFooter />
		</React.Fragment>
	);
}
