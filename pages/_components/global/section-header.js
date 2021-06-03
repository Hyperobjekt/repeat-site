import React, { useEffect } from "react";

const SectionHeader = ({ headerText, subheaderText }) => {
  return (
    <div className="container max-w-screen-lg m-auto">
      <div className="flex items-end">
        <div className="">
          <h3 className="text-sm uppercase text-repeat-dark font-extrabold">{headerText}</h3>
        </div>
        <div className="flex-1 pl-1.5 pb-1">
          <div className="w-full border-b-2 border-repeat-dark"></div>
        </div>
      </div>
      <div className="flex pt-5 pr-4 font-medium text-repeat-dark">
        <p>{subheaderText}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
