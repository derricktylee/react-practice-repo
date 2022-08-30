import React from 'react'
import data from "./data"
import "./lorem.css"
export default function LoremIpsum(){

    const [number, setNumber] = React.useState(0)
    const [lorem, setLorem] = React.useState([])

    function onSubmit(e){
        e.preventDefault()
        let amount = parseInt(number)
        if(amount <= 0){
            amount=1
        }
        if(amount>=8){
            amount=8
        }
        setLorem(()=>data.slice(0,amount))
        

    }

    const newArray = lorem.map((item,index)=><p key={index}>{item}</p>)

    return(
        <section className='loremipsum-container'>
            <h1>tired of boring lorem ipsum?</h1>
            <form onSubmit={onSubmit}>
            <label htmlFor='number'>Paragraphs:</label>
            <input type="number" id="number" name='number' value={number}
            onChange={(e)=>setNumber(e.target.value)}></input>
            <button type="submit">Generate</button>
            </form>
            {newArray}
        </section>

    )
}