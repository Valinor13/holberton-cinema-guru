import React from 'react';
import './components.css';

function Activity({ username, title, date}) {
  return (
    <li>
      <p>
        <span className="redText">{username} </span>added{' '}
        <span className="redText">{title} </span>to watch later -{' '}
        {date}
      </p>
    </li>
  );
}

export default Activity;
