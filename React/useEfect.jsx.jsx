import React,{useState} from "react";
<<<<<<< HEAD
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {

    const [students,setstudent] = useState([]);

    function addstudent(studentData){
       setstudent([...students,studentData])
    }

    return(
        <div>
            <AddStudent addstudent={addstudent} />
            <StudentList students={students} />
        </div> 
    )
=======

function App() {

  const[counter,setCounter] = useState(0);

  function callOnce(){
    console.log("Function called");
  }

callOnce
  return(
  <div>
    <h2>useEffect example</h2>
    <button onClick={()=> setCounter(counter+1)}>Click Me{counter}</button>
  </div>

  );
>>>>>>> e101896 (Initial commit - React app setup)
}

export default App;
