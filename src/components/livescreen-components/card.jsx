import React from "react";

import Banner from "./banner";

const Card = ({
  title,
  icon,
  value,
  customClassIcon,
  customClassBlack,
  customClassGrey,
  customClassTitle,
  width,
  height,
}) => {
  return (
    <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-lg  w-[250px] h-[250px] flex flex-col">
      <Banner
        width={width}
        height={height}
        title={title}
        icon={icon}
        customClassIcon={customClassIcon}
        customClassBlack={customClassBlack}
        customClassGrey={customClassGrey}
        customClassTitle={customClassTitle}
      />

      <div className="h-24 w-24 bg-slate-400 rounded-xl flex justify-center items-center mx-auto my-5">
        {title == "Temperature" ? (
          <p className="text-center text-white">
            {value}{" "}
            <span className="font-bold">{String.fromCharCode(176)}C</span>
          </p>
        ) : (
          <p className="text-center text-white">{value} %</p>
        )}
      </div>
    </div>
  );
};
export default Card;
