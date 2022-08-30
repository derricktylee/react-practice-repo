import React from "react";
import people from "./data"
import "./review.css"
import {FaQuoteLeft} from "react-icons/fa"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"

export default function Review(){
    const [index, setIndex] = React.useState(0)
    const {name, job, image, text} = people[index]

    function checkNumber(i){
        if(i<0){
            return i+4
        } if(i>3){
            return i-4
        } return i
    }

    function indexMinus(){
        setIndex(prevIndex=>{
            return(checkNumber(prevIndex-1))})
    }

    function indexPlus(){
        setIndex(prevIndex=>{
            return(checkNumber(prevIndex+1))})
    }

    function randomIndex(){
        setIndex(prevIndex=>
            { let random = Math.floor(Math.random()*4)
                if(random===index){
                    return(checkNumber(random+1))
                } return random
            })
    }

    return(
        <div className="review-container">
            <h1 className="review-title">Our Reviews</h1>
            <article className="review-box">
                <div className="icon-container">
                    <FaQuoteLeft className="quote-icon"/>
                </div>
                
            <img src={image} alt={name} className="review-img"/>
            <h4 className="review-name">{name}</h4>
            <h4 className="review-job">{job}</h4>
            <p className="review-description">{text}</p>
            <div className="review-arrow-container">
                <BsArrowLeftCircleFill className="arrow-left" onClick={indexMinus}/>
                <button className="review-random-btn" onClick={randomIndex}>Random</button>
                <BsArrowRightCircleFill className="arrow-right" onClick={indexPlus}/>
            </div>
            </article>

        </div>
    )
}