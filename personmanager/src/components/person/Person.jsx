import React from 'react';

const person = ({firstname, lastname}) => {
    return ( <div>
        <p>{`${firstname} ${lastname}`}</p>
    </div> );
}
 
export default person;