import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Radium from "radium";
import { ToastContainer, toast } from "react-toastify";

import Persons from "./components/person/Persons";
import Header from "./components/common/Header";
import SimpleContext from "./context/SimpleContext";
import NewPerson from "./components/person/NewPerson";

const App = () => {
  // state = {
  //   persons: [],
  //   person: "",
  //   showPersons: true,
  //   appTitle: "مدیریت کننده اشخاص"
  // };

  // const personState = useState({ persons: [] });
  // const getPersons = personState[0];
  // const setPersons = personState[1];
  const [getPersons, setPersons] = useState([]);
  const [getSinglePerson, setSinglePerson] = useState("");
  const [getShowPersons, setShowPersons] = useState(true);

  const handleShowPerson = () => {
    setShowPersons(!getShowPersons);
    // console.log(this.state.showPersons);
  };

  const handleDeletePerson = (id) => {
    const persons = [...getPersons];
    const filteredPersons = persons.filter((p) => p.id !== id);
    setPersons(filteredPersons);

    const personIndex = persons.findIndex((p) => p.id === id);
    const person = persons[personIndex];

    toast.error(`${person.fullname} با موفقیت حذف شد`, {
      position: "top-right",
      closeOnClick: true,
    });
  };

  const handleNameChange = (event, id) => {
    const { persons: allPersons } = getPersons;

    const personIndex = allPersons.findIndex((p) => p.id === id);
    const person = allPersons[personIndex];
    person.fullname = event.target.value;
    console.log(event.target);

    const persons = [...allPersons];
    persons[personIndex] = person;
    allPersons[personIndex] = person;
    setPersons(persons);
    //this.setState({persons: allPersons});
    //if key and value are not same
  };

  const handleNewPerson = () => {
    const persons = [...getPersons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname: getSinglePerson,
    };
    if (person.fullname !== "" && person.fullname !== " ") {
      persons.push(person);
      setPersons(persons);
      setSinglePerson("");
      // this.setState({ persons, person: "" });

      toast.success("شخص با موفقیت اضافه شد.", {
        position: "bottom-right",
        closeButton: true,
        closeOnClick: true,
      });
    }
  };

  const setPerson = (event) => {
    setSinglePerson(event.target.value);
  };

  // const { persons, showPersons } = this.state;

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

  // badge style

  // const btnStyle = { ":hover": { color: "red", backgroundColor: "black" } };
  // if
  // btnStyle[":hover"] = { color: "red", backgroundColor: "black" };

  if (getShowPersons) {
    person = (
      <Persons
      // persons={persons}
      // personDelete={this.handleDeletePerson}
      // personChange={this.handleNameChange}
      />
    );
  }

  return (
    <SimpleContext.Provider
      value={{
        // state: this.state,
        persons: getPersons,
        person: getSinglePerson,
        handleDeletePerson: handleDeletePerson,
        handleNameChange: handleNameChange,
        handleNewPerson: handleNewPerson,
        setPerson: setPerson,
      }}
    >
      {/* <div style={{textAlign: 'center'}}> */}
      <div className="rtl text-center">
        <Header
          appTitle="مدیریت کننده اشخاص"
          // personsLenght={persons.length}
          // appTitle={this.state.appTitle}
        />
        <NewPerson />
        {/* <Button
          onClick={handleShowPerson}
          // className={showPersons ? "btn btn-info" : "btn btn-danger"}
          variant={getShowPersons ? "info" : "danger"}
        >
           نمایش اشخاص
        </Button>
         */}
        <button
          onClick={handleShowPerson}
          style={{ ":hover": { color: "red", backgroundColor: "black" } }}
        >
          نمایش اشخاص
        </button>
        {person}
        <ToastContainer />
      </div>
    </SimpleContext.Provider>
  );
};

export default Radium(App);
