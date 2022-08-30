import React from 'react'

export default function SingleColor(props){

    const [alert, setAlert] = React.useState(false)
    const {rgb, hex, weight} = props.color
    const index = props.index
    const bcg = rgb.join(",")
    const style = {
        backgroundColor : `rgb(${bcg})`,
        color: index<10?"black":"white",
        
    }
    const hexColor = "#"+hex

    function colorCopied(){
        setAlert(true)
        navigator.clipboard.writeText(hexColor)
    }

    React.useEffect(()=>
        {
            const timeout = setTimeout(()=>setAlert(false),3000)
            return(()=>clearTimeout(timeout))
        },[alert])

    return(
        <div style={style} className="single-color" onClick={colorCopied}>
            <p>{weight}%</p>
        <p>#{hex}</p>
        {alert && <p className='hex-copied'>copied to clipboard</p>}
        </div>
    )
}