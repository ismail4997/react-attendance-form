import React, { Component } from 'react';

import './app1.css'
import InputId from './inputId/inputId';
import InputOption from './InputOption/InputOption';


import InputStudent from './inputStudent/inputStudent';
class AttendanceForm extends Component 
{
     constructor(props) 
     {
        super(props);
        this.state = 
        { 
            name: "",
            status: "",
            id: "",
            option: "",
        };
    }
    
   
    
    

    // this func saving data into the student array and showing into the console
    saveStudent=(e)=>
    {
        e.preventDefault();
        let student={name: this.state.name,id: this.state.id,option: this.state.option};
        console.log('Student=>'+JSON.stringify(student));
    }

    cancel()
    {
        // adds an entry into the history stack
        this.props.history.push();
    }
    render() 
    { 
        return ( 
            <div>
                <div className='container'>
                    <h1 className='text' > Student AttendanceForm </h1>
                    <form className='Attendance-form' onSubmit={this.handleSubmit} >
                        {/* a separate div for the first input enter student name*/}
                        <InputStudent></InputStudent>
                        <br></br>
                        {/* a separate div for the first input enter student id*/}
                        <InputId></InputId>
                        <br></br>
                        {/* a separate div for the first input enter student presence*/}
                        <InputOption></InputOption>

                        <div>
                            <button className="success" onClick={this.saveStudent}>Submit the details</button> 
                            {/* calling the function for the saving details  */}
                            <button className="danger" onClick={this.cancel.bind}> Reset </button>
                            {/* pushing the data into the history stack   */}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default AttendanceForm;
