import React from "react";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import Stats from "../global/stats";
import InTheMedia from "../global/in-the-media";
import policies from '../../../_data/policies.json';

const media = [
  { date: "Oct. 28, 2021 – The Washington Post", title: "New budget deal marks the biggest climate investment in U.S. history", link: "https://www.washingtonpost.com/climate-environment/2021/10/28/climate-biden-build-back-better/" },
  { date: "Oct. 25, 2021 – The New Yorker", title: "What’s Left in the Democrats’ Shrunken Spending Bill?", link: "https://www.newyorker.com/news/our-columnists/whats-left-in-the-democrats-shrunken-spending-bill" },
  { date: "Oct. 28, 2021 – The Week", title: "Why climate advocates are happy with Biden's spending framework", link: "https://theweek.com/climate-change/1006549/climate-change-measures-in-biden-framework" },
  { date: "Oct. 28, 2021 – Roll Call", title: "Framework’s climate elements may keep emissions goals in reach", link: "https://www.rollcall.com/2021/10/28/frameworks-climate-elements-may-keep-emissions-goals-in-reach/" },
  { date: "Oct. 28, 2021 – Slate", title: "There Are at Least Two Extremely Good Things to Celebrate in Biden’s New Build Back Better Plan", link: "https://slate.com/business/2021/10/biden-build-back-better-climate-child-poverty-tax-credit.html" },
];
const RepeatMedia = () => {
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
            <p className="font-utopia pt-6 md:w-4/5 text-lg text-repeat-burnt">Proin a vestibulum dui. Cras vitae erat felis. Mauris ullamcorper est sit amet velit ultrices egestas. Duis sit amet fringilla risus, non auctor eros. Nulla id tellus ac lectus ornare convallis. Pellentesque efficitur risus ligula, a ullamcorper ipsum porttitor quis.</p>
            
            
            <div className="pt-8">
              <a href="https://www.vox.com/22738414/democrats-manchin-climate-reconciliation-plan-b" target="_blank" rel="noopener noreferrer" className="block">
                <img src="images/vox-bg.webp" className="w-2/3" alt="" />
              </a>
              <div className="block text-xs pt-2">Oct. 27, 2021 – Vox</div>
              <a href="https://www.vox.com/22738414/democrats-manchin-climate-reconciliation-plan-b" target="_blank" rel="noopener noreferrer" className="md:text-2xl py-2 font-black">Biden’s Plan B for the climate crisis, explained</a>
              <p className="md:text-lg text-repeat-black">It’s not too late for Democrats to go big on climate change. But it won’t be easy, and there’s no margin for error.</p>
            </div>


            {media.map((m, i) => {
              return (
                <div className="pt-6" key={i}>
                  <div className="block text-sm pt-2">{m.date}</div>
                  <a href={m.link} className="block font-semibold text-lg pt-2 hover:text-repeat-burnt" target="_blank" rel="noreferrer noopener">{m.title}</a>
                </div>
              );
            })}
       
        </div>
      </div>

      <SectionHeader headerText="evaluate the policies" subheaderText="Out data set currently features the Biden administration’s climate program. More policies will become available as their data are integrated with the REPEAT Project." />
      
      <Stats policy={policies[Object.keys(policies)[0]]} />

      <div className="py-8"></div>
    </React.Fragment>
  );
};

export default RepeatMedia;
