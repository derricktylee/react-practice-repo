import React from 'react'
import "./navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { links, social } from './data'

export default function Navbar(){
    const [click, setClick] = React.useState(false)
    function handleClick(){
        setClick(!click)
    }

    const linkRef = React.useRef(null)
    const containerRef =React.useRef(null)

    React.useEffect(()=>{
        const linkHeight = linkRef.current.getBoundingClientRect().height
        if(click){
            containerRef.current.style.height = `${linkHeight}px`
        } else{
            containerRef.current.style.height = `0px`
        }


    },[click])

    const linksArray = links.map(link=><li key={link.id}>{link.text}</li>)
    const socialArray = social.map(item=>{
        const{id, url, icon} =item
        return(
            <a href={url} key={id}>{icon}</a>
        )
    })
    return(
        <section className='navbar'>
            <div className="navbar-mobile-container">
            <div className="navbar-logo">
            <img src='./logo.svg' />
            </div>
            <GiHamburgerMenu className='navbar-hamburger'onClick={handleClick}/>
            </div>
            <div className={click?"link-container show-link":"link-container hide-link"} ref={containerRef}>
            <ul ref={linkRef}>
                {linksArray}
            </ul>
            </div>
            <div className="social-icon">
                {socialArray}
            </div>
            
        </section>

    )
}