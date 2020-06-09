import React, { Component } from 'react';
import classes from './App.css'; 
 
import Persons from './Person/Person'  

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
    console.log(deletePerson);
    this.setState({persons : deletePerson});
  }

  render() {        
    let togglePerson = null;
    let btnStyle ='';

    if(this.state.showPerson){      
      togglePerson=(    
      <div> 
        {this.state.persons.map((eachPerson,index)=>{
          return<Persons
            clickButton = {()=>this.deletePersonHandler(index)}
            name = {eachPerson.name}
            age = {eachPerson.age}
            key ={eachPerson.id}
            onChangeText = {(event)=>this.onTextChange(event, eachPerson.id)}
          ></Persons>
        })} 
      </div>  
      );
      btnStyle = classes.Red;
      // style.backgroundColor = 'red'
      // style[':hover']={
      //   backgroundColor : 'violet',
      //   color : 'black'
      // };

    }

    let newStyle = [classes.text];
    if(this.state.persons.length ===2){
      newStyle.push(classes.bold);
    }
  
    return (
      <div className={classes.App}>
         <p className={newStyle.join(' ')}>Hope this works well</p>
         
        {/* <button style ={style} onClick={()=> this.togglePersonDisplay('Archit!!!!')}>Switch Name</button> */}

        <button className={btnStyle} onClick={this.togglePersonDisplay}>Toggle Display</button>
        {togglePerson}  
          
      </div>
    );
  }
}

export default  App;
