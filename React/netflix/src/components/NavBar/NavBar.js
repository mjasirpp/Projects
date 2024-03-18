import React from 'react'
import "./NavBar.css"
import ava from "./ava.jpg"
import logo from "./Netflix-Logo.png"

function NavBar() {
  return (
    <div className='navbar' >
        <img className='logo' src={logo}/>
        <img className='ava' src={ava}/>
    </div>
  )
}

export default NavBar