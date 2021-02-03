import React, {createContext, useReducer} from 'react';
import { createUseStyles } from 'react-jss';
import SaladBuilder from '../SaladBuilder/SaladBuilder'; 
import SaladSummary from '../SaladSummary/SaladSummary';  

export const SaladContext = createContext();

function reducer(state, item) {
  return [...state, item]
}

const useStyles = createUseStyles({
  wrapper: {
    textAlign: 'center',
  }
});

export default function SaladMaker() {
  const [salad, setSalad] = useReducer(reducer, []);
  const classes = useStyles();
  return(
    <>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="salad">🥗 </span>
          Build Your Custom Salad!
          <span role="img" aria-label="salad"> 🥗</span>
      </h1>
      <SaladContext.Provider value={{salad, setSalad}}>
      <SaladBuilder/>
      <SaladSummary/>
      </SaladContext.Provider>
    </>
  )
}