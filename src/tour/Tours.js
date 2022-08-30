import React from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import "./tour.css"
const url = 'https://course-api.com/react-tours-project'

export default function Tours(){
    const [loading, setLoading ] = React.useState(true)
    const [tours, setTours] = React.useState([])


    const fetchData = async function (){
        setLoading(true)
        try{
            const res = await fetch(url)
            const data = await res.json()
            setLoading(false)
            setTours(data)

        } catch(error){
            setLoading(false)
            console.log(error)
        }
    }
    React.useEffect(()=>{
    fetchData()
    },[]
    )
    function notInterest(id){
        setTours(prevTour=>prevTour.filter(tour=>tour.id!==id))
    }

    const tourList = tours.map(tour=> <Tour key={tour.id} tour={tour} notInterest={notInterest}/>)
if(loading){
    return (
        <div className="tour-main"> 
        <Loading/>
        
    </div>)}
if(tours.length===0){
    return(
        <div className="tour-main">
                        <h1 className="tour-title">Our Tours</h1>
            <button onClick={fetchData} className="refresh">Refresh</button>
        </div>
    )
}
    return(
        <div className="tour-main">
            <h1 className="tour-title">Our Tours</h1>
            <div className="underline"></div>
            {tourList}
        </div>
    )
}