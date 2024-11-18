import React, { useState } from 'react'
import './navbar.scss'
const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <nav>
        <div className='left'>
          <a href='/' className='logo'>
            <img src='/logo.png' alt=''>
            </img>
            <span>REstate</span>
          </a>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
          <a>Agents</a>
        </div>
        <div className='right'>
        <a href='/'>Sign In</a>
        <a href='/' className='register'>Sign Up</a>
        <div className='menuIcon'>
            <img src='/menu.png' alt="" onClick={()=>setOpen(!open)}/>
        </div>

        <div className={open? "menu active" : "menu"}>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
          <a>Agents</a>
          <a>Sign In</a>
          <a>Sign Up</a>
        </div>
        </div>
    </nav>
  )
}

export default Navbar