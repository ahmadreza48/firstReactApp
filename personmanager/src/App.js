import React, { Component } from "react";
import Persons from "./components/person/Persons";

class App extends Component {
  state = {
    persons: [],
    person: '',
    showPersons: false
  };

  handleShowPerson = () => {
    this.setState({ showPersons: !this.state.showPersons });
    // console.log(this.state.showPersons);
  };

  handleDeletePerson = id => {
    const persons = [...this.state.persons];
    const filteredPersons = persons.filter(p => p.id !== id);
    this.setState({ persons: filteredPersons });
  };

  handleNameChange = (event, id) => {
    const { persons: allPersons } = this.state;

    const personIndex = allPersons.findIndex(p => p.id === id);
    const person = allPersons[personIndex];
    person.fullname = event.target.value;
    console.log(event.target);

    const persons = [...allPersons];
    persons[personIndex] = person;
    allPersons[personIndex] = person;
    this.setState({ persons });
    //this.setState({persons: allPersons});
    //if key and value are not same
  };

  handleNewPerson= () => {
    const persons = [...this.state.persons];
    const person = {
      id : Math.floor(Math.random()*1000),
      fullname : this.state.person
    }
    persons.push(person);
    this.setState({persons, person: ""});
  };

  setPerson = event => {
    this.setState({person: event.target.value});
  }

  render() {
    const { persons, showPersons } = this.state;

    const styles = {
      textAlign: "center"
    };

    const buttonStyle = {
      padding: "1em",
      fontFamiliy: "BYekan",
      backgroundColor: "pink"
    };

    let person = null;

    if (showPersons) {
      person = (
        <Persons
          persons={persons}
          personDelete={this.handleDeletePerson}
          personChange={this.handleNameChange}
        />
      );
    }

    return (
      // <div style={{textAlign: 'center'}}>
      <div style={styles}>
        <h2>مدیریت کننده اشخاص</h2>
        <h4>.تعداد اشخاص {persons.length} نفر میباشد</h4>

        <div>
          <input
            type="text"
            placeholder="ساخت شخص جدید"
            style={{ direction: "rtl" }}
            onChange={this.setPerson}
            value={this.state.person}
          ></input>
          <button onClick={this.handleNewPerson}>اضافه کن</button>
        </div>

        <button onClick={this.handleShowPerson} className="btn btn-sm btn-success fa fa-plus-square">
        </button>
        {person}
      </div>
    );
  }
}

export default App;
