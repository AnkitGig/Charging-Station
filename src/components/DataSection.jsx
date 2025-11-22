import React, { useState } from 'react';
import EndSession from './EndSession';

function DataSection() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="data ">
    <div className="endbox bg-white padding-big2">
      <button onClick={handleClick} className="endbtn">
        End Session
      </button>
    </div>
        {showPopup && <EndSession closePopup={closePopup} />}
      </div>
    </>
  );
}

export default DataSection;
