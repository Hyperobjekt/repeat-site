import React from "react";
import Link from "next/link";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import PolicyPreview from "../global/policy-preview";
import InTheMedia from "../global/in-the-media";
const { policies } = require("../../../_data/policies.json");
const { media } = require("../../../_data/media.json");

const RepeatMedia = () => {
	const firstMedia = media[0];
	return (
		<React.Fragment>
			<RepeatHero bgClasses="bg-media-cover bg-parallax bg-center-top bg-no-repeat" />
			<div className="white-spacer absolute z-0 -mt-40 bg-white border-t-4 hidden sm:block"></div>
			<div className="max-w-screen-lg m-auto relative z-10 -mt-40 text-repeat-black pb-24">
				<div className="container subpages lg:w-3/4 bg-white rounded-tr-2xl border-t-4 border-repeat">
					<h2 className="text-2xl md:text-5xl pt-8 font-extrabold font-obliqua">
						The Repeat Project <br />
						in the Media
					</h2>
					
					<div className="pt-8">
						<a href={firstMedia.url} target="_blank" rel="noopener noreferrer" className="block text-repeat-black hover:text-repeat-burnt">
							{firstMedia.image ?
								<img src={`images/press/${firstMedia.image}`} className="w-2/3" alt="" />
							: null}

							<div className="block text-sm pt-2 text-repeat-black">
								{firstMedia.date} &ndash; {firstMedia.source}
							</div>
							<div className="md:text-2xl py-2 font-black">
								{firstMedia.title}
							</div>
						</a>
						{firstMedia.desc ?
							<p className="md:text-lg text-repeat-dark">
								{firstMedia.desc}
							</p>
						: null}
					</div>


					{media.map((m, i) => {
						return (
							i > 0 ?
								<div className="pt-6" key={i}>
									<div className="block text-sm pt-2">
										{m.date} &ndash; {m.source}
									</div>
									<a href={m.url} className="font-semibold text-lg pt-2 text-repeat-black hover:text-repeat-burnt" target="_blank" rel="noreferrer noopener">
										{m.title}
									</a>
								</div>
							: null
						);
					})}
			 
				</div>
			</div>

			<SectionHeader headerText="Evaluate the policies" subheaderText={"The REPEAT Project provides regular, timely, and independent environmental and economic evaluation of federal energy and climate policies as they’re proposed and enacted. <a href=\"/policies\" class=\"primary-link\">Dive into the details for each of the policies analyzed by the project to date...</a>"} />
			<PolicyPreview policy={policies[0]} />

			<div className="py-8"></div>
		</React.Fragment>
	);
};

export default RepeatMedia;
