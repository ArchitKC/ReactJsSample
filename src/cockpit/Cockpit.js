import React,{useEffect} from 'react';

import classes from './Cockpit.css';


const Cockpit = (props)=>{    
    useEffect(()=>{
        console.log('Use Effect [Cockpit.js]')

        setTimeout(()=>{
            console.log('It is been called');
        },1000);

        return()=>{
            console.log('Clean up Component  [Cockpit.js]');
        };
    },[]);


    useEffect(()=>{
        console.log('2nd session for UseEffect [Cockpit.js]');
        return()=>{
            console.log('2nd clean up initiated [Cockpit.js]');
        }
    });
    let btnStyle ='';
    let newStyle = ['']; 
    if(props.showPerson){        
      btnStyle = classes.Red; 
    }    
    if(props.persons.length ===2){
        newStyle = [classes.text,classes.bold].join(' ');
    }else{    
        newStyle = [classes.sampleText];
    }
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={newStyle}>Hope this works well</p>
            
            {/* <button style ={style} onClick={()=> this.togglePersonDisplay('Archit!!!!')}>Switch Name</button> */}

            <button className={btnStyle} 
                onClick={props.togglePersonDisplay}>Toggle Display
            </button>
        </div>
    );
};

export default Cockpit;