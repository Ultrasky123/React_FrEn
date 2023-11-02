import "./App.css";
import { LoadCellData } from "./data/loadcell_data";
import Adxl from "./pages/livescreen-pages/adxl";
import Gas from "./pages/livescreen-pages/gas";
import Livescreen from "./pages/livescreen-pages/livescreen";
import Loadcell from "./pages/livescreen-pages/loadcell";
import Manekin from "./pages/livescreen-pages/manekin";
import Mpu from "./pages/livescreen-pages/mpu";
import SoundSensor from "./pages/livescreen-pages/soundsensor";

function App() {
  return (
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

      <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700 " />
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
    </div>
  );
}

export default App;
