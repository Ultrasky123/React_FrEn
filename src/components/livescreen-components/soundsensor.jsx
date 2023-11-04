import { useState, useEffect } from "react";
import Banner from "./banner";
import SvgChart from "../Svg/Chart";
import CardChart from "./card_chart";
import { SensorData } from "../../data/sound_data";
import axios from "axios";

const SoundSensor = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const processResponse = (response) => {
        const data = response.data.data;
        const values = data.map((item) => item.value);
        const categories = data.map((item) => item.inputed_at);

        return {
          series: [{ data: values }],
          categories: categories,
        };
      };

      Promise.all([
        axios.get("https://www.iohad-teluxpindad.net/api/sensor/ky/601"),
        axios.get("https://www.iohad-teluxpindad.net/api/sensor/ky/602"),
      ])
        .then(([response601, response602]) => {
          const chartData601 = processResponse(response601);
          const chartData602 = processResponse(response602);

          SensorData.data[0].data[0] = chartData601;
          SensorData.data[1].data[0] = chartData602;

          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="mx-auto">
        <Banner
          width={35}
          height={35}
          title="SOUND SENSOR"
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
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="flex flex-col flex-nowrap gap-2 ">
            {SensorData.data && SensorData.data.length > 0 ? (
              SensorData.data.map((card) => {
                const chartData = card.data[0];

                return chartData.series ? (
                  <CardChart
                    key={card.id}
                    title={card.title}
                    value={chartData.series}
                    categories={chartData.categories}
                    width={card.width}
                    height={card.height}
                    icon={card.icon}
                    customClassIcon={card.customClassIcon}
                    customClassBlack={card.customClassBlack}
                    customClassGrey={card.customClassGrey}
                    customClassTitle={card.customClassTitle}
                  />
                ) : null;
              })
            ) : (
              <p>No data available</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default SoundSensor;
