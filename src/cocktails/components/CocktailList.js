import React from 'react'
import {Link} from "react-router-dom"
import Cocktail from './Cocktail'
import Loading from '../components/Loading'
import { useGlobalCocktailsContext } from '../Cocktailscontext'

export default function CocktailList() {
  const {loading, cocktailsList} = useGlobalCocktailsContext()
  console.log(cocktailsList)
  if(loading){
      return <Loading/>
  }
  if(cocktailsList.length<1){
    return(
        <section className='no-match'>
            <h2>No Cocktails Matched Your Search Criteria</h2>
        </section>
    )
}
return (
<section>
    <h2 className='home-title'>Cocktails</h2>
    <section className="cocktail-list">
    {cocktailsList.map(item=><Cocktail key={item.id} {...item}/>)}
    </section>
</section>
)
}
