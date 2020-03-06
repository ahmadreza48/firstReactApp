import React, { Component } from "react";
import Persons from "./components/person/Persons";

class App extends Component {
  state = {
    persons: [
      { id: 1, firstname: "یونس", lastname: "قربانی" },
      { id: 2, firstname: "ایمان", lastname: "مدائنی" },
      { id: 3, firstname: "سجاد", lastname: "باقرزاده" }
    ],
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
        <Persons persons={persons} personDelete={this.handleDeletePerson} />
      );
    }

    return (
      // <div style={{textAlign: 'center'}}>
      <div style={styles}>
        <h2>مدیریت کننده اشخاص</h2>
        <h4>.تعداد اشخاص {persons.length} نفر میباشد</h4>
        {person}
        <button onClick={this.handleShowPerson} style={buttonStyle}>
          {" "}
          نمایش اشخاص
        </button>
      </div>
    );
  }
}

export default App;
