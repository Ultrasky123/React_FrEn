import React, { useEffect, useState, useContext } from "react";
import Banner from "./banner";
import SvgChart from "@/components/Svg/Chart";
import { GasData } from "@/data/gas_data";
import CardChart from "./card_chart";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { FetchingContext } from "@/pages/Livescreen";

const Gas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isFetching, setIsFetching } = useContext(FetchingContext);
  useEffect(() => {
    let intervalId;
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

          GasData.data[0].data[0] = chartData601;

          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    if (isFetching) {
      intervalId = setInterval(fetchData, 10000);
    }

    return () => clearInterval(intervalId);
  }, [isFetching]);

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
        {isLoading ? (
          <div className="max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col flex-1 flex-nowrap gap-4 ">
            {GasData.data.map((item, index) => (
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
        ) : GasData.data && GasData.data.length > 0 ? (
          GasData.data.map((card) => {
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
      </section>
    </div>
  );
};

export default Gas;
