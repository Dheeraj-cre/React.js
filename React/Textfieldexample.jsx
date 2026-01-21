import React,{useState} from 'react'

// creating a funtional component to use a state variable in a text field element. 

function Textfieldexample(){
	// creating a state variable for text field.
	const [studentname,setStudentname]=useState('');
    // defining a function
    function displayName(event){
    	// updating the state variable with new value of textfield.

    	setStudentname(event.target.value) // event is the object where as target provide the information from which event has been fired




    }

	return(
		<div>
			<h2>
				Text field Example
			</h2>
			<p>Student Name:<input type="text" name="stdname" value={studentname} onChange={displayName} placeholder="Enter name of student" /></p>
            <p>Student Name:<input type="text" name="stdname" value={studentname} onChange={displayName} placeholder="Enter subject of student" /></p>
            

            <p>Name of Student:{studentname}</p> 
		</div>


		)

}



export default Textfieldexample;


// event → Object automatically passed when user types

// event.target → The input element

// event.target.value → Current text inside input field
