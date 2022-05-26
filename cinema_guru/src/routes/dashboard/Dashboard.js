import React, { useState } from 'react';
import MovieCard from './homepage/MovieCard';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { NavigationContext } from '../../components/providers/NavigationProvider';
import SearchBar from '../../components/general/SearchBar';

function Dashboard() {
  const [title, setTitle] = useState('');
  const { setSidebarExpanded } = React.useContext(NavigationContext);
  const allGenreTags = [
    'Action',
    'Drama',
    'Comedy',
    ' Biography',
    'Romance',
    'Thriller',
    'War',
    'History',
    'Sport',
    'Sci-Fi',
    'Documentary',
    'Crime',
    'Fantasy',
  ];
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

  function handleColorChange(e) {
    console.log(e.target.style.backgroundColor);
    e.target.style.backgroundColor === 'rgb(227, 28, 37)' ? e.target.style.backgroundColor = 'transparent' : e.target.style.backgroundColor = '#E31C25';
  }

  return (
    <div className="dashboard">
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <div
          style={{ width: '100%' }}
          onClick={() => setSidebarExpanded(false)}
        >
          <div className="dashboardHeaderBase">
            <div
              style={{
                marginTop: '50px',
                marginBottom: '50px',
                marginLeft: '50px',
              }}
            >
              <SearchBar title={title} setTitle={setTitle} />
            </div>
            <div className="allGenreTags">
              {allGenreTags.map((tag, index) => (
                <p
                  key={index}
                  onClick={(e) => handleColorChange(e)}
                  style={{
                    border: '1px solid #e31c25',
                    borderRadius: '15px',
                    margin: '0',
                    color: 'white',
                    paddingTop: '2px',
                    paddingBottom: '2px',
                    paddingLeft: '8px',
                    paddingRight: '8px',
                    height: '22px',
                    cursor: 'pointer'
                  }}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
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

export default Dashboard;
