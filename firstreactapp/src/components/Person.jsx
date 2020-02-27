// import React, { Component } from 'react';

// class Person extends Component {
//     state = {  }
//     render() { 
//         return (<p>ahmadreza saeidi</p>);
//     }
// }

// export default Person;


import React from 'react';

const Person = ({ firstname, lastname, age }) => {
    return (
        <div>
            <p>{`${firstname} ${lastname}`}</p>
            <hr />
            {/* <p>Age: {Math.floor(Math.random() * 30)}</p> */}
            <p>{`${age}`}</p>
        </div>
    )
}

export default Person;