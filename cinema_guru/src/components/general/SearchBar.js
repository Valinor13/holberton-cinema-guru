import React from 'react';
import './general.css';

function SearchBar({ title, setTitle }) {
  function handleInput(e) {
    setTitle(e.target.value);
  }

  return <input title={title} onChange={handleInput()} />;
}

export default SearchBar;
