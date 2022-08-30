import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useGloblalCartContext } from './CartContext'
import CartItem from './CartItem'
import { ACTIONS } from './reducer'


export default function CartContainer() {
    const {loading, cart, dispatch} = useGloblalCartContext()



    if (loading){
        return (
            <div className='cart-loading'>
              <h1>Loading...</h1>
            </div>)
    }

    function increase(){
        dispatch({type:ACTIONS.CLEARALL})
    }

    if(cart.length===0){
        return(
            <div className='cart-content'>
            <h1>Your bag</h1>
            <p className='empty'>is currently empty</p>
            </div>
        )
    }
  return (
    <div className='cart-content'>
        <h1>Your bag</h1>
        {cart.map(item=><CartItem key={item.id} {...item}/>)}
        <div className='checkout-line'></div>
        <div className="cart-price-container">
        <p>total</p>
        <p>$0</p>
        </div>
        <button className='cart-clear' onClick={increase} >clear all</button>
    </div>
  )
}
