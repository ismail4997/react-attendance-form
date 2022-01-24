import React, { Component } from 'react';

import './app1.css'
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
        // we are using this function in this constructor so we can callback this function 
        // without the fear that it will lose its context
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeIdHandler=this.changeIdHandler.bind(this);
        this.changeOptionHandler=this.changeOptionHandler.bind(this);

    }
    // these functions save the data into the their respective ids 
    changeNameHandler=(event)=>
    {
        this.setState({name:event.target.value});

    }
    changeIdHandler=(event)=>
    {
        this.setState({id:event.target.value});
    }
    changeOptionHandler=(event)=>
    {
        this.setState({option:event.target.value})
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
                        <div className='first'> 
                            <input
                            type="text" 
                            placeholder='Student name' 
                            value={this.state.name} 
                            name='text'
                            onChange={this.changeNameHandler} //handling name into this when the data is entered
                            className='Attendance-Input'/>
                           
                        </div>
                        <br></br>
                        {/* a separate div for the first input enter student id*/}
                        <div className='second'>
                            <input
                            type="text" 
                            placeholder='Enter Reg Id' 
                            value={this.state.id } 
                            name='text'
                            onChange={this.changeIdHandler} //handling id into this when the data is entered
                            className='Attendance-Input'/>
                        </div>

                        <br></br>
                        {/* a separate div for the first input enter student presence*/}
                        <div onChange={this.changeOptionHandler} class="third">  
                        {/* giving the handler function to control the context for the option id  */}
                            <input type="radio" value="Present" name="class" /> Present
                            <input type="radio" value="Absent" name="class" /> Absent
                            <input type="radio" value="Late" name="class" /> Late
                        </div>

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
