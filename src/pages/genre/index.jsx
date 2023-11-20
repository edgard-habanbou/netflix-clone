import React from "react"
import "./styles.css"
import StickyNav from "../../components/common/StickyNav"
import Hero from "../../components/genre/Hero"

function Genre() {
    return (
        <div className='genre-page'>
            <StickyNav />
            <Hero />
        </div>
    )
}

export default Genre
