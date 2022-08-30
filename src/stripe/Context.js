import React, { createContext, useState } from 'react'
import sublinks from './data'
export const stripContext = createContext()

export function StripProvider({children}){

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page:"", links:[]})


    function sidebarOpen(){
        setIsSidebarOpen(true)
    }

    function sidebarClose(){
        setIsSidebarOpen(false)
    }

    function navbarOpen(text, coordinate){
        setLocation(coordinate)
        const page = sublinks.find((link)=>link.page===text)
        setPage(page)
        setIsNavbarOpen(true)
    }

    function navbarClose(){
        setIsNavbarOpen(false)
    }

    return(
        <stripContext.Provider value={{page,location,isSidebarOpen,isNavbarOpen, sidebarOpen, sidebarClose, navbarOpen, navbarClose}}>{children}</stripContext.Provider>
    )
}