import React from 'react'
import { Link } from 'react-router-dom'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className='mainTop'>
        <nav>
          <Link to="/" className='link'>/</Link>
          <Link to="/home" className='link'>Home</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/shop" className='link'>Shop</Link>
          <Link to="/rendering-mapping" className='link'>Conditional Rendering & Array Mapping</Link>
        </nav>
    </div>
  )
}
