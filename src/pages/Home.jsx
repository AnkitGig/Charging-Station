import React, { useState } from "react";
import image1 from "../image/image1.png";

import image from "../image/image.png";
import logo from "../image/logo.png";
import logo2 from "../image/logo2.png";
import logo3 from "../image/logo3.png";
import logo4 from "../image/logo4.png";
import ModalComponent from "../components/ModalComponent";
import img1 from "../image/card1.png";
import img2 from "../image/card2.png";
import fast from "../image/imgpsh_fullsize_anim.png";
import { IoLocationSharp } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
// import Connector from "../components/Connector";

const Home = () => {
  const [connectors] = useState([
    {
      img1: img1,
      type: "JT772",
      price: "0.44 / kWh",
      slot: "Slot 1: AC: 44.4 kW",
      sessionFee: "0.98",
      sessionFee1: "Session Fee",
      parkingFee: "Parking Fee  1.05",
      available: true,
      status: "avalable",
    },
    {
      img1: img2,
      type: "JT772",
      price: "0.44 / kWh",
      slot: "Slot 1: AC: 44.4 kW",
      sessionFee: "0.98",
      sessionFee1: "Session Fee",
      parkingFee: "Parking Fee  1.05",
      available: true,
      status: "avalable",
    },
    {
      img1: img1,
      type: "JT772",
      price: "0.44 / kWh",
      slot: "Slot 1: AC: 44.4 kW",
      sessionFee: "0.98",
      sessionFee1: "Session Fee",
      parkingFee: "Parking Fee  1.05",
      available: true,
      status: "avalable",
    },
    {
      img1: img1,
      type: "JT772",
      price: "0.44 / kWh",
      slot: "Slot 1: AC: 44.4 kW",
      sessionFee: "0.98",
      sessionFee1: "Session Fee",
      parkingFee: "Parking Fee  1.05",
      available: false,
      status: "In use",
    },
    {
      logo: "./image/logo5.png",
      img1: img1,
      type: "CCS2",
      price: "0.44 / kWh",
      slot: "Slot 2: DC: 44.4 kW",
      sessionFee: "0.98",
      sessionFee1: "Session Fee",
      parkingFee: "Parking Fee  1.25",
      available: true,
      status: "Fast charger",
    },
    {
      logo: "./image/logo5.png",
      img1: img1,
      type: "CCS2",
      price: "0.44 / kWh",
      slot: "Slot 2: DC: 44.4 kW",
      sessionFee: "0.98",
      sessionFee1: "Session Fee",
      parkingFee: "Parking Fee  1.25",
      available: false,
      status: "In use",
    },
    {
      logo: "./image/logo5.png",
      img1: img1,
      type: "CCS2",
      price: "0.44 / kWh",
      slot: "Slot 2: DC: 44.4 kW",
      sessionFee: "0.98",
      sessionFee1: "Session Fee",
      parkingFee: "Parking Fee  1.25",
      available: false,
      status: "Faulted",
    },
    {
      logo: "./image/logo5.png",
      img1: img1,
      type: "CCS2",
      price: "0.44 / kWh",
      slot: "Slot 2: DC: 44.4 kW",
      sessionFee: "0.98",
      sessionFee1: "Session Fee",
      parkingFee: "Parking Fee  1.25",
      available: false,
      status: "In use",
    },
  ]);

  const [selectedConnector, setSelectedConnector] = useState(null);

  const openModal = (connector) => {
    setSelectedConnector(connector);
    // document.body.style.overflow = 'hidden';
    document.body.classList.add("overflow-y-hidden");
    document.body.classList.add("scroll-stope");
  };

  const closeModal = () => {
    setSelectedConnector(null);
    // document.body.style.overflow = '';
    document.body.classList.remove("overflow-y-hidden");
    document.body.classList.remove("scroll-stope");
  };

  return (
    <>
      <header className="sticky-header fixed top-0 headertop z-50">
        <div className="header-div1">
           <a className="opacity-0" to={"/charging "}>
              <GoArrowLeft className="arrow" />
            </a>
          <h1 className="header-div1-h1">Select a Connector</h1>
          <img className="h-6 w-[10%] mr-4" src={image1} alt="logo" />
        </div>
      </header>
      <div
        className=" mt-[64px]"
        style={
          {
            //  backgroundImage: "../image/image.png",
          }
        }
      >
        <img src={image} alt="Station" className="w-full min-h-52" />
      </div>
      <div className="absolute  bg-white w-full">
        <div className="bg-blue text-white padding-big2 flex z-50 rounded-b-2xl -mt-1 sticky top-16">
          <p className="mt-1 w-9 text-2xl">
            <IoLocationSharp />
          </p>
          <div className="">
            <h2 className="text-base font-semibold">
              Station ID - UZX67CH0943
            </h2>
            <p className="font-work-sans text-xs font-normal">
              21 Avenue, Metropolitan Mall, Downtown, New York City
            </p>
          </div>
        </div>
        <div className=" mt-4 mb-4 flex w-full flex-col items-center gap-4 px-8">
          <div className="bg-base padding-big2 flex  justify-between w-full rounded-2xl">
            <div className="flex flex-col items-center">
              <img src={logo} className="mb-2 w-5" alt="Restroom" />
              <span className="text-gray w-max text-sm">Restroom</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={logo2} className="mb-2 w-5" alt="Diner" />
              <span className="text-gray w-max text-sm">Diner</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={logo3} className="mb-2 w-5" alt="Hospital" />
              <span className="text-gray w-max text-sm">Hospital</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={logo4} className="mb-2 w-5" alt="Kids Park" />
              <span className="text-gray w-max text-sm">Kids Park</span>
            </div>
          </div>
        </div>
        {/* <div className="mt-4 flex flex-row gap-6 w-10/12 justify-between ml-7"> */}
        <div className=" mb-4 px-8 grid grid-cols-2 gap-4 justify-items-center">
          {connectors.map((connector, index) => (
            <div
              key={index}
              className={`flex items-center flex-col justify-between w-full bg-base cursor-pointer rounded-2xl   ${
                connector.available ? "box-shadow " : " "
              } ${connector.status === "Faulted" ? "border-red-600 " : ""}`}
              onClick={() => openModal(connector)}
            >
              {connector.status === "avalable" ? (
                <div className="w-full mt-4"></div>
              ) : (
                <div className="w-full ">
                  <div className=" flex justify-start">
                    <h2
                      className={` mt-1 text-xs ${
                        connector.status === "In use"
                          ? "bg-[#5D5E60] text-white"
                          : ""
                      } ${
                        connector.status === "Faulted"
                          ? "bg-[#ff2a2a] text-white"
                          : ""
                      } ${
                        connector.status === "Fast charger"
                          ? "bg-[#ffffff] text-[#FFDA44] border border-[#FFDA44]"
                          : ""
                      }`}
                      style={{
                        backgroundImage: "./image/logo5.png",
                        padding: "2px 6px",
                        borderRadius: "18px",
                      }}
                    >
                      {
                        connector.status === "Fast charger"
                          ? <img className="h-4 inline mb-[3px] mr-1" src={fast} alt="fast" />
                          : ""
                      }
                      {connector.status}
                    </h2>
                  </div>
                </div>
              )}
              <div
                className={`flex flex-col items-center mx-4 mb-2  ${
                  connector.available ? "border-red-600 " : "opacity-50"
                }`}
              >
                <img
                  src={connector?.img1}
                  alt="Connector"
                  className="w-16 h-16 mb-4 "
                  style={{
                    height: "76px",
                    width: "auto",
                    // padding: "8px 0px",
                  }}
                />
                <h2
                  style={{
                    height: "21px",
                    width: "100%",
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "21px",
                    textAlign: "center",
                  }}
                >
                  {connector.type}
                </h2>
                <p
                  className="mt-1"
                  style={{
                    height: "16px",
                    width: "100%",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "center",
                  }}
                >
                  ${connector.price}
                </p>
                <p
                  className="slot max-w-max text-sm mt-2"
                  style={{
                    padding: "2px 6px",
                    color: "white",
                    width: "100%",
                    fontWeight: "400",
                    fontSize: "11px",
                    // lineHeight: "16px",
                    textAlign: "center",
                    backgroundColor: connector.available
                      ? "rgba(60, 185, 80, 1)"
                      : "rgb(60 185 80 / 70%)",
                    borderRadius: "12px",
                  }}
                >
                  {connector.slot}
                </p>
              </div>
              <div
                className={`flex flex-col justify-end py-[6px] mt-4 w-full text-center bg-custom-gray rounded-b-2xl bg-base2 ${
                  connector.available ? "border-red-600 " : "opacity-50"
                }`}
              >
                {/* <div className="flex justify-between"> */}
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "16px",
                    textAlign: "center",
                  }}
                >
                  {connector.sessionFee1} {connector.sessionFee}
                </p>
                <div className="h-px w-full bg-zinc-300 my-[6px]"></div>
                <p className="text-xs">{connector.parkingFee}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedConnector && (
        <ModalComponent
          isModalOpen={!!selectedConnector}
          closeModal={closeModal}
          connector={selectedConnector}
        />
      )}
    </>
  );
};

export default Home;
