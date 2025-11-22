import React from "react";
import { useNavigate } from "react-router-dom";

function EndSession({ closePopup }) {
  const navigate = useNavigate();

  const handleYesClick = () => {
    console.log("Session ended");
    closePopup();
    navigate("/charge-end");
  };

  return (
    // <div className="">
      <div className="popup">
         <div className="popup-box">
          <p>Are you sure you want to end the Charging Session?</p>
          <span className="space-x-[10px]">
            <button onClick={handleYesClick}>Yes</button>
            <button className="border border-zinc-400 text-center" onClick={closePopup}>No</button>
          </span>
         </div>
      </div>
  // </div>
  );
}

export default EndSession;
