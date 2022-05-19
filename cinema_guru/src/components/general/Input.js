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
  return (
    <label>
        {inputAttributes ? inputAttributes : null}
        {icon ? icon : null}
        {label}
      <input
        type={type}
        className={className}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}

export default Input;
