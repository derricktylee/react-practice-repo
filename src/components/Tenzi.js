import React from "react";
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import "./Tenzi.css"

export default function Tenzi(){
    
    const [dices, setDices] = React.useState(NewDices())
    const [tenzies, setTenzies] = React.useState(false)
    const [rolls, setRolls] = React.useState(0)

    React.useEffect(()=>{
        const allHeld = dices.every(die=>die.isHeld===true)
        const allValue = dices.every(die=>die.value===dices[0].value)
        
        allHeld && allValue && setTenzies(true) && console.log("you win")
    }, [dices]
    )

    function randomDie(){
        return {value: Math.ceil(Math.random()*6),
            isHeld: false,
            id: nanoid()}
    }


    function NewDices(){
        const newArray = []
        for(let i = 0; i<10; i++){
            newArray.push(randomDie())
            }
            return newArray
    }

    function Click(id){
        
        setDices(prevDice=>prevDice.map(
            die=>die.id===id ? {...die, isHeld:!die.isHeld}: die
        ))
    }


    function DiceElement(){
  
        return(dices.map(x=><div className= {x.isHeld ? "box-green":"box"} key={x.id} onClick={()=>Click(x.id)} >{x.value}</div>)

        )
    }

    function RollDice(){
        if(!tenzies){ 
            setDices(prevDice => prevDice.map(die=>die.isHeld ? die: randomDie()))
            setRolls(prevRoll=>prevRoll+1)}
            else{
                setTenzies(false)
                setDices(NewDices())
                setRolls(0)
            }
    }

    const count_style= {color: rolls<=10 ? "green" : rolls>10 && rolls<=20? "yellowgreen":"red"}

    return(
    <div className="container">
        {tenzies && <Confetti />}
        <div className="inner-container">
            {tenzies && <div className="winning"><span>You Win!</span></div>}
            <h1>Tenzies</h1> 
            <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="grid">
                <DiceElement />
            </div>
            <button className="roll" onClick={RollDice}>{tenzies ? "New Game": "Roll"}</button>
            <div className="count" style={count_style}>Roll count: {rolls}</div>
        </div>
    </div>)
}