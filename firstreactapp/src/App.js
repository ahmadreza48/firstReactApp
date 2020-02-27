import React, { Component } from "react";
// import React from "react";

import Person from "./components/Person";
import "./App.css";

class App extends React.Component {
  // constructor() {
  //   super();
  // }

  constructor() {
    super();

    // this.handlePersonChange = this.handlePersonChange.bind(this);

    // this.state = {
    //   persons: [
    //     { firstname: "ahmad", lastname: "saeidi", age: "24" },
    //     { firstname: "leila", lastname: "saeidi", age: "31" },
    //     { firstname: "sadegh", lastname: "mahmoodian", age: "39" }
    //   ]
    // };
  }

  state = {
      persons: [
        { firstname: "ahmad", lastname: "saeidi", age: "24" },
        { firstname: "leila", lastname: "saeidi", age: "31" },
        { firstname: "sadegh", lastname: "mahmoodian", age: "39" }
      ]
    };

  handlePersonChange = () => {
    this.setState({
      persons: [
        { firstname: "peter", lastname: "saeidi", age: "24" },
        { firstname: "john", lastname: "saeidi", age: "31" },
        { firstname: "adam", lastname: "mahmoodian", age: "39" }
      ]
    });
  };

  render() {
    const { persons } = this.state;
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <hr />
        {/* <Person firstname="ahmad" lastname="saeidi" age="24" /> */}

        {persons.map(person => (
          <Person
            firstname={person.firstname}
            lastname={person.lastname}
            age={person.age}
          >
            topLearn
          </Person>
        ))}

        <hr />
        <button onClick={this.handlePersonChange}>change firstName</button>
      </div>
    );
  }
}

export default App;

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <hr />
//       <Person firstname="ahmad" lastname="saeidi" age="24"/>
//     </div>
//   );
// };

// export default App;
