import React from 'react';
import './components.css';

function Activity() {
  return (
    <li>
      <p>
        <span className="redText">{'API Name'} </span>added{' '}
        <span className="redText">{'API Movie Title'} </span>to watch later -{' '}
        {'date'}
      </p>
    </li>
  );
}

export default Activity;
