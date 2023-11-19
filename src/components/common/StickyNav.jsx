import React from "react"
import logo from "../../assets/svgs/logo.svg"
import JoinBtn from "./JoinBtn"
import SigninBtn from "./SigninBtn"

function StickyNav() {
    return (
        <nav className='sticky-nav'>
            <div className='netflix-logo'>
                <img src={logo} alt='Netflix Logo' />
            </div>
            <div className='nav-account'>
                <JoinBtn />
                <SigninBtn />
            </div>
        </nav>
    )
}

export default StickyNav
