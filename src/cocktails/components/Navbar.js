import React from 'react'
import { useGlobalCocktailsContext } from '../Cocktailscontext'
import logo from "../logo.svg"
import {Link} from "react-router-dom"

export default function Navbar() {
    const value = useGlobalCocktailsContext()
  return (
    <nav className='cocktails-navbar'>
      <div className="cocktails-nav-center">
      <Link to="/">
        <img src={logo}/>
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
      </div>
    </nav>
  )
}
