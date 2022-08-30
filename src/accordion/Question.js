import React from "react";

export default function Questions(props){
    const {id, title, info, show} = props.question

    return(
    <div className="accordion-question">
        <h4>{title}</h4>        
        <button className="accordion-btn" onClick={()=>props.showMore(id)}>+</button>
     {show&&<p className="accordion-info">{info}</p>}

    </div>


    )
}