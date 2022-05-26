import React from 'react';
import movieIcon from '../../../assets/movieIcon.png';
import '../dashboard.css';

function MovieCard({ title, info, genres }) {
  let genreList;
  genres ? (genreList = genres) : (genreList = ['\\N']);
  return (
    <div className="movieCard">
      <div
        style={{
          maxWidth: '300px',
          maxHeight: '300px',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${movieIcon})`,
          backgroundSize: 'cover',
        }}
        className="movieCardPoster"
      >
        <div
          style={{
            backgroundColor: '#767676',
          }}
          className="posterOverlay"
        >
          <h2
            style={{
              marginTop: '80%',
              marginBottom: '0',
              color: 'white',
              padding: '5px',
            }}
          >
            {title ? title : 'Move Title'}
          </h2>
        </div>
      </div>
      <p
        style={{
          minHeight: '70px',
          padding: '5px',
          color: 'white',
          width: '100%',
          textAlign: 'left',
          margin: '0',
        }}
      >
        {info ? info : '- Not Available - '}
      </p>
      <div className="genreTags">
        {genreList.map((genre, index) => {
          return (
            <div key={index}>
              <p
                style={{
                  backgroundColor: '#E31C25',
                  borderRadius: '15px',
                  margin: '0',
                  color: 'white',
                  paddingTop: '2px',
                  paddingBottom: '2px',
                  paddingLeft: '8px',
                  paddingRight: '8px',
                }}
              >
                {genre}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieCard;
