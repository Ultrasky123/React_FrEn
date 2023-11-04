import "../index.css";
import React, { useState, createContext, useContext } from "react";
import Adxl from "../components/livescreen-components/adxl";
import Gas from "../components/livescreen-components/gas";
import Livescreen from "../components/livescreen-components/livescreen";
import Loadcell from "../components/livescreen-components/loadcell";
import Manekin from "../components/livescreen-components/manekin";
import Mpu from "../components/livescreen-components/mpu";
import SoundSensor from "../components/livescreen-components/soundsensor";
import { Switch, Fab } from "@mui/material";
export const FetchingContext = createContext();

function Mylivescreen() {
  const [isFetching, setIsFetching] = useState(false); // Create the state

  const handleSwitchChange = () => {
    setIsFetching(!isFetching); // Toggle isFetching when the switch is clicked
  };
  return (
    <FetchingContext.Provider value={{ isFetching, setIsFetching }}>
      <div className="App">
        <div className="flex flex-col md:flex-row w-full">
          <section className="flex-1 md:order-2">
            <Manekin />
          </section>
          <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700 md:hidden" />
          <section className="flex-1 md:order-1">
            <Livescreen />
            <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700 md:hidden" />
            <Gas />
          </section>
          <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700 md:hidden" />
          <section className="flex-1 md:order-3  ">
            <SoundSensor />
          </section>
        </div>

        <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="w-full md:flex-row   ">
          <section className="flex flex-wrap justify-center md:justify-strecth                                                                                                                                                                                                                                                                                                                                          md:gap-8 ">
            <div className="md:flex-1 max-w-md">
              <Adxl />
            </div>
            <div className="md:flex-1 max-w-md">
              <Mpu />
            </div>
            <div className="md:flex-1 max-w-md">
              <Loadcell />
            </div>
          </section>
        </div>
        <Switch checked={isFetching} onChange={handleSwitchChange} />
      </div>
    </FetchingContext.Provider>
  );
}

export default Mylivescreen;
