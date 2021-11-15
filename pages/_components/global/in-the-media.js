import React, { useEffect } from "react";

const InTheMedia = () => {
  return (
    <div className="py-12 bg-repeat-light">
      <div className="container max-w-screen-lg  m-auto">
        <div className="border-b-4 border-repeat-black">
          <h3 className="font-bold text-md uppercase text-repeat-black inline-block">In the Media</h3>
          <a href="/media" className="text-md uppercase font-medium text-repeat-black float-right hover:text-repeat-burnt">See all</a>
        </div>  
        <div className="grid pt-6 grid-cols-1 md:grid-cols-3 gap-4 place-content-center">
          <div className="block">
            <a href="https://www.vox.com/22738414/democrats-manchin-climate-reconciliation-plan-b" target="_blank" rel="noopener noreferrer" className="h-44 bg-media-vox bg-center bg-cover flex items-center">
              <div className="w-full h-full text-center flex bg-black bg-opacity-30">
                <img className="m-auto max-h-20 max-w-5/7" src="../images/vox-logo.svg" alt="" />
              </div>
            </a>
            <a href="https://www.vox.com/22738414/democrats-manchin-climate-reconciliation-plan-b" target="_blank" rel="noopener noreferrer" className="pt-2 text-sm font-semibold text-repeat-black hover:text-repeat-burnt">
            Biden’s Plan B for the climate crisis, explained
            </a>
          </div>

          <div className="block">
            <a href="https://www.washingtonpost.com/climate-environment/2021/10/28/climate-biden-build-back-better/" target="_blank" rel="noopener noreferrer"  className="h-44 bg-media-washington-post bg-center bg-cover flex items-center">
              <div className="w-full h-full text-center flex bg-black bg-opacity-30">
                <img className="m-auto max-h-20 max-w-5/7" src="../images/washpo-logo.svg" alt="" />
              </div>
            </a>
            <a href="https://www.washingtonpost.com/climate-environment/2021/10/28/climate-biden-build-back-better/" target="_blank" rel="noopener noreferrer" className="pt-2 text-sm font-semibold text-repeat-black hover:text-repeat-burnt">New budget deal marks the biggest climate investment in U.S. history</a>
          </div>

          <div className="block">
            <div className="h-44 bg-media-new-york-times bg-center bg-cover flex items-center">
              <div className="w-full h-full text-center flex bg-black bg-opacity-30">
                <img className="m-auto max-h-20 max-w-5/7" src="../images/nyt-logo.svg" alt="" />
              </div>
            </div>
            <a href="https://www.washingtonpost.com/climate-environment/2021/10/28/climate-biden-build-back-better/" target="_blank" rel="noopener noreferrer"  className="pt-2 text-sm font-semibold text-repeat-black hover:text-repeat-burnt">Tracking Biden’s Environmental Actions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InTheMedia;
