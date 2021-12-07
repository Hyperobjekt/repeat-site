import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RepeatHero from "./global/hero";
import ExploreLoader from "./explore/loader";
import ImageCarousel from "./global/image-carousel";
import Stats from "./global/stats";
import Pillars from "./global/pillars";
import policies from '../../_data/policies.json';

const RepeatPolicy = () => {
  const router = useRouter();
  const [activePolicy, setActivePolicy] = useState(null);

  useEffect(() => {
    setActivePolicy(policies[router.query.policy]);
  });

  return activePolicy ? (
    <div className="bg-policy-background bg-repeat-mobile md:bg-repeat-right-top bg-no-repeat">
      <RepeatHero headerText={activePolicy.longTitle} subheaderText={activePolicy.subTitle} bg="" />
      <div className="container max-w-screen-lg pb-8 m-auto">
        {activePolicy.blocks.map((block, i) => {
          if (block.type === "paragraph")
            return (
              <div key={i} className="md:w-1/2 pb-5 text-lg text-repeat-black">
                <p dangerouslySetInnerHTML={{ __html: block.content }} />
              </div>
            );
          if (block.type === "component")
            return (
              <div key={i} className="md:w-full py-10">
                <Stats policy={activePolicy} />
              </div>
            );
          if (block.type === "slider")
            return (
              <div key={i} className="md:w-full pt-5 pb-10">
                <div className="py-6 text-repeat-black rounded-xl">
                  <ImageCarousel slides={activePolicy.slides} />
                </div>
              </div>
            );
          if (block.type === "pillars")
            return (
              <div key={i} className="md:w-full py-0">
                <Pillars />
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
        <ExploreLoader />
      </div>
    </div>
  ) : null;
};

export default RepeatPolicy;
