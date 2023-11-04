import React from "react";
import Banner from "./banner";

// eslint-disable-next-line no-unused-vars

import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

const CardChart = ({
  value,
  title,
  categories,
  width,
  height,
  icon,
  customClassBlack,
  customClassGrey,
  customClassIcon,
  customClassTitle,
}) => {
  const options = {
    chart: {
      type: "line",
    },
    xaxis: {
      categories: categories, // Need use in this
      labels: {
        rotate: 0,
        offsetX: 2,
        trim: false,
        style: {
          colors: "#FF5733", // Ubah warna sesuai kebutuhan
          fontSize: "9px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
          whiteSpace: "normal",
          padding: {
            left: 2, // Atur padding kiri sesuai kebutuhan
          },
        },
      },
      // ...other chart options
    },
  };

  return (
    <div>
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg  flex flex-col w-auto h-auto">
        <Banner
          width={width}
          height={height}
          title={title}
          icon={icon}
          customClassGrey={customClassGrey}
          customClassBlack={customClassBlack}
          customClassTitle={customClassTitle}
          customClassIcon={customClassIcon}
        />

        <ReactApexChart
          options={options}
          series={value}
          type={options.chart.type}
          height={300}
        />
      </div>
    </div>
  );
};

export default CardChart;
