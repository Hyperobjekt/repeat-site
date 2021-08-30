import React, { useState } from "react";
import RepeatHero from "./global/hero";
import ExploreLoader from "./explore/loader";
import ImageCarousel from "./global/image-carousel";
import Stats from "./global/stats";
import Pillars from "./global/pillars";
const graphic1 = {
  header: "Policy Scorecard",
  background: "",
  stats: [
    {
      value: "3,265",
      label: "Million metric tons reduction in CO2",
      supportingText: "In GHG emissions",
    },
    {
      value: "152,378",
      label: "Net jobs of employment impact",
      supportingText: "In the energy sector",
    },
    {
      value: "154,022",
      label: "Thousand avoided deaths",
      supportingText: "From reduced air pollution",
    },
  ],
};
const graphic2 = {
  header: "Policy Score Card",
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
const graphic3 = {
  header: "Policy Score Card",
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

const slides = [
  {
    image: "/images/carousel-image-1.svg",
    caption: (
      <div className="py-2">
        <h4 className="font-bold">2030 E+ Cumulative</h4>
        <p className="text-xs">Solar, Wind and Population Density</p>
      </div>
    ),
  },
  {
    image: "/images/carousel-image-2.svg",
    caption: (
      <div className="py-2">
        <h4 className="font-bold">2030 E+ Cumulative</h4>
        <p className="text-xs">Solar, Wind and Population Density</p>
      </div>
    ),
  },
  {
    image: "/images/carousel-image-3.svg",
    caption: (
      <div className="py-2">
        <h4 className="font-bold">2030 E+ Cumulative</h4>
        <p className="text-xs">Solar, Wind and Population Density</p>
      </div>
    ),
  },
  {
    image: "/images/carousel-image-2.svg",
    caption: (
      <div className="py-2">
        <h4 className="font-bold">2030 E+ Cumulative</h4>
        <p className="text-xs">Solar, Wind and Population Density</p>
      </div>
    ),
  },
  {
    image: "/images/carousel-image-3.svg",
    caption: (
      <div className="py-2">
        <h4 className="font-bold">2030 E+ Cumulative</h4>
        <p className="text-xs">Solar, Wind and Population Density</p>
      </div>
    ),
  },
  {
    image: "/images/carousel-image-2.svg",
    caption: (
      <div className="py-2">
        <h4 className="font-bold">2030 E+ Cumulative</h4>
        <p className="text-xs">Solar, Wind and Population Density</p>
      </div>
    ),
  },
  {
    image: "/images/carousel-image-3.svg",
    caption: (
      <div className="py-2">
        <h4 className="font-bold">2030 E+ Cumulative</h4>
        <p className="text-xs">Solar, Wind and Population Density</p>
      </div>
    ),
  },
];

let bidenPlan = {
  header: "The Biden Administration Climate Program",
  subHeader: "Quisque ullamcorper massa augue, sodales a elit congue, ut tempus ex tincidunt. Nulla eu magna neque.",
  contentBlocks: [
    {
      type: "paragraph",
      content: (
        <span>
          Nunc ac velit mollis, consectetur nisi non, tempor odio. Morbi id purus tellus. Donec in urna eu sapien ultricies volutpat. Etiam feugiat in nisi vel semper. At eleifend mi porttitor non. In lacinia lacus vitae{" "}
          <a className="primary-link" href="#">
            augue pharetra consequat
          </a>
          . Vivamus porttitor nisi in enim sagittis ultrices. Nulla luctus magna aliquam lectus eleifend tincidunt. Fusce mauris nisl, blandit eget porttitor in, ultricies vitae neque. In aliquet porttitor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis ante sed turpis porttitor, vehicula tincidunt ex facilisis.
        </span>
      ),
    },
    {
      type: "component",
      content: <Stats stats={graphic1} />,
    },
    {
      type: "heading",
      content: "Details & Resources",
    },
    {
      type: "slider",
      content: (
        <div className="py-6 text-repeat-black rounded-xl">
          <ImageCarousel slides={slides} />
        </div>
      ),
    },
    {
      type: "paragraph",
      content:
        "Donec in urna eu sapien ultricies volutpat. Etiam feugiat in nisi vel semper. Donec gravida cursus justo, at eleifend mi porttitor non. In lacinia lacus vitae augue pharetra consequat. Vivamus porttitor nisi in enim sagittis ultrices. Nulla luctus magna aliquam lectus eleifend tincidunt. Fusce mauris nisl, blandit eget porttitor in, ultricies vitae neque. In aliquet porttitor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis ante sed turpis porttitor, vehicula tincidunt ex facilisis.",
    },
    {
      type: "heading",
      content: "Policy REPEAT Pillars",
    },
    {
      type: "paragraph",
      content: "Nulla luctus magna aliquam lectus eleifend tincidunt. Fusce mauris nisl, blandit eget porttitor in, ultricies vitae neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      type: "pillars",
      content: <Pillars />,
    },
  ],
};
const policies = {
  "biden-administration-plan": bidenPlan,
  "cres-climate-agenda": bidenPlan,
  "sba-green-recovery-fund": bidenPlan,
  "green-new-deal": bidenPlan,
};

const RepeatPolicy = ({ policy }) => {
  const activePolicy = policies[policy];
  return activePolicy ? (
    <div className="bg-policy-background bg-repeat-mobile md:bg-repeat-right-top bg-no-repeat">
      <RepeatHero headerText={activePolicy.header} subheaderText={activePolicy.subHeader} bg="" />
      <div className="container max-w-screen-lg pb-8 m-auto">
        {activePolicy.contentBlocks.map((block, i) => {
          if (block.type === "paragraph")
            return (
              <div key={i} className="md:w-1/2 pb-5 text-lg text-repeat-black">
                <p>{block.content}</p>
              </div>
            );
          if (block.type === "component")
            return (
              <div key={i} className="md:w-full py-10">
                {block.content}
              </div>
            );
          if (block.type === "slider")
            return (
              <div key={i} className="md:w-full pt-5 pb-10">
                {block.content}
              </div>
            );
          if (block.type === "pillars")
            return (
              <div key={i} className="md:w-full py-0">
                {block.content}
              </div>
            );
          if (block.type === "heading")
            return (
              <div key={i} className="md:w-1/2 pt-2">
                <h3 className="font-bold text-repeat-teal text-3xl mb-5">{block.content}</h3>
              </div>
            );
        })}
      </div>
      <div className="container max-w-screen-lg pb-10 m-auto">
        <ExploreLoader policy={policy} />
      </div>
    </div>
  ) : null;
};

export default RepeatPolicy;
