import React, { useContext, useEffect, useRef, useState } from 'react'
import { stripContext } from './Context'
import sublinks from './data'

export default function Pulldown(){

    const{isNavbarOpen, location, page:{page,links}} = useContext(stripContext)
    const containerRef = useRef(null)
    const [col, setCol] = useState("col-2")

    useEffect(()=>{
        const {center, bottom} = location
        containerRef.current.style.left = `${center}px`
        containerRef.current.style.top = `${bottom}px`
        setCol("col-2")
        if(links.length===3){
            setCol("col-3")
        }
        if(links.length>3){
            setCol("col-4")
        }
    },[location])

    return (
        <div ref={containerRef} className=
        {isNavbarOpen?'stripe-pulldown pulldown-show':
        'stripe-pulldown'}>
            <h4>{page}</h4>
            <ul className={col}>
                {links.map((link,index)=><li key={index}><a href={link.url}>{link.icon}<span>{link.label}</span></a></li>)}
            </ul>
            </div>
    )
}