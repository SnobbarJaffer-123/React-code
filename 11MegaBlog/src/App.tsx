import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';

import {login,logout} from "./store/authSlice";
import { Header} from "./components";
import { Footer} from "./components";
import { Outlet } from 'react-router-dom';


import './App.css'


function App() {
    const [loading ,setLoading]=useState(true)
    const dispatch=useDispatch()

    useEffect(()=>{
      authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        }
        else{
          dispatch(logout())
        }
      })
      .finally(()=>setLoading(false))

    },[])

    return !loading ?(
      <div className='min-h-screen px-10 flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header/>
          <main className="min-h-screen ">
            <Outlet/>
          </main>
          <Footer/>
        </div>
        </div>
    ):(null)

 

  
}

export default App
