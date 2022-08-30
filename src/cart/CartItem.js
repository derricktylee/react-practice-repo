import React from 'react'
import {RiArrowUpSLine,RiArrowDownSLine} from "react-icons/ri"
import { useGloblalCartContext } from './CartContext'
import { ACTIONS } from './reducer'

export default function CartItem({id, title, price, img, amount}) {

    const {dispatch} = useGloblalCartContext()
    function remove(id){
        dispatch({type:ACTIONS.REMOVE, payload:id})
    }

    function increase(id){
        dispatch({type:ACTIONS.INCREASE, payload:id})
    }

    function decrease(id){
        dispatch({type:ACTIONS.DECREASE, payload:id})
    }

  return (
    <article key={id} className="cart-item">
        <img src={img} alt={title}/>
        <div className="item-details-container">
        <p className='item-title'>{title}</p>
        <p className='item-price'>${price}</p>
        <button onClick={()=>remove(id)}>remove</button>
        </div>
        <div className="item-amount-container">
        <RiArrowUpSLine className='item-arrow' onClick={()=>increase(id)}/>
        {amount}
        <RiArrowDownSLine className='item-arrow' onClick={()=>decrease(id)}/>
        </div>

    </article>
  )
}
