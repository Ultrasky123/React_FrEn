import SvgTemperature from "../components/Svg/Temperature";
import SvgHumidity from "../components/Svg/Humidity";

const LivescreenData = {
  data: [
    {
      id: 1,
      value: "",
      title: "Temperature",
      width: 45,
      height: 45,
      icon: SvgTemperature,
      customClassIcon: "",
      customClassBlack: "w-12 h-12 bg-black rounded-full my-auto ml-1",
      customClassGrey:
        "bg-slate-400 shadow-xl w-[230px] mx-auto my-3 rounded-full flex flex-row flex",
      customClassTitle: "text-center p-4 text-white mx-auto",
    },
    {
      id: 2,
      value: "",
      title: "Humidity",
      width: 30,
      height: 30,
      icon: SvgHumidity,
      customClassIcon: "mx-2 my-2",
      customClassBlack: "w-12 h-12 bg-black rounded-full my-auto ml-1",
      customClassGrey:
        "bg-slate-400 shadow-xl w-[230px] mx-auto my-3 rounded-full flex flex-row flex",
      customClassTitle: "text-center p-4 text-white mx-auto",
    },
    // Add more objects for each Card component you want to render
  ],
};

export { LivescreenData };
