import React from 'react';
import Person from './Person';

import SimpleContext from '../../context/SimpleContext';

const Persons = () => {
    return (
        <SimpleContext.Consumer>
            {context => (
                <div>
                    {context.state.persons.map(person => (
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
            )}
        </SimpleContext.Consumer>
    );
}

export default Persons;