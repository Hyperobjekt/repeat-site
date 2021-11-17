import React, { useEffect, useState } from "react";
import Head from "next/head";


const RepeatHero = ({ bgClasses, headerText, subheaderText, mode }) => {

  const [bgStyle, setBgStyle] = useState({});

  useEffect(() => {
    if(!bgClasses || !bgClasses.includes("parallax")) return;
    const updateBg = (e) => {
      let newBgStyle = {};
      let bgTop = ( document.documentElement.scrollTop / window.innerHeight * 75 ).toFixed(2);
      if(isNaN(bgTop) || !isFinite(bgTop)) bgTop = 0;
      if(bgTop > 100) bgTop = 100;
      newBgStyle.backgroundPositionY = `${bgTop}%`;

      if(window.innerWidth*1.25 / 2 < window.innerHeight * .75) newBgStyle.backgroundSize = "auto 100vh";
      setBgStyle(newBgStyle);
    };
    updateBg();
    window.addEventListener("scroll", updateBg);
    window.addEventListener("resize", updateBg);
  }, []);

  let coverClass = mode === "dark" ? `h-screen/1.3 ${bgClasses}` : `bg-fixed h-screen/1.5 md:h-screen/1.3 text-repeat-teal ${bgClasses}`;
  let headerClass = mode === "dark" ? "text-4xl md:text-6xl pb-8 font-extrabold font-obliqua text-white" : "text-4xl md:text-6xl pb-8 font-extrabold font-obliqua text-repeat-teal";
  let subHeaderClass = mode === "dark" ? "text-md w-4/5 pb-3 text-xl font-utopia text-white" : "text-md w-4/5 pb-4 text-xl font-utopia text-repeat-burnt";
  return (
    <div className={coverClass} style={ { ...bgStyle } }>
      <div className="container max-w-screen-lg h-full m-auto">
        <div className="flex h-full items-end">
          <div className="md:px-0 px-2 py-8 w-full md:w-3/4">
            <h1 className={headerClass}>{headerText}</h1>
            <h2 className={subHeaderClass}>{subheaderText}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepeatHero;
