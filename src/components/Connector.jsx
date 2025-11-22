import React, { useState } from "react";
import img1 from "../image/card1.png";
import ModalComponent from "./ModalComponent";

const Connector = ({ connector }) => {
  const [selectedConnector, setSelectedConnector] = useState(null);
  const openModal = (connector) => {
    setSelectedConnector(connector);
    document.body.classList.add("overflow-y-hidden");
  };
  const closeModal = () => {
    setSelectedConnector(null);
    document.body.classList.remove("overflow-y-hidden");
  };
  return (
    <div
      key={connector.type}
      className="flex items-center flex-col p-4 w-1/2 h-64 bg-gray-200 cursor-pointer"
      style={{
        backgroundColor: "rgba(245, 245, 245, 1)",
        borderRadius: "8px",
        opacity: connector.available ? 1 : 0.5,
      }}
      onClick={() => openModal(connector)}
    >
      <div className="flex">
        <h2
          style={{
            backgroundImage: "./image/logo5.png",
            padding: "2px, 4px, 2px, 4px",
            backgroundColor: "rgba(93, 94, 96, 1)",
            border: "none",
            borderRadius: "8px",
            color: "white",
          }}
        >
          {connector.available ? "" : "In Use"}
        </h2>
      </div>
      <img
        src={img1}
        alt="Connector"
        className="w-16 h-16 mb-4 "
        style={{ height: "76.31px", width: "auto", padding: "8px 0px" }}
      />
      <div className="flex flex-col justify-between h-full text-center bg-custom-gray">
        <h2
          style={{
            height: "21px",
            width: "100%",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "21.11px",
            textAlign: "center",
          }}
        >
          {connector.type}
        </h2>
        <p
          style={{
            height: "16px",
            width: "100%",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16.42px",
            textAlign: "center",
          }}
        >
          {connector.price}
        </p>
        <p
          className="slot max-w-max text-sm"
          style={{
            padding: "2px, 4px, 2px, 4px",
            color: "black",
            height: "14px",
            width: "100%",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "16.42px",
            textAlign: "center",
            backgroundColor: connector.available
              ? "rgba(60, 185, 80, 1)"
              : "rgb(60 185 80 / 70%)",
            borderRadius: "8px",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          {connector.slot}
        </p>
        <div className="flex justify-between">
          <p
            style={{
              height: "26px",
              border: "0px, 0px, 1px, 0px",
              padding: "6px, 16px, 6px, 16px",
              width: "200%",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "16.42px",
              textAlign: "center",
            }}
          >
            {connector.sessionFee1}
          </p>
          <p
            style={{
              height: "26px",
              border: "0px, 0px, 1px, 0px",
              padding: "6px, 16px, 6px, 16px",
              width: "100%",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "16.42px",
              textAlign: "center",
            }}
          >
            {connector.sessionFee}
          </p>
        </div>
        <p>{connector.parkingFee}</p>
      </div>
      {selectedConnector && (
        <ModalComponent
          isModalOpen={!!selectedConnector}
          closeModal={closeModal}
          connector={selectedConnector}
        />
      )}
    </div>
  );
};

export default Connector;
// // src/components/Connector.js
// import React from 'react';

// const Connector = ({ type, price, slot, sessionFee, parkingFee, available }) => {
//   return (
//     <div className={`p-4 border rounded-md cursor-pointer mx-2 ${available ? 'border-green-500' : 'border-gray-500'}`}>
//       <h3 className="text-xl font-semibold">{type}</h3>
//       <p>${price} / kWh</p>
//       <p>{slot}</p>
//       <p>Session Fee: ${sessionFee}</p>
//       <p>Parking Fee: ${parkingFee}/hr</p>
//     </div>
//   );
// };

// export default Connector;
