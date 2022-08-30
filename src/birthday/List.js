import React from "react";

export default function List(props){
    const {id,image,name,age} = props.object
    return <article key={id} className="person">
        <img src={image} className="person-img"></img>
        <div>
        <h3>{name}</h3>
        <p>{age} Years</p>
        </div>
    </article>
}