import React, { useEffect, useRef } from 'react'
import { useGlobalCocktailsContext } from '../Cocktailscontext'

export default function SearchForm() {

  function handleSumbit(e){
    e.preventDefault()
  }


  const {setSearchTerm} = useGlobalCocktailsContext()
  const searchValue = useRef("")

function search(){
  setSearchTerm(searchValue.current.value)
}

useEffect(()=>{searchValue.current.focus()},[])


  return (
    <section className='search-section'>
      <div className="search-center">
      <form onSubmit={handleSumbit}>
        <label for="cocktail">Search Your Favorite Cocktail</label>
        <input type="text" id="cocktail" name="cocktail" ref={searchValue}
        onChange={search}></input>
      </form>
      </div>
    </section>
  )
}
