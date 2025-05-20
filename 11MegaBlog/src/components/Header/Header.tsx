//import React from 'react'
import { Container,Logo,LogoutBtn } from "../index";
import {Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Header() {
   const authStatus=useSelector((state)=> state.auth.status)

   const navigate=useNavigate()

   const navItems=[
    {
        name='Home',
        slug="/"
        active:!authStatus

    }
   ]

    return (
        <div>Header</div>
    )
}

export default Header
