import React, { Component } from 'react'; 
import PropType from 'prop-types'
import personClasses from'./Person.css';

//CLASS COMPONENT
class Person extends  Component {

    constructor(props){
        super();
        this.inputCElement = React.createRef();

    }

    componentDidMount(){
        //this.inputE.focus();
        this.inputCElement.current.focus();
    }
    render(){
        return(
            <div className={personClasses.Person}>
                <p onClick={this.props.clickButton}> 
                    I'm {this.props.name} and I'm {this.props.age} years old!
                </p>                
                <input 
                    type='text' 
                    //ref={(inputElement)=>{this.inputE=inputElement}}
                    ref={this.inputCElement}
                    onChange={this.props.onChangeText}
                ></input>
            </div>
        );
    };
};


//FUNCTIONAL COMPONENT
// const Person = (props)=>{
//     return(
//         <WithClass classes={personClasses.Person}>
//             <p onClick={props.clickButton}> 
//                 I'm {props.name} and I'm {props.age} years old!
//             </p>
//             <input type='text' onChange={props.onChangeText}></input>
//         </WithClass>
//     );
// };

Person.PropType ={
    clickButton : PropType.func,
    name : PropType.string,
    age: PropType.number
}

export default Person;