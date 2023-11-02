import React from "react";
import SvgHuman from "../../dist/Human";
import Banner from "./banner";
import Imgmanekin from "../../../public/images/img-manekin.png";
import KotakIndikator from "./kotak_indikator";

const Manekin = () => {
  return (
    <div>
      <Banner
        width={35}
        height={35}
        title="SMART MANNEQUIN"
        icon={SvgHuman}
        customClassGrey={
          "bg-slate-400 shadow-xl w-[350px] mx-auto my-3 rounded-full flex flex-row"
        }
        customClassBlack={"w-12 h-12 bg-black rounded-full my-auto ml-1"}
        customClassTitle={"text-center p-4 text-white content-evenly flex-grow"}
      />

      <section>
        <div className="mx-auto relative">
          {/* TELAPAK KAKI KIRI */}
          <div className="absolute left-1/2 transform translate-x-[75px] top-[640px] sm:top-[970px] sm:translate-x-[120px] lg:top-[620px] lg:translate-x-[70px] xl:top-[700px] xl:translate-x-[120px]  2xl:top-[950px] 3xl:top-[950px] 3xl:translate-x-[120px] ">
            <KotakIndikator />
          </div>

          {/* TELAPAK KAKI KANAN */}
          <div className="absolute left-1/2 transform -translate-x-[90px] top-[640px] sm:top-[970px] sm:-translate-x-[130px lg:top-[620px] xl:top-[700px] xl:-translate-x-[130px] 2xl:top-[950px] 3xl:top-[950px] 3xl:-translate-x-[130px]">
            <KotakIndikator />
          </div>

          {/* SENDI KAKI KIRI */}
          <div className="absolute left-1/2 transform translate-x-[60px] top-[490px] sm:top-[720px] sm:translate-x-[90px] lg:top-[480px] lg:translate-x-[90px] xl:top-[500px] 2xl:top-[730px] 3xl:top-[720px] 3xl:translate-x-[90px]">
            <KotakIndikator />
          </div>

          {/* SENDI KAKI KANAN */}
          <div className="absolute left-1/2 transform -translate-x-[65px] top-[490px] sm:top-[720px] sm:-translate-x-[90px] lg:top-[480px] lg:-translate-x-[90px] xl:top-[500px] 2xl:top-[730px] 3xl:top-[720px] 3xl:-translate-x-[100px]">
            <KotakIndikator />
          </div>

          {/* PAHA KIRI */}
          <div className="absolute left-1/2 transform translate-x-[52px] top-[400px] sm:top-[550px] lg:top-[400px] lg:translate-x-[65px] 2xl:top-[550px] 3xl:top-[550px]">
            <KotakIndikator />
          </div>

          {/* PAHA KANAN */}
          <div className="absolute left-1/2 transform -translate-x-[60px] top-[400px] sm:top-[550px] lg:top-[400px] lg:-translate-x-[70px] 2xl:top-[550px] 3xl:top-[550px]">
            <KotakIndikator />
          </div>

          {/* PINGGANG */}
          <div className="absolute left-1/2 transform -translate-x-1/4 top-[300px] sm:top-[500px] lg:top-[320px] xl:top-[360px] 2xl:top-[500px] 3xl:top-[500px]">
            <KotakIndikator />
          </div>

          {/* SIKUT  KIRI */}
          <div className="absolute left-1/2 transform translate-x-[98px] top-[240px] sm:translate-x-[145px] sm:top-[350px] lg:top-[230px] lg:translate-x-[93px] xl:top-[260px] xl:translate-x-[100px] 2xl:top-[350px] 2xl:translate-x-[145px] 3xl:top-[350px] 3xl:translate-x-[145px]">
            <KotakIndikator />
          </div>
          {/* SIKUT  KANAN */}
          <div className="absolute left-1/2 transform -translate-x-[105px] top-[240px] sm:-translate-x-[150px] sm:top-[350px] lg:top-[230px] lg:-translate-x-[100px] xl:top-[260px] xl:-translate-x-[110px] 2xl:top-[350px] 2xl:-translate-x-[150px] 3xl:top-[350px] 3xl:-translate-x-[150px]">
            <KotakIndikator />
          </div>

          {/* OTOT TANGAN  Kiri */}
          <div className="absolute left-1/2 transform translate-x-[94PX] top-[200px] sm:translate-x-[130px] sm:top-[300px] lg:top-[190px] lg:translate-x-[85px] xl:top-[250px] xl:translate-x-[125px] 3xl:top-[280px] 3xl:translate-x-[130px]">
            <KotakIndikator />
          </div>

          {/* OTOT TANGAN Kanan */}
          <div className="absolute left-1/2 transform -translate-x-[102PX] top-[200px] sm:-translate-x-[140px] sm:top-[300px] lg:top-[190px] lg:-translate-x-[90px] xl:top-[260px] xl:-translate-x-[130px]  3xl:top-[280px] 3xl:-translate-x-[130px]">
            <KotakIndikator />
          </div>

          {/* BISEP KIRI */}
          <div className="absolute left-1/2 transform translate-x-[90px] top-[150px] sm:translate-x-[130px] sm:top-[240px] lg:top-[160px] lg:translate-x-[85px] xl:top-[170px] xl:translate-x-[100px]  2xl:top-[225px] 2xl:translate-x-[120px] 3xl:top-[240px] 3xl:translate-x-[130px]">
            <KotakIndikator />
          </div>

          {/* BISEP KANAN */}
          <div className="absolute left-1/2 transform -translate-x-[100px] top-[150px] sm:-translate-x-[140px] sm:top-[230px] lg:top-[160px] lg:-translate-x-[90px] xl:top-[170px] xl:-translate-x-[100px] 2xl:-translate-x-[130px] 2xl:top-[225px] 3xl:top-[230px] 3xl:-translate-x-[130px]">
            <KotakIndikator />
          </div>

          {/* LEHER */}
          <div className="absolute left-1/2 transform -translate-x-1/4 top-[90px] lg:top-[90px] 2xl:top-[140px] 3xl:top-[135px]">
            <KotakIndikator />
          </div>

          {/* HIDUNG */}
          <div className="absolute left-1/2 transform -translate-x-1/4 top-[50px] lg:top-[50px] 2xl:top-[80px] 3xl:top-[80px]">
            <KotakIndikator />
          </div>

          {/* Telinga KIRI */}
          <div className="absolute left-1/2 transform translate-x-[28px] top-[50px] sm:top-[75px] sm:translate-x-[44px] lg:top-[50px] lg:translate-x-[30px] 2xl:top-[70px] 2xl:translate-x-[45px] 3xl:top-[70px] 3xl:translate-x-[45px]">
            <KotakIndikator />
          </div>

          {/* TELINGA KANAN */}
          <div className="absolute left-1/2 transform -translate-x-[32px]  top-[50px] sm:top-[70px] sm:-translate-x-[44px] lg:top-[50px] lg:-translate-x-[33px] 2xl:top-[70px] 2xl:-translate-x-[50px] 3xl:top-[70px] 3xl:-translate-x-[45px]">
            <KotakIndikator />
          </div>

          {/* MATA KIRI */}
          <div className="absolute left-1/2 transform translate-x-[14px] top-10 sm:top-[62px] lg:top-[40px] 2xl:top-16 3xl:top-16 3xl:translate-x-[18px]">
            <KotakIndikator />
          </div>

          {/* MATA KANAN */}
          <div className="absolute left-1/2 transform -translate-x-[18px] top-10 sm:top-[62px] lg:top-[40px] 2xl:top-16 3xl:top-20">
            <KotakIndikator
              url={"https://www.iohad-teluxpindad.net/api/status"}
            />
          </div>

          {/* KEPALA */}
          <div className="absolute left-1/2 transform -translate-x-1/4">
            <KotakIndikator
              url={"https://www.iohad-teluxpindad.net/api/status"}
            />
          </div>

          <img
            src={Imgmanekin}
            alt="Mannekin"
            className=" w-3/4 h-3/4 mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Manekin;
