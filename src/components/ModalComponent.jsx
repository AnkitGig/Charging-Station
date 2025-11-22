import React, { useState } from "react";
import img1 from "../image/card1.png";
import { Link } from "react-router-dom";

const ModalComponent = ({ isModalOpen, closeModal, connector }) => {
  const [activebox, setactivebox] = useState(null);
  const buttons = [
    { id: 0, timing: "12 AM- 8 AM", kwh: "$0.35/kWh" },
    { id: 1, timing: "8 AM- 12 PM", kwh: "$0.35/kWh" },
    { id: 3, timing: "12 PM- 2 PM", kwh: "$0.35/kWh" },
    { id: 4, timing: "2 PM- 6 PM", kwh: "$0.35/kWh" },
    { id: 5, timing: "6 PM- 10 PM", kwh: "$0.35/kWh" },
    { id: 6, timing: "10 PM- 12 AM", kwh: "$0.35/kWh" },
    { id: 11, timing: "8 AM- 12 PM", kwh: "$0.35/kWh" },
    { id: 13, timing: "12 PM- 2 PM", kwh: "$0.35/kWh" },
    { id: 14, timing: "2 PM- 6 PM", kwh: "$0.35/kWh" },
    { id: 15, timing: "6 PM- 10 PM", kwh: "$0.35/kWh" },
    { id: 16, timing: "10 PM- 12 AM", kwh: "$0.35/kWh" },
  ];

  const stopScroll = () => {
    document.body.classList.remove("scroll-stope");
  }
  
  if (!isModalOpen) return null;
  return (
    <div
      id="modelConfirm"
      className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full  "
      onClick={closeModal}
    >
      <div
        className="absolute bottom-0 mx-auto shadow-xl h-[70vh] bg-white w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-between  h-full">
          <div className=" flex flex-row padding-big ">
            <img className=" w-24 h-24 mr-8" src={img1} alt="img1" />
            <div className="space-y-2 ">
              <div className="flex items-center">
                <h3 className=" font-bold text-lg w-full ">J1772</h3>
                <h3 className="text-sm">$0.44/KWh</h3>
              </div>
              <div className="bg-green text-white rounded-full text-xs padding3 w-fit">
                {" "}
                Slot 1 • AC • 44.4 KW{" "}
              </div>
              <p className="text-xs">
                21 Awenue, Metropolitan Mall, Downtown ,New York City
              </p>
            </div>
          </div>
            <div className=" flex flex-col  bg-gray-100 p-2 padding-big space-y-4">
              <div className=" flex flex-row justify-between">
                <p className="font-medium">Session Fee</p>
                <p className="font-">$0.99</p>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="font-medium">Parking Fee </h1>
                <div className="text-end">
                  <p className="">$1.50/hr for first 30 min</p>
                  <p>$2.50/hr for after 300 min</p>
                </div>
              </div>
            </div>
          <div className="h-[49vh] overflow-scroll">
            <div className=" flex flex-col  padding-big mb-4">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  className={` flex flex-row justify-between p-2 rounded-sm ${
                    activebox === button.id
                      ? "bg-darkBlue text-white"
                      : " text-black"
                  }`}
                  onClick={() => setactivebox(button.id)}
                >
                  <p className="font-medium">{button.timing}</p>
                  <p className=" ">{button.kwh}</p>
                </button>
              ))}
            </div>
          </div>
          {/* <div className="padding-big">
            <Link to={"/payment"} onClick={stopScroll}>
              <button className="text-xl bg-lightBlue text-white h-[43px]  w-full  rounded-sm">
                {" "}
                Proceed
              </button>
            </Link>
          </div> */}
          <div className="p-2 fixed w-full bottom-0 btn-text padding-big2 bg-white border-t border-[#F5F5F5]">
          <Link to={"/payment"} onClick={stopScroll}>
            <button className=" text-xl bg-blue-600 text-white p-2 w-[85%] h-[43px] rounded-sm ">
              Proceed
            </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
