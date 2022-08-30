import React, { createContext, useState } from 'react'

export const SidebarContext = createContext()




export function SiderbarProvider({children}){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    function sidebarOpen(){
        setIsSidebarOpen(true)
    }
    function sidebarClose(){
        setIsSidebarOpen(false)
    }
    function modalOpen(){
        setIsModalOpen(true)
    }
    function modalClose(){
        setIsModalOpen(false)
    }

    return <SidebarContext.Provider value={{isModalOpen,isSidebarOpen,sidebarOpen,sidebarClose,modalClose,modalOpen}}>{children}
    </SidebarContext.Provider>
}