import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((eachPerson, index) => {
    return (
      <Person 
        name={eachPerson.name}
        age={eachPerson.age}
        key={eachPerson.id} 
        clickButton = {()=>props.click(index)}
        onChangeText = {(event)=>props.onChange(event, eachPerson.id)}
      />
    );
  });

export default persons;
