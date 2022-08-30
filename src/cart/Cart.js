import React from 'react'
import CartContainer from './CartContainer'
import { CartProvider, useGloblalCartContext } from './CartContext'
import CartNavbar from './CartNavbar'
import "./cart.css"
export default function Cart() {




  return (

    <CartProvider>
    <div>
        <CartNavbar/>
        <CartContainer/>
    </div>
    </CartProvider>
  )
}
