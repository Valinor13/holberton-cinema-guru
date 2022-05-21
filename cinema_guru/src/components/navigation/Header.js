import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './navigation.css';

function Header() {
  const { setIsLoggedIn, usernameValue } = useContext(UserContext);

  return (
    <div className="headerDiv">
      <div className="headerTitle">
        <h4>Cinema Guru</h4>
      </div>
      <div className="headerMenu">
        <div className="avatar">
          <img
            style={{
              height: '45px',
              border: '3px solid #BB000E',
              borderRadius: '50px',
            }}
            src={'https://picsum.photos/100/100'}
            alt="avatar"
          />
        </div>
        <p>{`Welcome, ${usernameValue}!`}</p>
        <p
          style={{ cursor: 'pointer', color: '#BB000E' }}
          onClick={() => setIsLoggedIn(false)}
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
        </p>
      </div>
    </div>
  );
}

export default Header;
