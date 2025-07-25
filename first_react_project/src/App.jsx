import { useEffect, useState } from "react"
import './index.css'
import './App.css'
import axios from 'axios'
function App() {
     const [jokes, setJokes] = useState([])
       
     useEffect(() =>{
        axios.get("/api/jokes")
        .then((response) => {
          setJokes(response.data)
         
        })
     },[])
  
  return (
    <>
      
     <h1>Laptop or Code</h1>
     <p>JOKES : {jokes.length}</p>
     {
      jokes.map((joke) => (
         <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
    
         </div>
      ))
    }

    </>
  )
}

export default App