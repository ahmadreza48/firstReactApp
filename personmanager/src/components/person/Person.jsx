import React from 'react';

const person = ({ firstname, lastname, deleted }) => {
    return (
        <div onClick={deleted} style={{ cursor: 'pointer' }}>
            <p>{`${firstname} ${lastname}`}</p>
        </div>);
}

export default person;