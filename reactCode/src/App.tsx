import { useState } from "react";

function App() {
  let [counter,setCounter]=useState(0)
  const addValue=()=>{
    
    console.log("clicked",counter)
    if(counter<33){
    setCounter(counter+1)
    }
  }

  const decrementVal=()=>{
    console.log("clicked",counter)
    if(counter>0){
    setCounter(counter-1)
    }
  }

    return (
      <>
      <h1>snobbar jaffer :{counter}</h1>
      <h3>counter between 0 and 33</h3>
      <button onClick={addValue}>add value:{counter}</button>
      
      <button onClick={decrementVal}>decrement Value:{counter}</button>
      </>
    );
}

export default App
