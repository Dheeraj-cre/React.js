import React,{useState} from "react"

const Counter = () =>{
  const[count, setcounter] = useState(0);
  const increment =()=> setCount(count + 1);
  const decremennt= ()=> setCount(count -1);
  return(
    <div>
    <p>Current Count : {count} </p>
  <button Onclick={increment}>Increment</button>
  <button Onclick={decrement}>Decrement</button>
    
    </div>
  )
}
