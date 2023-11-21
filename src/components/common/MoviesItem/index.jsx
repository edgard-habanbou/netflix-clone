import React from "react"
import "./styles.css"
import { Link } from "react-router-dom"

function MoviesItem({ title, imgScr, id }) {
    return (
        <Link to={`/movies/${id}`} className='movie-item'>
            <img className='slider-item' src={imgScr} />
            <p>{title}</p>
        </Link>
    )
}

export default MoviesItem
