import React from 'react'
import menuitem from "./data"
import MenuItem from './MenuItem'
import "./menu.css"
export default function Menu(){
    const [items, setItems] = React.useState(menuitem)
    const menuArray = items.map(item=> <MenuItem menuitem={item} key={item.id}/>)
    
    function filterItem(cat){
        setItems(item=>menuitem.filter(x=>x.category===cat))
    }
    function showAll(){
        setItems(item=>{
            return (menuitem)
        })
    }


    return(
        <div className='menu-background'>
            <section className='menu-container'>
            <h1>Our Menu</h1>
            <div className="underline"></div>
            <nav className='menu-nav'>
                <button onClick={showAll}>All</button>
                <button onClick={()=>filterItem("breakfast")}>Breakfast</button>
                <button onClick={()=>filterItem("lunch")}>Lunch</button>
                <button onClick={()=>filterItem("shakes")}>Shakes</button>
                
            </nav>
            <div className="menu-item-container" >
            {menuArray}
            </div>
            </section>
        </div>
    )
}
