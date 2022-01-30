import React, { Component } from 'react';
import './inputStudent.css'
class InputStudent extends Component {
    constructor(props) 
    {
        super(props);
        this.state=
        {
            name: ""

        };
         // we are using this function in this constructor so we can callback this function 
        // without the fear that it will lose its context
        this.changeNameHandler=this.changeNameHandler.bind(this);
    }
    // these functions save the data into the their respective ids 
    changeNameHandler=(event)=>
    {
        this.setState({name:event.target.value});

    }
    
    render() { 
        return (

            <div className='first'>
                <input
                type="text" 
                placeholder='Student name' 
                value={this.state.name} 
                name='text'
                onChange={this.changeNameHandler} //handling name into this when the data is entered
                className='Attendance-Input'/>
            </div>
          );
    }
}
 
export default InputStudent;

