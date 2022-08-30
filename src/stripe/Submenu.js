import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { stripContext } from './Context'
import sublinks from './data'

export default function Submenu(){

    const {isSidebarOpen, sidebarClose} = useContext(stripContext)

    return(

        <div className= {isSidebarOpen?'stripe-submenu-mask':"stripe-submenu-mask stripe-submenu-close"}>
            <div className="stripe-submenu">
            <button onClick={sidebarClose}>
                <FaTimes/>
            </button>
            <div className="stripe-sublink-container">
            {sublinks.map((item, index)=>{
                const {page, links} = item
                return(<article key={index}>
                    <h4>{page}</h4>
                    <div className="stripe-sublink">
                    {links.map((link, index)=>{
                        const {label, icon, url} = link
                        return(
                            <a href={url} key={index}>
                                {icon}<span>{label}</span>
                            </a>
                        )
                    })}
                </div></article>)
            })}</div>
            </div>
        </div>

    )
}