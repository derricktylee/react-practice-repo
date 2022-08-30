import React from "react";
import questions from "./data";
import Questions from "./Question";
import "./accordion.css"

export default function Accordion(){
    const newArray = questions.map(obj=>({...obj, show:false }))
    const [newQuestions, setNewQuestions] = React.useState(newArray)
    function showMore(id){
        setNewQuestions(prevState=>
            prevState.map(
                obj=>{
                    return obj.id===id? {...obj, show:!obj.show}:obj
                }
            ))
    }
    const questionsArray = newQuestions.map(question=> <Questions question={question} key={question.id} showMore={showMore}/>)

    return(
        <div className="accordion">
            <section className="accordion-container">
                <h2 className="accordion-title">
                    Questions And Answer About Login
                </h2>
                <div className="accordion-question-container">
                {questionsArray}
                </div>
            </section>
        </div>
    )
}