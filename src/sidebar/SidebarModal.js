import React, { useContext } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { SidebarContext } from './sidebarContext'

export default function SidebarModal(){

    const {isModalOpen, modalClose} = useContext(SidebarContext)

    return <div className={isModalOpen?'sidebar-mask sidebar-mask-show':"sidebar-mask"}>
        <div className='sidebar-modal'>
        
        <p>Modal components</p>
        <button>
            <AiFillCloseCircle onClick={modalClose}/>
        </button>
        </div>
        </div>
}