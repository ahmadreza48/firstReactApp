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
    this.state = {
      persons: [
        { firstname: "ahmad", lastname: "saeidi", age: "24" },
        { firstname: "leila", lastname: "saeidi", age: "31" },
        { firstname: "sadegh", lastname: "mahmoodian", age: "39" }
      ]
    };
  }
  render() {
    const {persons} = this.state;
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <hr />
        {/* <Person firstname="ahmad" lastname="saeidi" age="24" /> */}
        {/* <Person
        firstname={this.state.persons[0].firstname}
        lastname={this.state.persons[0].lastname}
        age={this.state.persons[0].age}
        />

        <Person
        firstname={this.state.persons[1].firstname}
        lastname={this.state.persons[1].lastname}
        age={this.state.persons[1].age}
        />

        <Person
        firstname={this.state.persons[2].firstname}
        lastname={this.state.persons[2].lastname}
        age={this.state.persons[2].age}
        /> */}
        {
          persons.map(person => (
            <Person 
            firstname={person.firstname}
            lastname={person.lastname}
            age={person.age}
            />
          ))
        }
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
