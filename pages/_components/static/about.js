import React from "react";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import InTheMedia from "../global/in-the-media";
import Stats from "../global/stats";
const team = [
  {
    name: "Jesse D. Jenkins (PI)",
    title: "Princeton University Zero Lab",
  },
  {
    name: "Erin Mayfield",
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
    name: "Annie Jacobson",
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
    title: "",
  },
  {
    name: "Aneesha Manocha",
    title: "",
  },
  {
    name: "Riti Bhandarkar",
    title: "",
  },
  {
    name: "Cady Feng",
    title: "",
  },
];
const stats = {
  header: "The Biden Administration Climate Program",
  background: "",
  stats: [
    {
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
      <RepeatHero backgroundClass="bg-about-cover bg-center bg-fixed bg-cover bg-no-repeat" />
      <div className="white-spacer absolute z-0 -mt-40 bg-white border-t-4 hidden sm:block"></div>
      <div className="max-w-screen-lg m-auto relative z-10 -mt-40 text-repeat-black text-lg">
        <div className="container subpages lg:w-3/4 bg-white rounded-tr-2xl border-t-4 border-repeat">
          <h2 className="text-2xl md:text-5xl pt-8 font-extrabold font-obliqua">A New Toolkit for Evaluating Energy and Climate Policy</h2>
          <p className="font-utopia pt-6 md:w-4/5 text-repeat-burnt">The REPEAT Project provides regular and timely environmental and economic evaluation of federal energy and climate policies as they’re proposed.</p>

          <div className="md:w-4/5 leading-7 py-7 text-lg">
            <p className="pt-3">
              The Princeton ZERO Lab and{" "}
              <a className="primary-link" href="http://netzeroamerica.princeton.edu/" target="_blank" rel="noreferrer noopener">
                Net-Zero America study
              </a>{" "}
              team, in partnership with{" "}
              <a className="primary-link" href="https://www.evolved.energy/" target="_blank" rel="noreferrer noopener">
                Evolved Energy Research
              </a>
              , have developed a suite of geospatial planning and analysis tools coupled with detailed macro-energy system optimization models capable of rapidly evaluating policy and regulatory proposals at politically-relevant spatial resolutions (e.g., state, county, and sometimes finer resolutions). This includes evaluation of candidate sites for wind and solar development, thermal power plant siting and repowering, and transmission expansion as well as associated impacts on air quality and
              labor/employment.
            </p>
            <p className="pt-3">
              These tools were employed to great impact in the Princeton Net-Zero America study, which “set an entirely new standard” in energy transition modeling by offering an “unprecedented degree of clarity and granularity” in its results, according to John Holdren, former Science Advisor to President Obama and Director of the White House Office of Science and Technology Policy. The spatially-explicit and granular results and associated maps have proven to be highly relevant to a wide range
              of stakeholders and decision makers, and the responses to the report indicate the desire for more politically-salient outputs from energy systems models.
            </p>
            <p className="pt-3">The REPEAT Project is further developing and refining this suite of geospatially-granular planning, modeling, and visualization tools and employing them to rapidly evaluate federal energy and climate policy proposals, providing independent, timely, and credible information and analysis for broad educational purposes, including as a resource available publicly for stakeholders, decision-makers, and the media.</p>
          </div>
          <div className="pt-8 inline-block">
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
          </div>

          <div className="py-6 md:w-4/5 leading-7">
            <b>Princeton University Zero Lab</b>
            <p className="pt-3">The Princeton Zero-carbon Energy systems Research and Optimization Laboratory (ZERO Lab) conducts research to improve decision-making and accelerate rapid, affordable, and effective transitions to net-zero carbon energy systems. ZERO Lab’s research focuses on improving and applying optimization-based macro-energy systems models to evaluate low-carbon energy technologies and generate insights to guide policy and planning decisions.</p>
          </div>
        </div>
      </div>

      {/* Team */}

      <div className="container max-w-screen-lg m-auto text-repeat-black">
        <div className="subpages w-100 m-auto pb-10 pt-5 px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-20">
            {team.map((member) => (
              <div key={member.name} className="py-2 px-3 text-center">
                {/* <img className="w-full rounded-full" src={`images/${member.name.split(" ").join("-").toLocaleLowerCase()}.svg`} alt={member.name} /> */}
                <div className="text-center pt-2">
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
          <div className="md:w-4/5 leading-7 text-lg">
            <p className="pt-3">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam.</p>
            <p className="pt-3">Nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="md:w-4/5 leading-7 pt-10">
            <img src="images/evolved-energy-research.svg" alt="" />
          </div>

          <div className="md:w-4/5 leading-7 pt-10 text-lg">
            <b>Evolved Energy Research</b>
            <p className="pt-3">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="md:w-4/5 leading-7 pt-10 text-lg">
            <b>Carbon Impact Consulting</b>
            <p className="pt-3">Greg Schivley dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>

          <div className="md:w-4/5 leading-7 pt-10 text-lg">
            <b>Montara Mountain Energy</b>
            <p className="pt-3">Greg Schivley dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>

          <div className="md:w-4/5 leading-7 pt-10 text-lg">
            <b>The Net Zero America Study</b>
            <p className="pt-3">
              The Princeton Net-Zero America study provides the most detailed and granular analysis of paths to net-zero greenhouse gas emissions in the United States. The study quantified five distinct technological pathways, all using technologies known today, by which the United States could decarbonize its entire economy. With multiple plausible and affordable pathways available, the societal conversation can now turn from “if” to “how” and focus on the choices the nation and its myriad
              stakeholders wish to make to shape the energy transition. Net-Zero America provides granular guidance to inform these critical choices.
            </p>
          </div>
        </div>

        {/* NZA report image */}

        <div className="max-w-screen-lg m-auto bg-white">
          <div className="flex flex-col md:flex-row md:w-5/8 h-full items-center">
            <div className="w-full block md:w-1/2 leading-7 pt-10 text-lg">
              <img src="images/Princeton_NZA_Interim_Report_15_Dec_2020.svg" alt="" />
            </div>
            <div className="w-full block md:w-1/3 font-utopia md:pl-7 pt-3">
              <i>The Net-Zero America study “set an entirely new standard” in energy transition modeling by offering an “unprecedented degree of clarity and granularity” in its results.</i>
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg bg-white">
          <div className="md:w-3/4 leading-7 pt-10 text-lg">
            <p className="pt-3 md:w-4/5">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy.</p>
          </div>
        </div>
      </div>

      <SectionHeader headerText="evaluate the policies" subheaderText="Our data set currently features the Biden administration’s climate program. More policies will become available as their data are integrated with the REPEAT Project." />

      <Stats stats={stats} />
      <div className="py-8"></div>
      <InTheMedia />
    </React.Fragment>
  );
};

export default RepeatAbout;
