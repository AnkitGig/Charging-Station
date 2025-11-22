import React from "react";
import { useState } from "react";
// import Navbar from "../components/Navbar";
import img from "../image/card1.png";
// import { GoArrowLeft } from "react-icons/go";
// import { MdLocationOn } from "react-icons/md";
import image1 from "../image/image1.png";
import "./PaymentCard.css";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import visa from "../image/visa.png";
import "./payment.css";

function ConfirmCharger() {
  const [isChecked, setIsChecked] = useState(false);

  const handleStartCharging = () => {
    if (isChecked) {
      // Proceed with charging logic here
      console.log("Starting charging...");
    } else {
      // Show error or highlight the checkbox
    }
  };

  console.log(handleStartCharging());

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className="bg-white rounded-lg pb-32">
      {/* <header className="sticky-header fixed top-0 headertop">
        <div className="header-div1">
          <Link to={"/payment"}>
            <GoArrowLeft className="arrow ml-7" />
          </Link>

          <h1 className="header-div1-h1">Confirm Session</h1>
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
        <Link to={"/payment"}>
            <GoArrowLeft className="arrow " />
          </Link>
          <h1 className="header-div1-h1">Confirm Session</h1>
          <img className="h-6 w-[10%] " src={image1} alt="logo" />
        </div>
      </header>
      <div>
        <div
          className="flex header-2"
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
      </div> 
    </div>


      <div className="cardBody mt-[147px]">
        <div className="card rounded-2xl">
          <div className="flex justify-center">
            <img className="w-32" src={img} alt="Connector" />
          </div>

          <div className="text-center mt-4">
            <h1 className="text-xl font-bold">J1772</h1>
            <p className="price">$0.44 / kWh</p>
            <button className="mt-2 btn-slot ">
              <span className="padding3">Slot 1: AC - 4.4 kW</span>
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-clark">Clark Kent</p>
            <p className="text-email">clark.kent@gmail.com</p>
            <p className="text-number">+1 237 449 8744</p>
            <p className="text-sms">SMS Notification</p>
            <div className="payment-info">
              <div className="payment-method">
                <p className="payment-method-title">Payment Method</p>

                <img className="payment-logo" src={visa} alt="Visa" />
                <p className="payment-number">9033</p>
              </div>
            </div>
            <div className="h-8"></div>
          </div>
        </div>
        <div className="flex items-start textcheck">
          <input
            type="checkbox"
            className="h-4 mt-[3px] w-4 text-blue-500 focus:ring-blue-400 rounded-lg checkbx"
          />
          <label className="ml-2">
            <span className="text-1">I Agree to the</span>{" "}
            <span className="text-2">Terms of Use</span> and{" "}
            <span className="text-2">Privacy Policy </span>
          </label>
        </div>
      </div>

      <div className="border-t fixed bottom-0 w-full bg-white">
        <div>
          <div></div>
          <p className="text-center mt-4 text-confirm">
            Please confirm if the connector is <br />
            plugged in before proceeding.
          </p>
        </div>

        {/* <div className="btn-parent">
          <div>
            <Link to={"/charging"}>
              <button
                className="mt-4 w-full py-2 rounded-md btn-text"
                onClick={handleCheckboxChange}
              >
                <span> Start Charging </span>
              </button>
            </Link>
          </div>
        </div> */}
        <div className="p-2 fixed w-full bottom-0 btn-text padding-big2 bg-white border-t border-[#F5F5F5]">
        <p className="text-center mb-4 text-confirm">
            Please confirm if the connector is <br />
            plugged in before proceeding.
          </p>
          <Link to={"/charging"}>
            <button onClick={handleCheckboxChange} className=" text-xl bg-blue-600 text-white p-2 w-[85%] h-[43px] rounded-sm ">
            Start Charging
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCharger;
