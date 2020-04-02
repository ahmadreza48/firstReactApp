import React, { useContext } from 'react';
import Person from './Person';

import SimpleContext from '../../context/SimpleContext';

const Persons = () => {

    const context = useContext(SimpleContext);
    console.log("context in Persons");
    console.log(context);

    return (
        <div>
            {context.persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() => context.handleDeletePerson(person.id)}
                    changed={event => context.handleNameChange(event, person.id)}
                //changedName = { (event) => personChange(event, person.id)}
                //parentheses are optional when there is only one parameter name
                />
            ))}
        </div>
    );
}

export default Persons;