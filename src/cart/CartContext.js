import { type } from '@testing-library/user-event/dist/type/index.js'
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import cartItems from "./data.js"
import { reducer} from "./reducer"
import { ACTIONS } from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
export const CartContext = createContext()

export function CartProvider({children}){
    const initialState = {
        loading: false,
        cart: cartItems,
        total:0,
        amount:0,

    }
    const [state,dispatch] = useReducer(reducer,initialState)

    async function fetchData(){
        dispatch({type:ACTIONS.LOADING})
        const response = await fetch(url)
        const data = await response.json()
        dispatch({type: ACTIONS.DISPLAY, payload: data})
    }

    useEffect(()=>{
        fetchData()
    }
    ,[])

    function getTotal(){
        dispatch({type:ACTIONS.TOTAL})
    }

    useEffect(()=>{
        getTotal()
    },[state.cart])



    return <CartContext.Provider value={{...state, dispatch}}>{children}</CartContext.Provider>
}

export function useGloblalCartContext(){
    return useContext(CartContext)
}