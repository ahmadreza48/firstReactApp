import React, { Component } from "react";
import { Alert, Button, Badge } from "react-bootstrap";

import Persons from "./components/person/Persons";

class App extends Component {
  state = {
    persons: [],
    person: "",
    showPersons: true
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

  handleNewPerson = () => {
    const persons = [...this.state.persons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname: this.state.person
    };
    if (person.fullname !== "" && person.fullname !== " ") {
      persons.push(person);
      this.setState({ persons, person: "" });
    }
  };

  setPerson = event => {
    this.setState({ person: event.target.value });
  };

  render() {
    const { persons, showPersons } = this.state;

    // const styles = {
    //   textAlign: "center"
    // };

    // const buttonStyle = {
    //   padding: "1em",
    //   fontFamiliy: "BYekan",
    //   backgroundColor: "pink"
    // };

    let person = null;

    // let badgeStyle = [];
    // if (persons.length >= 3) badgeStyle.push("badge-success");
    // if (persons.length <= 2) badgeStyle.push("badge-warning");
    // if (persons.length <= 1) badgeStyle.push("badge-danger");

    let badgeStyle = "";
    if (persons.length >= 3) badgeStyle = "success";
    if (persons.length <= 2) badgeStyle = "warning";
    if (persons.length <= 1) badgeStyle = "danger";

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
      <div className="rtl text-center">
        <Alert variant="info">
          <h2>مدیریت کننده اشخاص</h2>
        </Alert>

        {/* <div className="alert alert-info">
          <h2>مدیریت کننده اشخاص</h2>
        </div> */}

        <Alert variant="light">
          .تعداد اشخاص{" "}
          {/* <span className={`badge badge-pill ${badgeStyle.join(" ")}`}>
            {persons.length}
          </span>{" "} */}
          <Badge pill variant={badgeStyle}>
            {persons.length}
          </Badge>
          نفر میباشد
        </Alert>

        <div className="m-2 p-2">
          <form
            className="form-inline justify-content-center"
            onSubmit={event => event.preventDefault()}
          >
            <div className="input-group w-25">
              <input
                type="text"
                placeholder="اسم بهم بده"
                className="form-control"
                onChange={this.setPerson}
                value={this.state.person}
              ></input>
              <div className="input-group-prepend">
                <Button
                  type="submit"
                  // className="btn btn-sm btn-success fa fa-plus-square"
                  variant="success"
                  size="sm"
                  className="fa fa-plus-square"
                  onClick={this.handleNewPerson}
                />
              </div>
            </div>
          </form>
        </div>

        <Button
          onClick={this.handleShowPerson}
          // className={showPersons ? "btn btn-info" : "btn btn-danger"}
          variant={showPersons ? "info" : "danger"}
        >
          نمایش اشخاص
        </Button>
        {person}
      </div>
    );
  }
}

export default App;
