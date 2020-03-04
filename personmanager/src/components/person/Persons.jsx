import React from 'react';
import Person from './Person';

const persons = ({persons}) => {
    return ( 
    <div>  
        {persons.map(person => (
                <Person
                firstname={person.firstname}
                lastname={person.lastname}
                age={person.age}
                />
            ))}
    </div> 
    );
}
 
export default persons;