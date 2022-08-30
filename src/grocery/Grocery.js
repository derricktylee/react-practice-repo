import React from 'react'
import "./grocery.css"
import{nanoid} from "nanoid"
import List from './List'
import Alert from './Alert'
export default function Grocery(){

    function getItem(){
        let recordList = localStorage.getItem("list")
        if(recordList){
        return (JSON.parse(recordList))}
        else{
        return ([])
    }

}
    const[name, setName] = React.useState("")
    const[list, setList] = React.useState(getItem)
    const[isEditing, setIsEditing] = React.useState(false)
    const[editId, setEditId] = React.useState()
    const[alert, setAlert] = React.useState({show:false, msg:"", type:""})

    React.useEffect(()=>{
        localStorage.setItem("list",JSON.stringify(list))
    },[list])



    function setShow(show=false, msg="", type=""){
        setAlert({show,msg,type})
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!name){
            setShow(true,"Please enter value","danger")
        }
        else if(isEditing){
            setShow(true,"Finish editing","success")
            setList(prevList=>prevList.map((item)=>{
                if(item.id===editId){
                    return ({...item, title:name})
                }  return item
            }))
            setIsEditing(false)
            setEditId(null)
            setName("")

        }
        else{
            const item = {title:name, id:nanoid()}
            setList(prevList=>[...prevList, item])
            setShow(true,"Item added","success")
            setName("")
        }
    }

    function editItem(id){
        setShow(true,"Start editing...","success")
        const newItem = list.find((item)=>item.id===id)
        setName(newItem.title)
        setIsEditing(true)
        setEditId(id)
    }


    function clearItem(){
        setList([])
        setShow(true,"Item cleared","danger")
    }

    function removeItem(id){
        setList(prevList=>prevList.filter(item=>item.id!==id))
        setShow(true,"Item deleted","danger")
    }

    return(
    <section className='grocery'>
        <article className='grocery-container'>
            {alert.show && <Alert alert={alert} removeAlert={setShow} list={list} isEditing={isEditing}/>}
            <h2>Grocery Bud</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="e.g. egg"></input>
                <button type="submit">{isEditing?"Edit":"Submit"}</button>
            </form>
            <div className="list-container">
            <List list={list} removeItem={removeItem} editItem={editItem}/>
            </div>
            {list.length!==0 &&<button onClick={clearItem} className="grocery-clear">Clear items</button>}
        </article>

    </section>)
}