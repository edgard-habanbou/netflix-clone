import React, { useEffect, useState } from "react"
import "./styles.css"
import StickyNav from "../../components/common/StickyNav"
import Hero from "../../components/genre/Hero"
import MoviesCarousel from "../../components/common/MovieCarousel"

function Genre() {
    const [popularMovies, setPopularMovies] = useState([])
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGEyYTgxMjhhNTRmNmNhNDgwYjZkMDg1ZTRiNWVkNyIsInN1YiI6IjY1NWM2ZTc3ZWE4NGM3MTA5NDAzODdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RBECSuDfAnH3YbyjhyJ9AB-Sg-d-a1of88Ikn7hmU6Y",
        },
    }
    const getPopularMovies = async () => {
        return await fetch(
            "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
            options
        )
            .then((response) => response.json())
            .then((response) => setPopularMovies(response.results))
            .catch((err) => console.error(err))
    }
    useEffect(() => {
        getPopularMovies()
    })

    return (
        <div className='genre-page'>
            <StickyNav />
            <Hero />
            {popularMovies.length === 0 ? (
                <MoviesCarousel title={"Loading"} movies={[1, 2, 3, 4]} />
            ) : (
                <MoviesCarousel title={"Popular"} movies={popularMovies} />
            )}
        </div>
    )
}

export default Genre
