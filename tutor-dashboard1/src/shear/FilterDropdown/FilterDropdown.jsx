import React from "react";
import "./FilterDropdown.css";

function FilterDropdown({ value, options, onChange }) {
  return (
    <select className="filter-dropdown" value={value} onChange={onChange}>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}

export default FilterDropdown;