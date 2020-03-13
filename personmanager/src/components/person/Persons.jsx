import React from 'react';
import Person from './Person';

const Persons = ({ persons, personDelete, personChange }) => {
    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() => personDelete(person.id)}
                    changed={event => personChange(event, person.id)}
                //changedName = { (event) => personChange(event, person.id)}
                //parentheses are optional when there is only one parameter name
                />
            ))}
        </div>
    );
}

export default Persons;