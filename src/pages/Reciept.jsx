import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import image1 from '../image/image1.png';

const Reciept = () => {
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <header className="sticky-header  headertop ">
          <div className="header-div1">
            <a className="opacity-0" to={'/charging '}>
              <GoArrowLeft className="arrow" />
            </a>
            <h1 className="header-div1-h1">Session Details</h1>
            <img className="h-6 w-[10%] " src={image1} alt="logo" />
          </div>
        </header>
        <div>
          <div className="flex header-2" style={{ backgroundColor: '#0244CA' }}>
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

      <div className="mt-[147px] flex flex-col justify-center items-center py-4 px-8 bg-gray-100 min-h-screen">
        <div className="flex flex-col items-center gap-[10px]">
          <div className="bg-[#2196F3] w-16 h-16 rounded-full text-white flex justify-center items-center">
            <span className="text-2xl">✓</span>
          </div>
          <h1 className="text-base font-normal">Charging Complete!</h1>
          <p className="text-gray-600">Session ID - 112038548</p>
        </div>

        <div className="w-full max-w-md mb-4">
          <div className="relative overflow-x-auto rounded-xl">
            <table className="w-full text-sm text-left rounded-xl">
              <tbody className="text-black">
                <tr className="border-b bg-gray-100">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Charging Fee
                  </th>
                  <td className="px-6 py-2">$15.00</td>
                </tr>
                <tr className="border-b bg-gray-100">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Energy Used
                  </th>
                  <td className="px-6 py-2">34.7 kWh</td>
                </tr>
                <tr className="border-b bg-gray-100">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Duration
                  </th>
                  <td className="px-6 py-2">2 hrs 15 mins</td>
                </tr>
                <tr className="border-b bg-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-2 font-bold whitespace-nowrap"
                  >
                    Total
                  </th>
                  <td className="px-6 py-2 font-bold">$15.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-xs py-2 w-full max-w-md mb-4 px-1">
          <p className="text-gray-400">Transaction ID - 00112388950</p>
          <p className="text-gray-400">Payment Details - AMEX 90033</p>
        </div>

        <div className="w-full max-w-md mb-4">
          <div className="relative overflow-x-auto rounded-xl">
            <table className="w-full text-sm text-left rounded-xl">
              <tbody className="text-black">
                <tr className="border-b bg-[#C1C1C2]">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Time slot - 2.00 PM - 6.00 PM
                  </th>
                  <td className="px-6 py-2"></td>
                </tr>
                <tr className="border-b bg-[#F0F0F0]">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Energy Delivered
                  </th>
                  <td className="px-6 py-2">3 kW</td>
                </tr>
                <tr className="border-b bg-[#F0F0F0]">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Start Time
                  </th>
                  <td className="px-6 py-2">2.30 PM</td>
                </tr>
                <tr className="border-b bg-[#F0F0F0]">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    End Time
                  </th>
                  <td className="px-6 py-2">5.30 PM</td>
                </tr>
                <tr className="border-b bg-[#F0F0F0]">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Duration
                  </th>
                  <td className="px-6 py-2">3.00.00</td>
                </tr>
                <tr className="border-b bg-[#F0F0F0]">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Price
                  </th>
                  <td className="px-6 py-2">$0.44 kWh</td>
                </tr>
                <tr className="border-b bg-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-2 font-bold whitespace-nowrap"
                  >
                    Energy Cost
                  </th>
                  <td className="px-6 py-2">$3.42</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full max-w-md mb-4">
          <div className="relative overflow-x-auto rounded-xl">
            <table className="w-full text-sm text-left rounded-xl">
              <tbody className="text-black">
                <tr className="border-b bg-[#C1C1C2]">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Time slot - 6.00 PM - 10.00 PM
                  </th>
                  <td className="px-6 py-2"></td>
                </tr>
                <tr className="border-b bg-[#F0F0F0]">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Start Time
                  </th>
                  <td className="px-6 py-2">6.00 PM</td>
                </tr>
                <tr className="border-b bg-[#F0F0F0]">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    End Time
                  </th>
                  <td className="px-6 py-2">6.45 PM</td>
                </tr>
                <tr className="border-b bg-[#F0F0F0]">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Duration
                  </th>
                  <td className="px-6 py-2">0.45.00</td>
                </tr>
                <tr className="border-b bg-[#F0F0F0]">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Energy Delivered
                  </th>
                  <td className="px-6 py-2">1 kW</td>
                </tr>
                <tr className="border-b bg-[#F0F0F0]">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium whitespace-nowrap"
                  >
                    Price
                  </th>
                  <td className="px-6 py-2">$0.44 kWh</td>
                </tr>
                <tr className="border-b bg-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-2 font-bold whitespace-nowrap"
                  >
                    Energy Cost
                  </th>
                  <td className="px-6 py-2">$0.44</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <button className="bg-blue-700 text-white w-full max-w-md p-2 rounded-md">
          <Link to={'/'}>Close</Link>
        </button>
      </div>
    </>
  );
};

export default Reciept;
