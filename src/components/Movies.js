import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => (
    movies.map(({title, time, genres}) => (
      <Movie
        title={title}
        time={time}
        genres={genres}
      />
    ))
  )

  return (
    <div>
      <React.Fragment>
        <h1>Movies Page</h1>
        {renderMovies()}
  </React.Fragment>
    </div>
  );
};

export default Movies;
