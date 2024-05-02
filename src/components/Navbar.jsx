import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='mb-10 flex justify-between px-8'>
        <h1>Logo</h1>


        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar