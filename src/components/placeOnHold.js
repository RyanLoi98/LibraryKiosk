import React, { useState } from "react";

const PlaceOnHold = () => {
  const [hold, setHold] = useState(false);

  const toggleHold = () => {
    setHold(!hold);
  };

  //change background colour when on hold
  const holdColour = {
    backgroundColor: hold ? "rgba(111, 255, 0, 0.615)" : "",
  };

  return (
    <button
      className="result-item-interact-btn"
      onClick={toggleHold}
      style={holdColour}
    >
      {hold ? "Hold Requested" : "Place on Hold"}
    </button>
  );
};

export default PlaceOnHold;
