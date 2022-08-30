import React, { useEffect, useState } from 'react'
import {useParams, Link} from "react-router-dom"
import { useGlobalCocktailsContext } from '../Cocktailscontext'



export default function SingleCocktail() {
    const {id} = useParams()
    const {cocktailsList} = useGlobalCocktailsContext()
    const cocktail = cocktailsList.find(item=>item.id===id)
    const {name,image,info,glass, category,instructions, ingredients} =  cocktail

   
  return (
    <section className='single-cocktail'>
        <Link to={"/"}>
            <div className="back-home-btn">
            back home
            </div>
        </Link>
        <h1>{name}</h1>
        <div className="single-cocktail-container">
            <img src={image} alt={name}/>
            <div className="cocktail-center">
            <div className="cocktail-details">
                <p><span>name:</span>{name}</p>
                <p><span>category:</span>{category}</p>
                <p><span>info:</span>{info}</p>
                <p><span>glass:</span>{glass}</p>
                <p><span>instructions:</span>{instructions}</p>
                <p><span>ingredients:</span>{ingredients.join(",")}</p>
            </div>
        </div>
        </div>

    </section>
  )
}
