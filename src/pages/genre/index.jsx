import React from "react"
import "./styles.css"
import StickyNav from "../../components/common/StickyNav"
import Hero from "../../components/genre/Hero"
import MoviesCarousel from "../../components/common/MovieCarousel"

function Genre() {
    return (
        <div className='genre-page'>
            <StickyNav />
            <Hero />
            <MoviesCarousel movies={[1, 2, 3, 4]} />
        </div>
    )
}

export default Genre
