import React, { useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ options, onSelect, defaultOption }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption || "");

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option); // Optional: Call a function when an option is selected
  };

  return (
    <div className="dropdown">
      <p className="select-day-label" data-testid="selectDays">
        Select Days
      </p>
      <select
        data-testid="dropdown"
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">Select day</option>
        {options?.map((option) => (
          <option
            data-testid={option?.value}
            key={option?.value}
            value={option?.value}
          >
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
