import React from 'react'
import { NavLink } from 'react-router-dom'

export  function Header() {
  return (
    <div className='Header'> Header

    <nav>
      <NavLink to={'/'}>Home Page</NavLink>
      <NavLink to={'/about'}>About Page</NavLink>
      <NavLink to={'/contact'}>Contact Page</NavLink>
    </nav>

    </div>
  )
}
