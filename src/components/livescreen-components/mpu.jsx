import React from "react";
import Banner from "./banner";
import SvgChart from "../Svg/Chart";
import { MpuData } from "../../data/mpu_data";
import CardChart from "./card_chart";

const Mpu = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response601, response602] = await Promise.all([
          axios.get("https://www.iohad-teluxpindad.net/api/sensor/ky/601"),
          axios.get("https://www.iohad-teluxpindad.net/api/sensor/ky/602"),
        ]);

        const data601 = response601.data.data;
        const values601 = data601.map((item) => item.value);
        const categories601 = data601.map((item) => item.inputed_at);

        const data602 = response602.data.data;
        const values602 = data602.map((item) => item.value);
        const categories602 = data602.map((item) => item.inputed_at);

        // Restructure the data for Telinga Kiri and Telinga Kanan
        const chartData601 = {
          series: [{ data: values601 }],
          categories: categories601,
        };

        const chartData602 = {
          series: [{ data: values602 }],
          categories: categories602,
        };

        // Update SensorData for Telinga Kiri and Telinga Kanan
        MpuData.data[0].data[0] = chartData601;
        MpuData.data[1].data[0] = chartData602;

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData immediately and then every 5 seconds
    fetchData();
    const intervalId = setInterval(fetchData, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <section className="mx-auto">
        <Banner
          width={35}
          height={35}
          title="MPU 6050"
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
          {MpuData.data && MpuData.data.length > 0 ? (
            MpuData.data.map((card) => (
              <CardChart
                key={card.id}
                title={card.title}
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
};

export default Mpu;
