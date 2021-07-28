import React from 'react';
import { fullName } from './functions';
import classes from './InitialName.module.css'
const InitialName = () => {
    const name = fullName("Opeyemi Bantale")
    return (
      
    <div>
          <h1 className={classes.initial}>Initial Name:{name}</h1>
    </div>
  );
}

export default InitialName;
