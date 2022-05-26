import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import { NavigationContext } from '../providers/NavigationProvider';
import { UserContext } from '../providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import Activity from '../Activity';
import './navigation.css';

function SideBar() {
  const { navPage, setNavPage, sidebarExpanded, setSidebarExpanded } =
    useContext(NavigationContext);
  const { usernameValue } = useContext(UserContext);
  const navigate = useNavigate();
  const pageList = ['/', '/favorites', '/watchLater'];
  const iconList = [faFolder, faStar, faClock];
  const fakeList = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];

  function handleNavigate(page) {
    setNavPage(page);
    navigate(page)
  }

  return sidebarExpanded ? (
    <>
      <div className="sidebarExpanded">
        <div className="expandedIcons">
          {pageList.map((page, index) =>
            page === navPage ? (
              <div className="activePage ghostIcon" key={index}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '0',
                    marginLeft: '16px',
                  }}
                  className={`sidebarIcon icon${index}`}
                >
                  <FontAwesomeIcon
                    style={{ paddingRight: '15px' }}
                    icon={iconList[index]}
                  />
                  {page === '/'
                    ? 'Home'
                    : page.charAt(1).toUpperCase() + page.slice(2)}
                </div>
              </div>
            ) : (
              <div className="ghostIcon" key={index}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '0',
                    marginLeft: '16px',
                  }}
                  onClick={() => handleNavigate(page)}
                  className={`sidebarIcon icon${index}`}
                >
                  <FontAwesomeIcon
                    style={{ paddingRight: '15px' }}
                    icon={iconList[index]}
                  />{' '}
                  {page === '/'
                    ? 'Home'
                    : page.charAt(1).toUpperCase() + page.slice(2)}
                </div>
              </div>
            )
          )}
        </div>
        <div className="latestActivities">
          <h2
            style={{
              borderBottom: '3px solid white',
              width: '198px',
              margin: 'auto',
            }}
          >
            Latest Activities
          </h2>
          <ul>
            {fakeList.map((item) => (
              <Activity
                username={usernameValue}
                title="Fake Movie Title"
                date={'5/20/2022'}
                key={item}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  ) : (
    <div className="sidebarNarrow">
      {pageList.map((page, index) =>
        page === navPage ? (
          <div className="activePage ghostIcon" key={index}>
            <div
              onClick={() => setSidebarExpanded(true)}
              className={`sidebarIcon icon${index}`}
            >
              <FontAwesomeIcon icon={iconList[index]} />
            </div>
          </div>
        ) : (
          <div className="ghostIcon" key={index}>
            <div
              onClick={() => handleNavigate(page)}
              className={`sidebarIcon icon${index}`}
            >
              <FontAwesomeIcon icon={iconList[index]} />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default SideBar;
