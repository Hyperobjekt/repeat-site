import React, { useEffect } from "react";

const Stats = ({ policy }) => {
  const stats = policy ? policy.stats : [];
  return (
    <div className="container max-w-screen-lg m-auto">
      {<h3 className="font-bold text-2xl">{policy ? policy.longTitle : ""}</h3>}
      <div className="flex flex-wrap pt-6">
        {stats.map((stat, i) => (
          <div key={i} className="flex-1 pb-5 sm:pb-0">
            <div className="text-6xl font-bold font-utopia text-repeat-burnt">{stat.value}</div>
            <div className="pt-2 text-s font-bold text-repeat-black">{stat.label}</div>
            <div className="text-s text-repeat-dark">{stat.supportingText}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
