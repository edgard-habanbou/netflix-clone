import React from "react"
import "../../App.css"
import { Link } from "react-router-dom"

function JoinBtn() {
    return (
        <div className='btn join-btn'>
            <Link className='join-btn-link' to='/'>
                Join Now
            </Link>
        </div>
    )
}

export default JoinBtn
