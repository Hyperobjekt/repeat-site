import React, { useEffect } from "react";

const InTheMedia = () => {
  return (
    <div className="pt-20 pb-10 bg-repeat-light">
      <div className="container max-w-screen-lg  m-auto">
        <h3 className="font-bold text-md uppercase border-b-4 border-repeat-black text-repeat-black">In the Media</h3>
        <div className="grid pt-6 grid-cols-1 md:grid-cols-3 gap-4 place-content-center">
          <div className="block">
            <div className="h-44 bg-media-vox bg-center bg-cover flex items-center">
              <div className="w-full text-center">
                <img className="m-auto max-h-20 max-w-5/7" src="images/vox-logo.svg" alt="" />
              </div>
            </div>
            <div className="pt-2 text-sm font-semibold text-repeat-black">
              E-Commerce Mega-Warehouses, a Smog Source, Faces New Pollution Regulations
            </div>
          </div>

          <div className="block">
            <div className="h-44 bg-media-washington-post bg-center bg-cover flex items-center">
              <div className="w-full text-center">
                <img className="m-auto max-h-20 max-w-5/7" src="images/washpo-logo.svg" alt="" />
              </div>
            </div>
            <div className="pt-2 text-sm font-semibold text-repeat-black">How Biden Could Deliver Climate Goals</div>
          </div>

          <div className="block">
            <div className="h-44 bg-media-new-york-times bg-center bg-cover flex items-center">
              <div className="w-full text-center">
                <img className="m-auto max-h-20 max-w-5/7" src="images/nyt-logo.svg" alt="" />
              </div>
            </div>
            <div className="pt-2 text-sm font-semibold text-repeat-black">Tracking Biden’s Environmental Actions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InTheMedia;
