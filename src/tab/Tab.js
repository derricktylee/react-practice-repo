import React from 'react'
import "./tab.css"
import {MdOutlineDoubleArrow} from "react-icons/md"
import {nanoid} from "nanoid"
export default function Tab(){
    const url = 'https://course-api.com/react-tabs-project'
    const [data, setData] = React.useState()
    const [loading, setLoading] = React.useState(true)
    const [value, setValue] = React.useState(0)

    async function fetchData(){
        const res = await fetch(url)
        const details = await res.json()
        setData(details)
        setLoading(false)
        
    }


    React.useEffect(
        ()=>{
            fetchData()

        },[]
    )



    if(loading){
        return
        <h1>loading</h1>
    }

    function changeIndex(index){
        setValue(preValue=>index)
    }
    return (
    <section className='tab-section'>
        <h1>Experience</h1>
        <div className="underline"></div>

        <div className="tab-content">
        <div className="button-container">
        {data.map((comp, index)=><button key={comp.id} onClick={()=>changeIndex(index)}
        className={index===value?"tab-active-button":"tab-button"}>
            {comp.company}</button>)}
            </div>
            <article>
        <h3>{data[value].title}</h3>
        <span>{data[value].company}</span>
        <p className='tab-date'>{data[value].dates}</p>
        {data[value].duties.map((duty, index)=><div className='tab-content-p' key={index}>
            <MdOutlineDoubleArrow className='tab-arrow'/>
            <p>{duty}</p>
            </div>)}
            <div>
            <button className='tab-more'>More Info</button>
            </div>
            </article>
        </div>

    </section>
    )
}