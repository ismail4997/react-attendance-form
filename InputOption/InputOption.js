import React, { Component } from 'react';

import './InputOption.css'
class InputOption extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
            option: "",

        }
         // we are using this function in this constructor so we can callback this function 
        // without the fear that it will lose its context
        this.changeOptionHandler=this.changeOptionHandler.bind(this);
    }
    // these functions save the data into the their respective ids 
    changeOptionHandler=(event)=>
    {
        this.setState({option:event.target.value})
    }
    
    render() { 
        return ( 
        <div onChange={this.changeOptionHandler} class="third">  
        {/* giving the handler function to control the context for the option id  */}
        <input type="radio" value="Present" name="class" /> <span>Present </span>
        <input type="radio" value="Absent" name="class" /><span>Absent </span>
        <input type="radio" value="Late" name="class" /> <span>Late </span>
        </div>
         );
    }
}
 
export default InputOption;