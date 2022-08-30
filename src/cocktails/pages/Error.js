import React from 'react'
import {Link} from "react-router-dom"

export default function Error() {
  return (
    <div className='cocktails-error'>
        <h1>Oops! It's A Dead End</h1>
        <Link to="/">
            <div className="error-btn">
            back home
            </div>
        </Link>
        
    </div>
  )
}
