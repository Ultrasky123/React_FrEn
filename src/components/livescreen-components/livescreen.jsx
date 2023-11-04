import React, { useState, useEffect, useContext } from "react";
import Banner from "./banner";
import SvgHeartrate from "@/components/Svg/Heartrate";
import Card from "./card";
import { LivescreenData } from "@/data/livescreen_data";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { FetchingContext } from "@/pages/Livescreen";

const Livescreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isFetching, setIsFetching } = useContext(FetchingContext);

  useEffect(() => {
    let intervalId;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://iohad-teluxpindad.net/api/sensor/bme"
        );
        const data = response.data.data;

        // Find temprature and humidity values in the response
        let temprature = "";
        let humidity = "";

        for (const item of data) {
          if (item.hasOwnProperty("temprature")) {
            temprature = item.temprature;
          }
          if (item.hasOwnProperty("humidity")) {
            humidity = item.humidity;
          }

          // Break the loop if both temprature and humidity are found
          if (temprature && humidity) {
            break;
          }
        }

        LivescreenData.data[0].value = temprature;
        LivescreenData.data[1].value = humidity;

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (isFetching) {
      const intervalId = setInterval(fetchData, 10000);
    }

    return () => clearInterval(intervalId);
  }, [isFetching]);
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
          <div className="max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-1 gap-4 ">
            {LivescreenData.data.map((item, index) => (
              <div key={index} className="flex flex-row justify-center">
                <div className="flex flex-col flex-shrink justify-center">
                  <React.Fragment key={index}>
                    <Skeleton
                      animation="wave"
                      width={200}
                      height={60}
                      className="mx-auto"
                    />

                    <Skeleton
                      variant="rectangular"
                      width={250}
                      height={250}
                      className="mx-auto"
                    />
                  </React.Fragment>
                </div>
              </div>
            ))}
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
