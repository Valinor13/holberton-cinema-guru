import './general.css';
import React from 'react';

function Button({ label, className, onClick, icon }) {
  return (
    <button className={className} onClick={onClick()}>
      {icon}
      {label}
    </button>
  );
}

export default Button;
