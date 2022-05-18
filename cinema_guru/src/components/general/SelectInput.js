import './general.css';
import React from 'react';

function SelectInput({ label, options, className, value, setValue }) {
  function handleSelect(e) {
    setValue(e.target.value);
  }
  return (
    <select
      label={label}
      className={className}
      value={value}
      onChange={handleSelect()}
    >
      {options.map((option) => (
        <option value={option}>option</option>
      ))}
    </select>
  );
}

export default SelectInput;
