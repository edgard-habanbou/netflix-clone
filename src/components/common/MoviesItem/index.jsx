// import React, { useState, useEffect } from "react"
import "./styles.css"
import { Link } from "react-router-dom"

function MoviesItem({ title, id, image }) {
    return (
        <Link to={`/movies/${id}`} className='movie-item'>
            <img className='slider-item' src={image} alt={title} />
            <p>{title}</p>
        </Link>
    )
}

export default MoviesItem
