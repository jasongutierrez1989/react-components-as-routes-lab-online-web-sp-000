import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <React.Fragment>
        <h1>Directors Page</h1>
        {directors.map(d => <h1 key={d.name}></h1> name={d.name} movies={d.movies}/>)}
    </React.Fragment>
    </div>
  );
}

export default Directors
