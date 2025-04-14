import { useState } from "react";

function App() {
  let [counter1,setCounter1]=useState(0)
  let [counter2,setCounter2]=useState(0)
  let [counter3,setCounter3]=useState(0)
  //let [counter4,setCounter4]=useState(0)


  const inc1=()=> {
    console.log("Allah hu Akbar",counter1)
    if(counter1<33){
    setCounter1(counter1+1)
    }
    
  }
  const inc2=()=> {
    console.log("Allah hu Akbar",counter2)
    if(counter2<33){
    setCounter2(counter2+1)
    }
    
  }
  const inc3=()=> {
    console.log("Allah hu Akbar",counter3)
    if(counter3<33){
    setCounter3(counter3+1)
    }
    
  }


    return (
      <>
      <h1> Allah hu Akbar:{counter1}</h1>
      <br />
      <h1> Alhumdulillah:{counter2}</h1>
      <br />
      <h1> Subhanallah:{counter3}</h1>
      
      
      
      
       
      <button onClick={inc1}>Allah hu Akbar:{counter1}</button>
      <br />
      <button onClick={inc2}>Alhumdulillah:{counter2}</button>
      <br />
      <button onClick={inc3}>Subhanallah:{counter3}</button>
      </>
    );
}

export default App
