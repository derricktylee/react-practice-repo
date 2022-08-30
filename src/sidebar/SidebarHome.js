import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { SidebarContext } from './sidebarContext'


export default function SidebarHome(){
    const {modalOpen, sidebarOpen} = useContext(SidebarContext)
    return (
    <section>
        <button className='sidebar-toggle' onClick={sidebarOpen}>
            <FaBars/>
        </button>
        <button className='sidebar-modal-btn' onClick={modalOpen}>
            Show Modal
        </button>

    </section>
    )
}