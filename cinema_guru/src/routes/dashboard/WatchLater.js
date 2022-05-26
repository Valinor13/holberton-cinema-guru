import React from 'react';
import MovieCard from './homepage/MovieCard';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { NavigationContext } from '../../components/providers/NavigationProvider';

function WatchLater() {
  const { setSidebarExpanded } = React.useContext(NavigationContext);
  const movieCardList = [
    'title1',
    'title2',
    'title3',
    'title4',
    'title5',
    'title6',
    'title7',
    'title8',
  ];
  return (
    <div className="dashboard">
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <div
          style={{ width: '100%' }}
          onClick={() => setSidebarExpanded(false)}
          className="dashboardContent"
        >
          <strong className="dashboardHeader">MOVIES TO WATCH LATER</strong>
          <div className="dashboardContainer">
            {movieCardList.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  title={movie}
                  genres={['Dramedy', 'Horror']}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchLater;
