import React from "react"
import JoinBtn from "./JoinBtn"
import SigninBtn from "./SigninBtn"
import "../../App.css"
import { Link } from "react-router-dom"

function StickyNav() {
    return (
        <nav className='sticky-nav'>
            <Link to={"/"} className='netflix-logo' />
            <div className='nav-account'>
                <JoinBtn />
                <SigninBtn />
            </div>
        </nav>
    )
}

export default StickyNav
