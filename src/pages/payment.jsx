import React from "react";
import pic from "../image/image_2024_06_14T06_36_40_151Z.png";
import visa from "../image/visa.png";
import nmex from "../image/nmex.png";
import redorange from "../image/red orange.png";
import blue from "../image/blue.png";
import image1 from "../image/image1.png";
import "./payment.css";

import { IoLocationSharp } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";

import { Link } from "react-router-dom";

function Payment() {
  return (
    <div className="">
    {/* <div className="min-h-screen"> */}
      {/* Main Header */}
      {/* <header className="sticky-header fixed top-0 headertop">
        <div className="header-div1">
          <Link to={"/"}>
            <GoArrowLeft className="arrow ml-7" />
          </Link>

          <h1 className="header-div1-h1">Enter Payment Details</h1>
          <img className="h-6 w-[10%] mr-4" src={image1} alt="logo" />
        </div>
      </header>

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
        </div> */}

        <div className="fixed w-full top-0 z-50">
      <header className="sticky-header  headertop ">
        <div className="header-div1">
        <Link to={"/"}>
            <GoArrowLeft className="arrow" />
          </Link>
          <h1 className="header-div1-h1">Enter Payment Details</h1>
          <img className="h-6 w-[10%]" src={image1} alt="logo" />
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


        {/* want to user here stripe component */}

      {/* Payment Form */}
      <div className="p-6 rounded-lg FormCard mt-[147px]">
        <div className="cardParent rounded-t-2xl">
          <div className="cardContainer">
            <div className="card-img ">
              <img src={pic} alt="Card" className=" cardPic" />
            </div>

            <div className="card-div">
              <h3 className="Card">Credit/Debit Card</h3>
            </div>
          </div>
          <div className="imageContainer flex items-center">
            <img
              src={visa}
              alt="Visa"
              className="mr-1  md:w-10 md:h-9 cardPic1"
            />
            <img
              src={nmex}
              alt="NMEX"
              className="mr-1  md:w-10 md:h-8 cardPic2"
            />
            <img
              src={redorange}
              alt="Red Orange"
              className="mr-1 md:w-10 md:h-8 cardPic3"
            />
            <img
              src={blue}
              alt="Blue"
              className="cardPic4"
              style={{ width: "17px", height: "17px" }}
            />
          </div>
        </div>
        <div className="cardContainer-2 rounded-b-2xl">
          <div className="Containercard">
            <div className="InputCard">
              <input
                type="text"
                placeholder="Cardholder’s Name"
                className="Cardinput placeholder:font-normal"
              />
            </div>
            <div className="InputCard">
              <input
                type="text"
                placeholder="Card Number"
                className="Cardinput placeholder:font-normal mt-1"
              />
            </div>
            <div className="inputcard2 mt-3">
              <div className="InputCard3">
                <input
                  type="text"
                  placeholder="Valid Till"
                  className="Cardinput2"
                />
              </div>
              <div className="InputCard3">
                <input type="text" placeholder="CVV" className="Cardinput2" />
              </div>
            </div>

            <div className="InputCard3 mt-3 ml-1">
              <input
                type="text"
                placeholder="ZIP Code"
                className="InputCard4 placeholder:font-norma"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form className="text-center emailInput mb-24">
        <input
          type="email"
          placeholder="Email Address"
          required
          className="inputemail border-2 w-[85%]  rounded-md px-5 md:h-[55px]"
        />
        <br />
        <input
          type="number"
          placeholder="Phone (Optional)"
          required
          className="inputPhone w-[85%] h-10 rounded-md px-5 md:h-[55px]"
        />
        <div className="flex flex-col	items-center">
        <div className="">
          <h2 className="font-medium text-[16px]  text-start "> 
            Receive SMS Notifications*
            <label className="inline-flex items-center cursor-pointer ml-3">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-8 h-4 mt-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </h2>
        <p className="text-gray-400 text-start w-60 text-[12px] ">
          *Data charges may apply
        </p>
        </div>
        </div>

        <div className="p-2 fixed w-full bottom-0 btn-text padding-big2 bg-white border-t border-[#F5F5F5]">
          <Link to={"/confirm"}>
            <button className=" text-xl bg-blue-600 text-white p-2 w-[85%] h-[43px] rounded-sm ">
              Proceed
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Payment;
