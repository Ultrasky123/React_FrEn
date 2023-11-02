import { Earleft, Earright } from "../components/Svg";

export const SensorData = {
  data: [
    {
      id: 1,
      title: "Telinga Kiri",
      data: [
        {
          name: "value",
          value: [],
          label: [],
        },
      ],
      width: 35,
      height: 35,
      icon: Earleft,
      customClassIcon: "my-2 ml-2",
      customClassBlack: "w-12 h-12 bg-black rounded-full my-auto ml-1",
      customClassGrey:
        "bg-slate-400 shadow-xl w-[230px] mx-auto my-3 rounded-full flex flex-row flex",
      customClassTitle: "text-center p-4 text-white mx-auto",
    },
    {
      id: 2,
      title: "Telinga Kanan",
      data: [
        {
          name: "value",
          value: [],
          label: [],
        },
      ],
      width: 35,
      height: 35,
      icon: Earright,
      customClassIcon: "my-2 ml-2",
      customClassBlack: "w-12 h-12 bg-black rounded-full my-auto ml-1",
      customClassGrey:
        "bg-slate-400 shadow-xl w-[230px] mx-auto my-3 rounded-full flex flex-row flex",
      customClassTitle: "text-center p-4 text-white mx-auto",
    },
  ],
};
