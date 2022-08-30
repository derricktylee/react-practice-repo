import React from 'react'
import {Link} from "react-router-dom"

export default function Cocktail({id, name, image, info, glass}) {
  return (

      <div className="cocktail-container">
      <img src={image} alt={name}/>
      <h1>{name}</h1>
      <p className='glass'>{glass}</p>
      <p>{info}</p>
      <Link to={`/cocktail/${id}`}>
        <div className="cocktail-btn">
        Details
        </div>
      </Link>
      </div>

  )
}
