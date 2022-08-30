import React from 'react'
export default function MenuItem(props){
   const {id, title, category, price, img, desc} = props.menuitem

   return(
    <div className='menu-item'>
        <img src={img} alt={title} className='menu-pic'/>
        <article className='item-info'>
            <div className="title-price">
        <h4>{title}</h4>
        <span>${price}</span>

        </div>
        <p className='item-desc'>{desc}</p>
        </article>
    </div>
   )
}