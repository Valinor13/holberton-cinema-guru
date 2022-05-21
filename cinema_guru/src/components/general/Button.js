import './general.css';
import React from 'react';

function Button({ label, className, onClick, icon }) {
  return (
    <button
      style={{ cursor: 'pointer' }}
      className={className}
      onClick={onClick}
    >
      {icon ? icon : null}
      {label}
    </button>
  );
}

export default Button;
