import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <React.Fragment>
       <h1>Actors Page</h1>
       {actors.map(a => <Actor key={a.name} name={a.name} movies={a.movies} />)}
   </React.Fragment>
    </div>
  );
};

export default Actors;
