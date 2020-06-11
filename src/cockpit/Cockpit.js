import React from 'react';

import classes from './Cockpit.css';

const Cockpit = (props)=>{    
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
            <h1>This is my React App</h1>
            <p className={newStyle}>Hope this works well</p>
            
            {/* <button style ={style} onClick={()=> this.togglePersonDisplay('Archit!!!!')}>Switch Name</button> */}

            <button className={btnStyle} 
                onClick={props.togglePersonDisplay}>Toggle Display
            </button>
        </div>
    );
};

export default Cockpit;