import React from "react";
import Banner from "./banner";
import SvgChart from "../../dist/Chart";
import { GasData } from "../../data/gas_data";
import CardChart from "./card_chart";

const Gas = () => {
  return (
    <div>
      <section>
        <Banner
          width={32}
          height={32}
          title="GAS SENSOR"
          icon={SvgChart}
          customClassIcon={"my-2 ml-2"}
          customClassGrey={
            "bg-slate-400 shadow-xl w-[350px] mx-auto my-3 rounded-full flex flex-row"
          }
          customClassBlack={"w-12 h-12 bg-black rounded-full my-auto ml-1"}
          customClassTitle={
            "text-center p-4 text-white content-evenly flex-grow"
          }
        />
      </section>

      <section>
        {GasData.data && GasData.data.length > 0 ? (
          GasData.data.map((card) => (
            <CardChart
              key={card.id}
              title={card.title}
              value={card.data}
              width={card.width}
              height={card.height}
              icon={card.icon}
              customClassIcon={card.customClassIcon}
              customClassBlack={card.customClassBlack}
              customClassGrey={card.customClassGrey}
              customClassTitle={card.customClassTitle}
            />
          ))
        ) : (
          <p>No data available</p>
        )}
      </section>
    </div>
  );
};

export default Gas;
