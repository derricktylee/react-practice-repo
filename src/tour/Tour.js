import React from "react";

export default function Tour(props){
    const {id, price, image, name, info} = props.tour
    const [readMore, setReadMore] = React.useState(true)
    return(
        <article className="tour-article">
            <img src={image} alt={name} className="tour-pic"></img>
            <div className="tour-subtitle">
            <h3>{name}</h3>
            <h3 className="price-tag">${price}</h3>
            </div>
            <p className="tour-description">{readMore?info.substring(0,200)+"...":info}<button onClick={()=>setReadMore(prevState=>!prevState)} className="readMore">{readMore?"Read More":"Read Less"}</button></p>
            <div className="not-interest-btn-container">
            <button className="not-interest-btn" onClick={()=>props.notInterest(id)}>Not Interested</button>
            </div>
        </article>
    )

}