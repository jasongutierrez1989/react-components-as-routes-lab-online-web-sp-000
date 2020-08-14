import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => (
    movies.map((d) => <h1 key={d.title}></h1>{d.title}{d.time}{d.genres}{d.metascore};
    })
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
