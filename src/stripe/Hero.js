import React, { useContext } from 'react'
import { stripContext } from './Context'
import hero from "./hero.svg"
import phone from "./phone.svg"

export default function Hero(){

    const {navbarClose} = useContext(stripContext)
    return(
        <div className='stripe-hero' onMouseOver={navbarClose}>
            <img src={hero} alt="hero" className='hero-background'/>
            <h1>Payments infrastructure for the internet</h1>
            <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
        <button>Start now</button>
        <img src={phone} alt="phone" className='stripe-phone'/>
        </div>
    )
}