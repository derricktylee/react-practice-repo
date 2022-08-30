import React from 'react'

export const ACTIONS = {
    CLEARALL:"clear-all",
    REMOVE:"remove",
    INCREASE:"increase",
    DECREASE:"decrease",
    DISPLAY:"display",
    LOADING:"loading",
    TOTAL:"get-total"
}

export function reducer(state, action) {
    switch(action.type){
        case ACTIONS.CLEARALL:
            return{...state, cart:[]}
        case ACTIONS.REMOVE:
            return{...state, 
            cart: state.cart.filter(item=>item.id!==action.payload)}

        case ACTIONS.INCREASE:
            let tempCartInc = state.cart.map(item=>{
                if(item.id === action.payload){
                    return {...item, amount:item.amount+1}
                } return item
            })
            return{...state, cart:tempCartInc}
        case ACTIONS.DECREASE:
            let  tempCartDec= state.cart.map(item=>{
                if(item.id===action.payload){
                    return {...item, amount:item.amount-1}
                }return item
            }).filter(item=>item.amount>=1)
            return{...state, cart:tempCartDec}
        case ACTIONS.LOADING:
            return{...state, loading:true}
        case ACTIONS.DISPLAY:
            return{...state, cart:action.payload, loading:false}
        case ACTIONS.TOTAL:
            let {total, amount} = state.cart.reduce(
                (cartTotal, cartItem)=>{
                    const{price, amount} = cartItem
                    const itemTotal = price*amount
                    cartTotal.total+=itemTotal
                    cartTotal.amount+=amount
                    return cartTotal,
                    {total:0,
                    amount:0}
                })
                return {...state, total, amount}

    }

}
