import React, { useState } from "react";

const DropdownFilter = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="refine-list-option" onClick={toggleDropdown}>
      {title}
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <a href={option.link}>{option.text}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownFilter;
