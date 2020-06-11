import React from 'react';

import personClasses from'./Person.css';

const person =(props) => {
 
    return ( 
        <div className={personClasses.Person}>
            <p onClick={props.clickButton}> 
                I'm {props.name} and I'm {props.age} years old!
            </p>
            <input type='text' onChange={props.onChangeText}></input>
        </div>
    )

};

export default person;