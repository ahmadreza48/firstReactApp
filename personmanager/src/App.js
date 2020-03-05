import React, { Component } from "react";
import Persons from "./components/person/Persons";

class App extends Component {
  state = {
    persons: [
      { firstname: "یونس", lastname: "قربانی" },
      { firstname: "ایمان", lastname: "مدائنی" },
      { firstname: "سجاد", lastname: "باقرزاده" }
    ],
    showPersons: false
  };

  handleShowPerson = () => {
    this.setState({ showPersons: !this.state.showPersons });
    // console.log(this.state.showPersons);
  };

  render() {
    const { persons, showPersons} = this.state;

    const styles = {
      textAlign: "center"
    };

    const buttonStyle={
        padding: "1em",
        fontFamiliy: "BYekan",
        backgroundColor: "pink"
    };

    let person = null;

    if (showPersons) {
        person = <Persons persons={persons} />;
    };

    return (
      // <div style={{textAlign: 'center'}}>
      <div style={styles}>
        <h2>مدیریت کننده اشخاص</h2>
        <h4>.تعداد اشخاص {persons.length} نفر میباشد</h4>
        {person}
        <button onClick={this.handleShowPerson} style={buttonStyle}> نمایش اشخاص</button>
      </div>
    );
  }
}

export default App;
