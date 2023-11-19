import React from "react"
import "../../App.css"
import { Link } from "react-router-dom"

function SigninBtn() {
    return (
        <div className='btn sign-btn'>
            <Link className='sign-btn-link' to='/'>
                Sign In
            </Link>
        </div>
    )
}

export default SigninBtn
