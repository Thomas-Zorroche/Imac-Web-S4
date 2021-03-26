import React, { useEffect, useState } from 'react';
import './ex4.css';
import Superhero from './Superhero';

// eslint-disable-next-line import/prefer-default-export
function ExerciseFourView() {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  return (
    superheroes.filter((hero) => hero.id <= 3).map((hero) => (
      <Superhero
        name={hero.name}
        alias={hero.biography.aliases[0]}
      />
    ))
  );
}

export default ExerciseFourView;
