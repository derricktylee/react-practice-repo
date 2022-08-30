import React from 'react'
import SidebarHome from './SidebarHome'
import SidebarModal from './SidebarModal'
import SidebarSidebar from './SidebarSidebar'
import "./sidebar.css"
import { SiderbarProvider } from './sidebarContext'

export default function Sidebar(){
    return(<div className='siderbar'>
    <SiderbarProvider>
    <SidebarHome/>
    <SidebarModal/>
    <SidebarSidebar/>
    </SiderbarProvider>
    </div>)
}