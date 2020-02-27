// import React, { Component } from 'react';
import React from "react";

import Person from "./components/Person";
import "./App.css";

// class App extends React.Component {
//   // constructor() {
//   //   super();
//   // }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World!</h1>
//         <hr/>
//         <Person/>
//       </div>
//     );
//   }
// }

// export default App;

const App = () => {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <hr />
      <Person firstname="ahmad" lastname="saeidi" age="24"/>
    </div>
  );
};

export default App;
