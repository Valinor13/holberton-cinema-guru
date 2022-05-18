import './general.css';
import React from 'react';

function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes,
}) {
  // function handleInput(e) {
  //   setValue(e.target.value);
  // }
  return (
    <label>
        {inputAttributes ? inputAttributes : null}
        {icon ? icon : null}
        {label}
      <input
        type={type}
        className={className}
        value={value}
        // onChange={handleInput()}
      />
    </label>
  );
}

export default Input;
