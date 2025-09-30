import React,{ useState, useEffect } from 'react'

function App() {
  /*--- Creating state vaaibles ---*/
  const [users,setUsers]=useState([]);
  const [loading,setLoading] = useState(true)

  //using use effect hook
  useEffect(()=>{
    // fetching data from rest api
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()) // convert response to json
    .then((data) =>{
      setUsers(data)  //to save data into state variable
      setLoading(false)//stop loading
    })
    .catch((err) =>{
      console.error("Error in fetching data : "+err)
      setLoading(false)
    })
  },[]); //empty array for after component mounts
  
  /*--- UI designing ---*/
  return (
    <>
     <div>
      <h1> Fetching data from rest api </h1>
      {loading ? (<p> Data is loading....</p>) : (
        <ul>
          {users.map((user)=>(
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
        </ul>
        )}
     </div>
    </>
  )
}

export default App
