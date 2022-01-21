import React, { Component } from 'react';

import './app1.css'
class AttendanceForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            status: "",
            id: "",
            option: "",
         };
         this.changeNameHandler=this.changeNameHandler.bind(this);
         this.changeIdHandler=this.changeIdHandler.bind(this);
         this.changeOptionHandler=this.changeOptionHandler.bind(this);

    }

    changeNameHandler=(event)=>{
        this.setState({name:event.target.value});

    }
    changeIdHandler=(event)=>{
        this.setState({id:event.target.value});
    }
    changeOptionHandler=(event)=>
    {
        this.setState({option:event.target.value})
    }

    saveStudent=(e)=>{
        e.preventDefault();
        let student={name: this.state.name,id: this.state.id,option: this.state.option};
        console.log('Student=>'+JSON.stringify(student));
    }

    cancel(){
        this.props.history.push();
    }
    render() { 
        return ( 
            <div>
                <div className='container'>
                    <h1 className='text' > Student AttendanceForm </h1>

                    <form className='Attendance-form' onSubmit={this.handleSubmit} >
                        <div className='first'>
                            <input 
                            type="text" 
                            placeholder='Student name' 
                            value={this.state.name} 
                            name='text'
                            onChange={this.changeNameHandler}
                            className='Attendance-Input'/>
                           
                            </div>
                            <br></br>
                            <div className='second'>
                                <input
                                type="text" 
                                placeholder='Enter Reg Id' 
                                value={this.state.id } 
                                name='text'
                                onChange={this.changeIdHandler}
                                className='Attendance-Input'/>
                            </div>
                            <br></br>
                            <div onChange={this.changeOptionHandler} class="third">
                                <input type="radio" value="Present" name="class" /> Present
                                <input type="radio" value="Absent" name="class" /> Absent
                                <input type="radio" value="Late" name="class" /> Late
                            </div>

                            <div>
                                <button className="success" onClick={this.saveStudent}>Submit the details</button>
                                <button className="danger" onClick={this.cancel.bind}> Reset </button> 
                            </div>
                            

            </form>
            </div>
            </div>
            
           

           
         );
    }
}
 
export default AttendanceForm;
