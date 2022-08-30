import React from 'react'
import Navbar from './components/Navbar'
import { CocktailsProvider } from './Cocktailscontext'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'
import "./cocktails.css"



export default function Cocktails() {
  return (
    <CocktailsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cocktail/:id' element={<SingleCocktail/>}/>
          <Route  path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </CocktailsProvider>
  )
}
