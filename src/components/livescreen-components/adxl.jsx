import Banner from "./banner";
import SvgChart from "../Svg/Chart";
import { AdxlData } from "../../data/adxl_data";
import CardChart from "./card_chart";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Skeleton, Fab, Switch } from "@mui/material";

import { FetchingContext } from "../../pages/Livescreen";

function Adxl() {
  const [isLoading, setIsLoading] = useState(true);
  const { isFetching, setIsFetching } = useContext(FetchingContext);

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      if (AdxlData.data.length === 0) {
        setIsLoading(true);
      }

      //Membuat template  untuk data yang akan di perlukan oleh ApexChart

      /* 
      Data harus seperti ini untuk dapat di render 
      series: [
            { name: "x_values", data: series.x_values },
            { name: "y_values", data: series.y_values },
            { name: "z_values", data: series.z_values },
          ],
          categories: categories,
      
      */
      const processResponse = (response) => {
        const data = response.data;
        const series = { x_values: [], y_values: [], z_values: [] };
        const categories = [];

        data.forEach((item) => {
          series.x_values.push(item.x_axis);
          series.y_values.push(item.y_axis);
          series.z_values.push(item.z_axis);
          categories.push(item.inputed_at);
        });

        return {
          series: [
            { name: "x_values", data: series.x_values },
            { name: "y_values", data: series.y_values },
            { name: "z_values", data: series.z_values },
          ],
          categories: categories,
        };
      };

      const urls = [
        "http://localhost/adxl.php",
        "http://localhost/adxl2.php",
        "http://localhost/adxl3.php",
        "http://localhost/adxl4.php",
      ];

      Promise.all(urls.map((url) => axios.get(url)))
        .then(
          axios.spread((...responses) => {
            responses.forEach((response, index) => {
              const chartData = processResponse(response);
              AdxlData.data[index].data[0] = chartData;
            });
            setIsLoading(false);
          })
        )
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    };

    if (isFetching) {
      // Only fetch data if isFetching is true

      intervalId = setInterval(fetchData, 1000);
    }

    return () => clearInterval(intervalId); // cleanup function on component unmount
  }, [isFetching]);

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
        {isLoading ? (
          <div className="max-w-xl p-4 my-2 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col flex-1 flex-nowrap gap-4 ">
            {AdxlData.data.map((item, index) => (
              <React.Fragment key={index}>
                <Skeleton
                  animation="wave"
                  width={200}
                  height={60}
                  className="mx-auto"
                />

                <Skeleton
                  variant="rectangular"
                  width={350}
                  height={300}
                  className="mx-auto"
                />
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="flex flex-col flex-nowrap gap-2 ">
            {AdxlData.data && AdxlData.data.length > 0 ? (
              AdxlData.data.map((card) => {
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
}

export default Adxl;
