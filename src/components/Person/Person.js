import React, { useState } from 'react';

export const Person = props => {
  const [state, setState] = useState('new state');

  const handleNewState = () => {
    console.log('new state called');
    setState('ddd');
  };

  return (
    <div>
      this is Person component
      <p>person name is {props.name}</p>
      <p>person name is {state}</p>
      <button onClick={handleNewState}> setNewState</button>
    </div>
  );
};
