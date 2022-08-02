import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RepeatHero from "./global/hero";
import ExploreLoader from "./explore/loader";
import ImageCarousel from "./global/image-carousel";
import Stats from "./global/stats";
import Pillars from "./global/pillars";
const { policies } = require("../../_data/policies.json");

const RepeatPolicy = () => {
	const router = useRouter();
	const [activePolicy, setActivePolicy] = useState(null);

	useEffect(() => {
		setActivePolicy(policies.filter(p => p.slug === router.query.policy)[0]);
	});


	return activePolicy ? (
		<div className="bg-policy-background bg-repeat-mobile md:bg-repeat-right-top bg-no-repeat"
			style={{ backgroundImage: `url(/images/backgrounds/${activePolicy.slug.includes("bbb") ? "policy" : activePolicy.slug}.jpg)` }}>
			<RepeatHero headerText={activePolicy.title} subheaderText={activePolicy.subTitle} bg="" />
			<div className="container max-w-screen-lg pb-8 m-auto">

				{activePolicy.desc ?
					<div className="md:w-1/2 pb-5 text-lg text-repeat-black font-effra">
						<p dangerouslySetInnerHTML={{ __html: activePolicy.desc }} />
					</div>
				: null}

				{activePolicy.footnote ?
					<div className="md:w-1/2 pb-20 text-lg text-repeat-black italic font-effra">
						<p dangerouslySetInnerHTML={{ __html: activePolicy.footnote }} />
					</div>
				: null}

				{activePolicy.stats ?
					<div className="pb-20">
						<div className="md:w-1/2">
							<h3 className="font-bold font-obliqua text-repeat-teal text-3xl mb-5">Policy Scorecard</h3>
						</div>
						<div className="md:w-full">
							<Stats policy={activePolicy} />
						</div>
					</div>
				: null}

				{activePolicy.pillars ?
					<div className="md:w-full py-0">
						<Pillars policy={activePolicy} />
					</div>
				: null}

			</div>
			<div className="container max-w-screen-lg pb-10 m-auto">
				<ExploreLoader canChangeCols={false} />
			</div>
		</div>
	) : null;
};

export default RepeatPolicy;
