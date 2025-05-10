import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const HeartButton = () => {
  const [filled, setFilled] = useState(false);

  const toggleHeart = () => {
    setFilled(!filled);
  };

  return (
    <p className=" mb-4 result-item-heart-btn" onClick={toggleHeart}>
      {filled ? <FaHeart /> : <FaRegHeart />}
    </p>
  );
};

export default HeartButton;
