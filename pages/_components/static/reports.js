import React from "react";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import Stats from "../global/stats";
import InTheMedia from "../global/in-the-media";

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
            <p className="font-utopia pt-6 md:w-4/5 text-lg text-repeat-burnt">Proin a vestibulum dui. Cras vitae erat felis. Mauris ullamcorper est sit amet velit ultrices egestas. Duis sit amet fringilla risus, non auctor eros. Nulla id tellus ac lectus ornare convallis. Pellentesque efficitur risus ligula, a ullamcorper ipsum porttitor quis.</p>

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
      </div>

      <SectionHeader headerText="evaluate the policies" subheaderText="Out data set currently features the Biden administration’s climate program. More policies will become available as their data are integrated with the REPEAT Project." />
      
      {/*<Stats policy={policies[Object.keys(policies)[0]]} />*/}

      <div className="py-8"></div>
    </React.Fragment>
  );
};

export default RepeatReports;
