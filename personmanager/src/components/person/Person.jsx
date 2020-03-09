import React from 'react';
import './Person.css';

const person = ({ fullname, deleted, changed}) => {
    return (
        <div className="person">
            <p>{`${fullname}`}</p>
            <input type="text" placeholder={fullname} onChange={changed}></input>
            <button onClick={deleted}>حذف</button>
        </div>);
}

export default person;