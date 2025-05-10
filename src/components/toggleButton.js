import React from "react";
import "./toggleButton.css";

const ToggleButton = ({ text, isActive, onClick }) => {
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <button
      className={`information-summary-item-type-btn ${
        isActive ? "active" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ToggleButton;
