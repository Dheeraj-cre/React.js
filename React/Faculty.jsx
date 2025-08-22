import React,{useState} from 'react'

function Faculty(){
    // creating a state variable for text field.
    const [facultyname,setFacultyname]=useState('');
    const [facultyAge,setfacultyAge]=useState('');
    const [facultyqualification,setfacultyqualification]=useState('');
    // defining a function
    function displayName(event){
        // updating the state variable with new value of textfield.

        setFacultyname(event.target.value) // event is the object where as target provide the information from which event has been fired




    }
     function displayage(event){
        // updating the state variable with new value of textfield.

        setfacultyAge(event.target.value) // event is the object where as target provide the information from which event has been fired





    }
         function displayQualification(event){
        // updating the state variable with new value of textfield.

        setfacultyqualification(event.target.value) // event is the object where as target provide the information from which event has been fired




    }

    return(
        <div>
            <h2>
                Text field Example
            </h2>
           <p>Student Name:<input type="text" name="stdname" value={facultyname} onChange={displayName} placeholder="Enter name of student" /></p>
 
  <p>Student Name:<input type="text" name="stdname" value={facultyAge} onChange={displayage} placeholder="Enter name of student" /></p>
 
 <p>Student Name:<input type="text" name="stdname" value={facultyqualification} onChange={displayQualification} placeholder="Enter name of student" /></p>
 
             <p>Name of Student:{facultyname}</p> 
            <p>Age of Faculty:{facultyAge}</p>
            <p>Faculty Qualification:{facultyqualification} </p>
		</div>

        


        )

}

export default Faculty;