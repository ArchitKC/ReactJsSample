import React, { Component } from 'react';
import classes from './App.css'; 
 
import Persons from '../components/Persons/Persons'; 
import Cockpit from '../cockpit/Cockpit'
 
class App extends Component {

  state  ={
    persons : [
      {id: '0001', name: 'Archit', age: 34},
      {id: '0002', name: 'Sara', age: 29},
      {id: '0003', name: 'Archit - Sara', age: 53},
      {id: '0004', name: 'Jol', age: 33}      
    ],
    showPerson : true
  }
   
  onTextChange=(event,id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id
    });
 
    const person = {
      ...this.state.persons[personIndex]
    }
  
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
  };

  togglePersonDisplay=()=>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson:!doesShow});
    
  };

  deletePersonHandler=(index)=>{
    const deletePerson = [...this.state.persons];
    deletePerson.splice(index,1); 
    this.setState({persons : deletePerson});
  }

  render() {        
    let togglePerson = null;

    if(this.state.showPerson){      
      togglePerson=
      <div> 
       <Persons
       persons ={this.state.persons}
       click = {this.deletePersonHandler}
       onChange = {this.onTextChange}
       />
      </div>  
    }
 
    return (
      <div className={classes.App}>
         <Cockpit
         title= {this.props.appTitle}
         showPerson = {this.state.showPerson}
         persons ={this.state.persons}
         togglePersonDisplay = {this.togglePersonDisplay}/>
        {togglePerson}  
          
      </div>
    );
  }
}

export default  App;