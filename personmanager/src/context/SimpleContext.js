// state 1:
// import React from "react";
// state 2:
import React, { createContext } from "react";

// state 1: React.createContext()
// state 2: createContext()

const SimpleContext = createContext({
  state: {},
  handleDeletePerson: () => {},
  handleNameChange: () => {},
  handleNewPerson: () => {},
  setPerson: () => {}
});

export default SimpleContext;

