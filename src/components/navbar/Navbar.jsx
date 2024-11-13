import React from 'react'
import './navbar.scss'
const Navbar = () => {
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

        </div>
    </nav>
  )
}

export default Navbar