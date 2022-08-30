import React from 'react'
import {BsFillTrashFill,BsFillCheckSquareFill} from "react-icons/bs"
export default function List(props){
    const itemArray = props.list.map(item=>{
    const {title, id} = item 
    return(
    <div key={id} className="item-container">
        <p>
        {title}
        </p>
        <div className="button-container">
            <button onClick={()=>props.editItem(id)}><BsFillCheckSquareFill/></button>
            <button onClick={()=>props.removeItem(id)}><BsFillTrashFill/></button>    
            </div>
            </div>)})
    return(
    <div >
        {itemArray}
    </div>)
}