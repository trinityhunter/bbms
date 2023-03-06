import React from 'react'
import './homepage.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
        <NavLink to={'/'} style={{ 'textDecoration': 'none', 'color': 'white' }}><h1>Blood Bank Management System</h1></NavLink>
      <ul>
        <NavLink to={'/'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Home</NavLink>
        <NavLink to={'/DonationForm'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Donation Form</NavLink>
        <NavLink to={'/DonationView'} style={{ 'textDecoration': 'none', 'color': 'white' }}>DonationView</NavLink>
        <NavLink to={'/RequestForm'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Request Form</NavLink>
        <NavLink to={'/RequestView'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Request View</NavLink>
      </ul>
    </div>
  )
}

export default Navbar