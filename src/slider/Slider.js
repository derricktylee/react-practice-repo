import React from 'react'
import "./slider.css"
import people from './data'
import {AiFillEdit} from "react-icons/ai"
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill } from "react-icons/bs"
import { cleanup } from '@testing-library/react'
export default function Slider(){

    const [value, setValue] = React.useState(0)
    const [peoples, setPeoples] = React.useState(people)

    React.useEffect(
        ()=>{
            const prevValue = peoples.length-1
            if(value>prevValue){
                setValue(0)
            }
            if(value<0){
                setValue(prevValue)
            }

        },[peoples,value]
    )

    React.useEffect(
        ()=>{

            let slider = setInterval(()=>setValue(value+1),3000)
            return ()=> clearInterval(slider)
        },[value]
    )

    function clickNext(){
        setValue(prevValue=> prevValue+1

    )}
    function clickPrev(){
        setValue(prevValue=> prevValue-1

    )}

    const peopleArray = peoples.map((ppl,index)=>{
        const{id,image,name, title, quote} = ppl
        return(
            <article key={id} className={index===value?"slider-object":index===value+1 || index===0 && value===people.length-1?"next-slider-object":"prev-slider-object"}>
                <img className='slider-img' src={image} alt={title}/>
                <span className='slider-name'>{name}</span>
                <span className='slider-title'>{title}</span>
                <p>{quote}</p>

            </article>
        ) 
    })

    return (
        <section className='slider-container'>
            <h1><AiFillEdit/> Reviews</h1>
            {peopleArray}
            <button className='slider-button-left' onClick={clickNext}><BsFillArrowLeftSquareFill/></button>
            <button className='slider-button-right'onClick={clickPrev}><BsFillArrowRightSquareFill/></button>
        </section>

    )
}