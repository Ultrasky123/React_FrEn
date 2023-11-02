import Banner from "./banner";
import SvgChart from "../../dist/Chart";
import { AdxlData } from "../../data/adxl_data";
import CardChart from "./card_chart";

function Adxl() {
  return (
    <div>
      <section>
        <Banner
          width={35}
          height={35}
          title="ADXL - 345 SENSOR"
          icon={SvgChart}
          customClassGrey={
            "bg-slate-400 shadow-xl w-[350px] mx-auto my-3 rounded-full flex flex-row"
          }
          customClassBlack={"w-12 h-12 bg-black rounded-full my-auto ml-1"}
          customClassTitle={
            "text-center p-4 text-white content-evenly flex-grow"
          }
          customClassIcon={"my-2 ml-2"}
        />
      </section>

      <section>
        <div className="flex flex-col flex-nowrap gap-2 ">
          {AdxlData.data && AdxlData.data.length > 0 ? (
            AdxlData.data.map((card) => (
              <CardChart
                key={card.id}
                title={card.title}
                data_name={card.data_name}
                value={card.data}
                label={card.label}
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
        </div>
      </section>
    </div>
  );
}

export default Adxl;
