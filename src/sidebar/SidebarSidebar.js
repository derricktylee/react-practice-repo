import React, { useContext } from 'react'
import { links, social } from './data'
import logo from "./logo.svg"
import {AiFillCloseCircle} from "react-icons/ai"
import { SidebarContext } from './sidebarContext'
export default function SidebarSidebar(){

    const {isSidebarOpen, sidebarClose} = useContext(SidebarContext)

    return <div className= {`sidebar-bar ${isSidebarOpen?'sidebar-open':'sidebar-close'}`}>
        <div className="sidebar-header">
        <img src={logo}></img>
        <button>
            <AiFillCloseCircle onClick={sidebarClose}/>
        </button>
        </div>
        {links.map(link=>{
            const {id,url,text,icon} = link
            return <a href={url} key={id} className="sidebar-link">{icon}{text}</a>
        })}
        <div className="social-icon-container">
            {social.map(icons=>{
                const{id, url, icon} = icons
                return <a key={id} href={url}>{icon}</a>
            })}
        </div>
    </div>
}