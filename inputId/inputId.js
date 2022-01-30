import React, { Component } from 'react';

import './InputId.css'
class InputId extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
            id: "",

        }
         // we are using this function in this constructor so we can callback this function 
        // without the fear that it will lose its context
        this.changeIdHandler=this.changeIdHandler.bind(this);
    }
    // these functions save the data into the their respective ids 
    changeIdHandler=(event)=>
    {
        this.setState({id:event.target.value});
    }
    
    render() { 
        return ( 
            <div className='second'>
                <input
                type="text" 
                placeholder='Enter Reg Id' 
                value={this.state.id } 
                name='text'
                onChange={this.changeIdHandler} //handling id into this when the data is entered
                className='Attendance-Input'/>
            </div>

         );
    }
}
 
export default InputId;