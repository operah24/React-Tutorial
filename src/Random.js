import React from 'react';
import { randomNumber } from './functions';
import  classes from './InitialName.module.css'
const Random = () => {
    const random = randomNumber(1,20)
  return (
    <div>
          <h1 className = {classes.initial}>Random Number :{ random}</h1>
    </div>
  );
}

export default Random;
