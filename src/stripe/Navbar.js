import React, { useContext } from 'react'
import { stripContext } from './Context'
import logo from "./logo.svg"

export default function Navbar(){

    const {isNavbarOpen,navbarOpen, navbarClose} = useContext(stripContext)

    function displayNav(e){
        const page = e.target.textContent
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right)/2
        const bottom = tempBtn.y + tempBtn.height+5 
        navbarOpen(page, {center, bottom})
    }

    function handleNav(e){
        if(!e.target.classList.contains("stripe-navbar-btn")){
            navbarClose()
        }
    }
    return(
        <nav className='stripe-navbar' onMouseOver={handleNav}>

                <img src={logo} alt="logo"/>
                <ul>
                    <li>
                        <button className='stripe-navbar-btn' onMouseOver={displayNav}>products</button>
                    </li>
                    <li>
                    <button className='stripe-navbar-btn'onMouseOver={displayNav}>developers</button>
                    </li>
                    <li>
                    <button className='stripe-navbar-btn'onMouseOver={displayNav}>company</button>
                    </li>
                </ul>
                <button className='stripe-signin'>sign in</button>

        </nav>
    )
}