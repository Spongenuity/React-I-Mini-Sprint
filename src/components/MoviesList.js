import React from 'react';

const MoviesList = ({movies}) => {
  return (
    <div>
      {movies.map((movie,i) => {
        return (
          <div key={i}>{movie}</div>
        );
        
      })
      }
    </div>
  );
};

export default MoviesList;