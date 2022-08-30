import React from 'react'

export default function Alert(props){
    const{show,msg,type} = props.alert

    React.useEffect(()=>{
        const timeout = setTimeout(()=>props.removeAlert(),3000)

        return ()=>clearTimeout(timeout)
    },[props.list,props.isEditing])

return(
    <div className={`grocery-alert alert-${type}`}>
        {msg}
    </div>
)
}