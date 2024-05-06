import React, { createContext, useContext, useReducer } from "react";

export const Statecontext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <Statecontext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Statecontext.Provider>
);
export const useStateValue = () => useContext(Statecontext);
