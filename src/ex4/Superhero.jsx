/* eslint-disable react/prop-types */
import React from 'react';

const Superhero = (props) => {
  const { name, alias } = props;
  return (
    <h1>
      {name}
      {' '}
      is
      {' '}
      {alias}
    </h1>
  );
};

export default Superhero;
