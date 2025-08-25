import React, {useState} from 'react'

// Functional Component
function Student_Registration() { 
    // Creating state variables
    const [student, setStudent] = useState({stdname:" ",standard:" ",age:0})

    // Function to change the state variables
    function update_Data(event) {
        // Destructing the field name and value of element from which event has triggerd.
        const {name, value} = event.target
        //Calling the state function
        setStudent((prevData) => ({
            //Keeping other fields unchanged
            ...prevData,
            //updating the corresponding property of state variable
            [name]:value
        }) )

    }
    // ---------------------------------------------------------------------------------
    // Creating a function to handle the event of form submission the submit button
    function handle_Submit(event){
        // Preventing the default forms submission
        event.preventDefault();
    }
 //--------------------------------------------------------------------------------------
    return (
        <div> 
            <h2> Student Registartion</h2> 
            <form onSubmit={handle_Submit}>
                Student Name: 
                <input type= "text" name='stdname' value={student.stdname} onChange={update_Data} placeholder="Enter Student Name" />
                <br /><br />
                Standard: 
                <input type= "text" name='standard' value={student.standard} onChange={update_Data} placeholder="Enter Student Standard" />
                <br /><br />
                Age: 
                <input type= "text" name='age' value={student.age} onChange={update_Data} placeholder="Enter Student Age" />
                <br /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
        )
    
}
export default Student_Registration;