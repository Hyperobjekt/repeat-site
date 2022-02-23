import React from "react";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import Stats from "../global/stats";
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
						Zero Lab + The Repeat <br />
						Project in the Media
					</h2>
					<p className="font-utopia pt-6 md:w-4/5 text-lg text-repeat-burnt">
						Proin a vestibulum dui. Cras vitae erat felis. Mauris ullamcorper est sit amet velit ultrices egestas. Duis sit amet fringilla risus, non auctor eros. Nulla id tellus ac lectus ornare convallis. Pellentesque efficitur risus ligula, a ullamcorper ipsum porttitor quis.
					</p>
					
					
					<div className="pt-8">
						<a href={firstMedia.url} target="_blank" rel="noopener noreferrer" className="block text-repeat-black hover:text-repeat-burnt">
							<img src={`images/press/${firstMedia.image}`} className="w-2/3" alt="" />

							<div className="block text-xs pt-2 text-repeat-black">
								{firstMedia.date} &ndash; {firstMedia.source}
							</div>
							<div className="md:text-2xl py-2 font-black">
								{firstMedia.title}
							</div>
						</a>
						{firstMedia.desc ?
							<p className="md:text-lg text-repeat-black">
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
									<a href={m.url} className="block font-semibold text-lg pt-2 text-repeat-black hover:text-repeat-burnt" target="_blank" rel="noreferrer noopener">
										{m.title}
									</a>
								</div>
							: null
						);
					})}
			 
				</div>
			</div>

			<SectionHeader
				headerText="evaluate the policies"
				subheaderText="Out data set currently features the Biden administration’s climate program. More policies will become available as their data are integrated with the REPEAT Project." />
			
			<div className="container max-w-screen-lg m-auto">
				<Stats policy={policies[0]} />
			</div>

			<div className="py-8"></div>
		</React.Fragment>
	);
};

export default RepeatMedia;
