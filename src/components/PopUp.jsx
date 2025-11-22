import React from "react";
import { Link } from "react-router-dom";

function PopUp() {
  return (
    <div className="finish">
      <Link to={"/reciept"}>
        <p>
          Please unplug the connector to complete your session and to avoid
          further charges.
        </p>
      </Link>
    </div>
  );
}

export default PopUp;
