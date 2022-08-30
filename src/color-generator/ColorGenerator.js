import React from 'react'
import "./color.css"
import Values from 'values.js'
import SingleColor from './SingleColor'

export default function ColorGenerator(){

    const [color, setColor] = React.useState("#f15025")
    const [error, setError] = React.useState(false)
    const [list, setList] = React.useState(new Values(color).all(10))

    function handleSubmit(e){
        try{
        e.preventDefault()
        let colors = new Values(color).all(10)
        setList(colors)
        setError(false)
        console.log(colors)
        }
        catch(error){
            setError(true)
            console.log(error)
        }
        
    
    }

    return(
        <section className='color-generator'>

            <form onSubmit={handleSubmit} className="color-form">
            <h3>Color Generator</h3>

                <input className={error?"color-error":"color-input"} type="text" id='text' name='text' value={color} onChange={(e)=>setColor(preColor=>e.target.value)}></input>
                <button type='submit'>submit</button>
                </form>
                <div className="color-container">
                {list.map((color,index) => <SingleColor color={color} key={index} index={index}/>)}
                </div>
                


        </section>
    )
}