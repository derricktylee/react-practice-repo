import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { stripContext } from './Context'
import logo from "./logo.svg"
export default function Sidebar(){

    const {isSiderbarOpen, sidebarOpen} = useContext(stripContext)
    return(
        <aside className='stripe-sidebar'>
            <img src={logo} alt="logo"/>
            <button onClick={sidebarOpen}>            
                <FaBars/>
            </button>

        
        </aside>
    )
}