import React, { useState, useEffect } from "react";
import Banner from "./banner";
import SvgHeartrate from "../Svg/Heartrate";
import Card from "./card";
import { LivescreenData } from "../../data/livescreen_data";
import axios from "axios";

const Livescreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://iohad-teluxpindad.net/api/sensor/bme")
        .then((response) => {
          const data = response.data.data;

          // Find temperature and humidity values in the response
          let temperature = "";
          let humidity = "";

          for (const item of data) {
            if (item.hasOwnProperty("temperature")) {
              temperature = item.temperature;
            }
            if (item.hasOwnProperty("humidity")) {
              humidity = item.humidity;
            }

            // Break the loop if both temperature and humidity are found
            if (temperature && humidity) {
              break;
            }
          }

          LivescreenData.data[0].value = temperature;
          LivescreenData.data[1].value = humidity;

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
      <section>
        <Banner
          width={32}
          height={32}
          title="LIVESCREEN"
          icon={SvgHeartrate}
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

      <section className="flex justify-center">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 justify-self-center sm:flex-row md:flex-row">
            {LivescreenData.data.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                icon={card.icon}
                width={card.width}
                height={card.height}
                customClassIcon={card.customClassIcon}
                customClassBlack={card.customClassBlack}
                customClassGrey={card.customClassGrey}
                customClassTitle={card.customClassTitle}
                value={card.value}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Livescreen;
