import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//reducer helps to take the different actions
//initialState is all the variables
//children are all the components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
