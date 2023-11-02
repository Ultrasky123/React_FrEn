import SvgSmoke from "../components/Svg/Smoke";

export const GasData = {
  data: [
    {
      id: 1,
      title: "GAS",

      data: [
        {
          name: "Gas CO2",
          value: [1, 10, 30, 25, 1, 32, 44, 10, 2, 13],
          label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
        },
        {
          name: "Gas CO",
          value: [3, 22, 11, 50, 23, 44, 10, 12, 3, 9],
          label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
        },
        {
          name: "Gas Amonia",
          value: [9, 11, 34, 10, 2, 3, 1, 49, 51, 11],
          label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
        },
      ],

      width: 35,
      height: 35,
      icon: SvgSmoke,
      customClassIcon: "my-2 ml-2",
      customClassBlack: "w-12 h-12 bg-black rounded-full my-auto ml-1",
      customClassGrey:
        "bg-slate-400 shadow-xl w-[230px] mx-auto my-3 rounded-full flex flex-row flex",
      customClassTitle: "text-center p-4 text-white mx-auto",
    },
  ],
};
