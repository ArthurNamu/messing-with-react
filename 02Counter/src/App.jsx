import { useState } from 'react'
import './App.css'

function App(){

  //always returns a variable and method
  //use the method to update the variable value
  //Parameter to the function will be assigned to the variable
  const [counter, setCounter] = useState(0) 
  //let counter = 15

  const addValue = () => { 
    setCounter(counter + 1) // this is to just assign one 
    setCounter((prevCounter) => prevCounter + 1) //This is to avoid batching
    setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue = () =>{
    if(counter > 1)
      setCounter(counter - 1)
  }

  return (
    <>
      <h1>Messing some more to discover hooks {counter}</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}
      >Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
