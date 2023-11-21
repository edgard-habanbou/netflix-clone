// import React, { useState, useEffect } from "react"
import "./styles.css"
import { Link } from "react-router-dom"

function MoviesItem({ title, id }) {
    // const [movieImage, setMovieImage] = useState([""])
    // const options = {
    //     method: "GET",
    //     headers: {
    //         accept: "application/json",
    //         Authorization:
    //             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGEyYTgxMjhhNTRmNmNhNDgwYjZkMDg1ZTRiNWVkNyIsInN1YiI6IjY1NWM2ZTc3ZWE4NGM3MTA5NDAzODdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RBECSuDfAnH3YbyjhyJ9AB-Sg-d-a1of88Ikn7hmU6Y",
    //     },
    // }
    // const getMovieImage = async () => {
    //     return await fetch(
    //         `https://api.themoviedb.org/${id}/collection/2342/images`,
    //         options
    //     )
    //         .then((response) => response.json())
    //         .then((response) => setMovieImage(response))
    //         .catch((err) => console.error(err))
    // }
    // useEffect(() => {
    //     getMovieImage()
    //     console.log(movieImage)
    // }, [])

    return (
        <Link to={`/movies/${id}`} className='movie-item'>
            <img className='slider-item' src='' />
            <p>{title}</p>
        </Link>
    )
}

export default MoviesItem
