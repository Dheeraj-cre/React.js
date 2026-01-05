import React,{useState} from "react";
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
}

export default App;
