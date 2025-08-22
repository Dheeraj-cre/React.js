import React from "react";

//Functional component

function Student(props){
    return (
        <div>
            <h1>Student Component</h1>
            <h2>Name of Student{props.stdname}</h2>
            <h2>Age Of Student{props.age}</h2>
            <h2> Standard of The Student: {props.standard}</h2>
        </div>
    )
}
export default Student