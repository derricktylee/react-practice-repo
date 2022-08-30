import React, { createContext, useContext, useEffect, useState } from 'react'

const CocktailsContext = createContext()
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

export function CocktailsProvider({children}){
    const [loading, setLoading] = useState(true)
    const [cocktailsList, setCocktailsList] = useState([])
    const [searchTerm, setSearchTerm] = useState("a")

    async function fetchData(){
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            const {drinks} = data
            if(drinks){
                const tempList = drinks.map(item=>{
                    const{idDrink,
                    strDrink,
                    strDrinkThumb,
                    strAlcoholic,
                    strGlass,
                    strCategory,
                    strInstructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,}= item
                    return({
                        id:idDrink,
                        name:strDrink,
                        image:strDrinkThumb,
                        info:strAlcoholic,
                        glass:strGlass,
                        category:strCategory,
                        instructions:strInstructions,
                        ingredients:[
                            strIngredient1,
                            strIngredient2,
                            strIngredient3,
                            strIngredient4,
                            strIngredient5]
                    })
                })
                setCocktailsList(tempList)

            }
            else{
                setCocktailsList([])
            }


        } catch (error) {
            console.log(error)
            
        }
        setLoading(false)

    }

    useEffect(()=>{
        fetchData()
    }
    ,[searchTerm])


    return <CocktailsContext.Provider value={{loading, cocktailsList,setSearchTerm}}>
        {children}
        </CocktailsContext.Provider>
}

export function useGlobalCocktailsContext(){
    return useContext(CocktailsContext)
}