import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Bags Shop</span>
            <ul className='nav'>
              <li>About Us </li>
              <li>Tom's Contacts</li>
              <li>My Account</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
