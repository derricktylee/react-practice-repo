import React from 'react'
import { StripProvider } from './Context'
import Hero from './Hero'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import "./stripe.css"
import Pulldown from './Pulldown'

export default function Stripe(){
    return(
        <StripProvider>
        <section className='stripe'>
            <Navbar/>
            <Pulldown/>
            <Sidebar/>
            
            <Submenu/>

            <Hero/>
            
        </section>
        </StripProvider>
    )
}