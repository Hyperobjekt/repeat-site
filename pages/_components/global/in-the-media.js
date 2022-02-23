import React, { useEffect } from "react";

import media from "../../../_data/media.json";

const InTheMedia = () => {

  return (
    <div className="py-12 bg-repeat-light">
      <div className="container max-w-screen-lg  m-auto">
        <div className="border-b-4 border-repeat-black">
          <h3 className="font-bold text-md uppercase text-repeat-black inline-block">In the Media</h3>
          <a href="/media" className="text-md uppercase font-medium text-repeat-black float-right hover:text-repeat-burnt">See all</a>
        </div>  
        <div className="grid pt-6 grid-cols-1 md:grid-cols-3 gap-4 place-content-center">

          {media.media.filter(m => m.featured).map((m,i) => {
            return(
              <div className="block" key={i}>
                <a href={m.url} target="_blank" rel="noopener noreferrer" className="text-repeat-black hover:text-repeat-burnt">
                  <div
                    className="h-44 flex items-center bg-center bg-cover"
                    style={{ backgroundImage: `url(../images/press/${m.image})` }}>
                    <div className="w-full h-full text-center flex bg-black bg-opacity-30">
                      <img className="m-auto max-h-20 max-w-5/7" src={`../images/press/logos/${m.logo}`} alt="" />
                    </div>
                  </div>
                  <div className="pt-2 text-sm font-semibold">
                    {m.title}
                  </div>
                </a>
              </div>
            )
          })}
          
        </div>
      </div>
    </div>
  );
};

export default InTheMedia;
