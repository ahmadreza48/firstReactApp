import React from 'react';

const person = ({firstname, lastname, age}) => {
    return ( <div>
        <p>{`${firstname} ${lastname} ${age} سال دارم`}</p>
    </div> );
}
 
export default person;