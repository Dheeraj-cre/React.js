import React, {useState} from 'react'

// Creating a functional component
function Counter() {
    // Creating a variable
    let count = 0;
    // Function to increment the count
    const incrementCount = () => {
        count += 1;
        console.log("Count:", count);
    }
    // Creating a state variable
    const [age, setAge] = useState(0);
    // Function to increment the age
    function incrementAge() {
       // Incrementing the age by 10
        setAge(age + 10);
        console.log("Age:", age);
    } 

    return (
        <div>
            <h1>Counter Component</h1>
            <p>Value of count: {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
            <p>Value of age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
        </div>
    ) 
}
export default Counter;