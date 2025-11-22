import React from "react";
import ChargeComlete from "../components/ChargeComlete";
import ToPay from "../components/ToPay";
import SessionPay from "../components/SessionPay";
import ParkingFees from "../components/ParkingFess";
import PopUp from "../components/PopUp";
import image1 from '../image/image1.png';
import { IoLocationSharp } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";

const ChargeEnd = () => {
  return (
    <>
       {/* <header className="sticky-header fixed top-0 headertop">
        <div className="header-div1">
          <div className=""></div>

          <h1 className="header-div1-h1">Session Details</h1>
          <img className="h-6 w-[10%] mr-4" src={image1} alt="logo" />
        </div>
      </header>

      <div>
        <div
          className="flex mt-[64px] header-2"
          style={{ backgroundColor: "#0244CA" }}
        >
          <p className="header-logo">
            <IoLocationSharp />
          </p>
          <div className="header2-textp">
            <h2 className="header2-text">Station ID - UZX67CH0943</h2>
            <div>
              <p className="header2-text2 mt-1">
                21 Avenue, Metropolitan Mall, Downtown, New York
              </p>
              <p className="header2-text2-1">city</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="fixed w-full top-0 z-50">
        <header className="sticky-header  headertop ">
          <div className="header-div1">
            <a className="opacity-0" to={"/charging "}>
              <GoArrowLeft className="arrow" />
            </a>
            <h1 className="header-div1-h1">Session Details</h1>
            <img className="h-6 w-[10%] " src={image1} alt="logo" />
          </div>
        </header>
        <div>
          <div className="flex header-2" style={{ backgroundColor: "#0244CA" }}>
            <p className="header-logo">
              <IoLocationSharp />
            </p>
            <div className="header2-textp">
              <h2 className="header2-text">Station ID - UZX67CH0943</h2>
              <div>
                <p className="header2-text2 mt-1">
                  21 Avenue, Metropolitan Mall, Downtown, New York
                </p>
                <p className="header2-text2-1">city</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="data mt-[147px]">
        <ChargeComlete />
        <ToPay />
        <SessionPay />
        <ParkingFees />
      </div>
      <PopUp />
    </>
  );
};

export default ChargeEnd;
