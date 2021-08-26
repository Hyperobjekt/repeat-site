import React, { useEffect } from "react";

const Pillars = () => {
  return (
    <div className="pt-0 pb-10">
      <div className="container max-w-screen-lg m-auto px-0 sm:px-0">
        <div className="grid pt-6 grid-cols-1 md:grid-cols-3 gap-10 place-content-center">
          <div className="block md:pb-8">
            <h4 className="font-bold text-lg border-b-4 border-repeat-table-1">
              <span className="font-utopia text-repeat-burnt">1: </span>Efficiency/Electrification
            </h4>
            <div className="pt-4 font-utopia text-lg text-repeat-black">
              <ul>
                <li>Nearly full electrification of transport and buildings by 2050</li>
                <li>No land-use change for biomass supply allowed</li>
                <li>Few other constraints on energy supply options</li>
              </ul>
            </div>
          </div>

          <div className="block">
            <h4 className="font-bold text-lg border-b-4 border-repeat-table-2">
              <span className="font-utopia text-repeat-burnt">2: </span>Clean Energy
            </h4>
            <div className="pt-4 font-utopia text-lg text-repeat-black">
              <ul>
                <li>Less-rapid electrification of transport and buildings</li>
                <li>No land-use change for biomass supply allowed</li>
                <li>Few other constraints on energy supply options</li>
              </ul>
            </div>
          </div>

          <div className="block">
            <h4 className="font-bold text-lg border-b-4 border-repeat-table-3">
              <span className="font-utopia text-repeat-burnt">3: </span>Clean Fuels
            </h4>
            <div className="pt-4 font-utopia text-lg text-repeat-black">
              <ul>
                <li>Nearly full electrification of transport and buildings by 2050</li>
                <li>Biomass supply requires converting some agricultural land from food to energy crops</li>
                <li>Few other constraints on energy supply options</li>
              </ul>
            </div>
          </div>

          <div className="block">
            <h4 className="font-bold text-lg border-b-4 border-repeat-table-4">
              <span className="font-utopia text-repeat-burnt">4: </span>CCUS
            </h4>
            <div className="pt-4 font-utopia text-lg text-repeat-black">
              <ul>
                <li>Nearly full electrification of transport and buildings by 2050</li>
                <li>Solar and wind power annual capacity additions constrained to historical maximum</li>
                <li>No land-use change for biomass supply allowed</li>
                <li>Few other constraints on energy supply options</li>
              </ul>
            </div>
          </div>

          <div className="block">
            <h4 className="font-bold text-lg border-b-4 border-repeat-table-5">
              <span className="font-utopia text-repeat-burnt">5: </span>Non-CO2 Emissions
            </h4>
            <div className="pt-4 font-utopia text-lg text-repeat-black">
              <ul>
                <li>Nearly full electrification of transport and buildings by 2050</li>
                <li>No fossil fuel use allowed by 2050</li>
                <li>No land-use change for biomass supply allowed</li>
                <li>No new nuclear power construction allowed, existing plants retired</li>
                <li>No underground storage of CO2 allowed</li>
              </ul>
            </div>
          </div>

          <div className="block">
            <h4 className="font-bold text-lg border-b-4 border-repeat-table-6">
              <span className="font-utopia text-repeat-burnt">6: </span>Land Sinks
            </h4>
            <div className="pt-4 font-utopia text-lg text-repeat-black">
              <ul>
                <li>Based on US EIA, Annual Energy Outlook 2019 (Reference case, no new policies)</li>
                <li>No greenhouse gas emission constraints imposed</li>
                <li>Same (low) projected oil and gas prices as for net-zero pathways</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pillars;
