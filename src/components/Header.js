import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"

export default function Header() {
  let[cartOpen, setCartOpen]=useState(false)


  return (
    <header>
        <div>
            <span className='logo'>Bags Shop</span>
            <ul className='nav'>
              <li>About Us </li>
              <li>Contacts</li>
              <li>My Account</li>
            </ul>
            <FaShoppingCart onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
        </div>
        <div className='presentation'></div>
    </header>
  )
}
