// state 1:
// import React from "react";
// state 2:
import { createContext } from "react";
import Persons from "../components/person/Persons";

// state 1: React.createContext()
// state 2: createContext()

const SimpleContext = createContext({
  // state: {},
  persons: [],
  person: "",
  handleDeletePerson: () => {},
  handleNameChange: () => {},
  handleNewPerson: () => {},
  setPerson: () => {}
});

export default SimpleContext;
