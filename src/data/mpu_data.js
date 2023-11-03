import SvgLidar from "../components/Svg/Lidar";
import SvgRotation from "../components/Svg/Rotation";
import SvgSpeedometer from "../components/Svg/Speedometer";
import SvgVibration from "../components/Svg/Vibration";

export const MpuData = {
  data: [
    {
      id: 1,
      title: "Acceleration",

      data: [
        {
          name: "x_acc",
          value: [],
          label: [],
        },
        // {
        //   name: "y_acc",
        //   value: [3, 22, 11, 50, 23, 44, 10, 12, 3, 9],
        //   label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
        // },
        // {
        //   name: "z_acc",
        //   value: [9, 11, 34, 10, 2, 3, 1, 49, 51, 11],
        //   label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
        // },
      ],

      width: 30,
      height: 30,
      icon: SvgSpeedometer,
      customClassIcon: "my-2 ml-2",
      customClassBlack: "w-12 h-12 bg-black rounded-full my-auto ml-1",
      customClassGrey:
        "bg-slate-400 shadow-xl w-[230px] mx-auto my-3 rounded-full flex flex-row flex",
      customClassTitle: "text-center p-4 text-white mx-auto",
    },
    // add more data here
    {
      id: 2,
      title: "Rotation",

      data: [
        {
          name: "x_koord",
          value: [4, 10, 32, 25, 1, 32, 44, 10, 2, 13],
          label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
        },
        {
          name: "y_koord",
          value: [3, 22, 11, 10, 23, 44, 10, 12, 3, 9],
          label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
        },
        {
          name: "z_koord",
          value: [9, 11, 34, 12, 2, 3, 1, 49, 51, 11],
          label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
        },
      ],

      width: 30,
      height: 30,
      icon: SvgRotation,
      customClassIcon: "my-2 ml-2",
      customClassBlack: "w-12 h-12 bg-black rounded-full my-auto ml-1",
      customClassGrey:
        "bg-slate-400 shadow-xl w-[230px] mx-auto my-3 rounded-full flex flex-row flex",
      customClassTitle: "text-center p-4 text-white mx-auto",
    },

    {
      id: 3,
      title: "Vibration",

      data: [
        {
          name: "Vibration Data",
          value: [1, 10, 30, 25, 1, 32, 44, 10, 2, 13],
          label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
        },
      ],

      width: 30,
      height: 30,
      icon: SvgVibration,
      customClassIcon: "my-2 ml-2",
      customClassBlack: "w-12 h-12 bg-black rounded-full my-auto ml-1",
      customClassGrey:
        "bg-slate-400 shadow-xl w-[230px] mx-auto my-3 rounded-full flex flex-row flex",
      customClassTitle: "text-center p-4 text-white mx-auto",
    },

    {
      id: 4,
      title: "Lidar",

      data: [
        {
          name: "Lidar Data",
          value: [1, 10, 30, 25, 1, 32, 44, 10, 2, 13],
          label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
        },
      ],

      width: 35,
      height: 35,
      icon: SvgLidar,
      customClassIcon: "my-2 ml-2",
      customClassBlack: "w-12 h-12 bg-black rounded-full my-auto ml-1",
      customClassGrey:
        "bg-slate-400 shadow-xl w-[230px] mx-auto my-3 rounded-full flex flex-row flex",
      customClassTitle: "text-center p-4 text-white mx-auto",
    },
  ],
};
