import { useCallback } from 'react';
import {useState,useEffect,useRef}  from 'react'
import './App.css'


function App() {
  const [length,setLength]=useState(8);
  const [numAllowed,setNumAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false);
  const [Password,setPassword]=useState("")
  //const [copySuccess, setCopySuccess] = useState(false);
  const [copied, setCopied] = useState(false);


  //useRef hook
  const passwordRef=useRef(null)
  //const passwordRef: React.RefObject<null>
  //var window: Window & typeof globalThis


  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYAZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+= "0123456789"
    if(charAllowed) str+="!@#$%^&*()_+{}[]~"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random() * str.length+1)
      pass +=str.charAt(char)
  
  }
  setPassword(pass)},
  
  [length,numAllowed,charAllowed,setPassword])

  {/*const copyPasswordToClipBoaed=useCallback(()=>{
    
    window.navigator.clipboard.writeText(Password)},[Password])*/}
   {/* const copyPasswordToClipBoaed = useCallback(() => {
      window.navigator.clipboard.writeText(Password).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1500); // reset after 1.5s
      });
    }, [Password]);
    */}

    const copyPasswordToClipBoaed = useCallback(() => {
      //passwordRef.current?<div className="select()"></div>
     // passwordRef.current?<div className="setSelectionRange(0,9)"></div>

      window.navigator.clipboard.writeText(Password).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // back to "Copy" after 1.5s
      });
    }, [Password]);
    
    //useEffect runs when page loads and when any of the dependencies changes
  useEffect(()=>{passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator]


)
  
  return (
    <>
      <div className='items-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-4xl  text-center text-white my-3'>Password Generator</h1>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-14 py-10 my-8 text-orange-500 bg-gray-800'>
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
         />
         <button 
  onClick={copyPasswordToClipBoaed} 
  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
>
  {copied ? 'Copied!' : 'Copy'}
</button>
         

       </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='curser-pointer' 
          onChange={(e)=>{setLength(parseInt(e.target.value))}}
           />
           <label >Length:{length}</label>
           
           </div>
           <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={()=>{setNumAllowed((prev)=>!prev)}}
             />
             <label htmlFor="numberInput">Numbers</label>
           </div>

           <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          min={6}
          defaultChecked={charAllowed}
          id="characterInput"
           
          onChange={()=>{setCharAllowed((prev)=>!prev)}}
           />
           <label htmlFor="characterInput">Character</label>
           
           </div>
       </div>
       </div>
       </div>
      
    </>
  )
}

export default App
