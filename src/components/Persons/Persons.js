import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component{
   render(){
      return (this.props.persons.map((eachPerson, index) => {
        return (
          <Person 
            name={eachPerson.name}
            age={eachPerson.age}
            key={eachPerson.id} 
            clickButton = {()=>this.props.click(index)}
            onChangeText = {(event)=>this.props.onChange(event, eachPerson.id)}
          />
        );
      }))  
  };
};

 

export default Persons;
