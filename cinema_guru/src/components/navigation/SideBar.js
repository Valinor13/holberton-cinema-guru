import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import { NavigationContext } from '../providers/NavigationProvider';
import './navigation.css';

function SideBar() {
  const { navPage, setNavPage } = useContext(NavigationContext);
  const pageList = ['home', 'favorites', 'watchLater'];
  const iconList = [faFolder, faStar, faClock];

  return (
    <div className="sidebar">
      {pageList.map((page, index) =>
        page === navPage ? (
          <div className="activePage ghostIcon" key={index}>
            <div className={`sidebarIcon icon${index}`}>
              <FontAwesomeIcon icon={iconList[index]} />
            </div>
          </div>
        ) : (
          <div className="ghostIcon" key={index}>
            <div onClick={() => setNavPage(page)} className={`sidebarIcon icon${index}`}>
              <FontAwesomeIcon icon={iconList[index]} />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default SideBar;
