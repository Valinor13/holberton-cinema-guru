import React from 'react';
import './general.css';

function SearchBar({ title, setTitle }) {
  function handleInput(e) {
    setTitle(e.target.value);
  }

  return (
    <input
      style={{
        padding: '5px',
        borderRadius: '15px',
        width: '535px',
        backgroundColor: '#2c2c2c',
      }}
      placeholder="Search Movies"
      title={title}
      onChange={handleInput}
    />
  );
}

export default SearchBar;
