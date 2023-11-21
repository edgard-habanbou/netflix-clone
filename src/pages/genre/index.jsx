import React, { useEffect, useState } from "react"
import "./styles.css"
import StickyNav from "../../components/common/StickyNav"
import Hero from "../../components/genre/Hero"
import MoviesCarousel from "../../components/common/MovieCarousel"

function Genre() {
    const [popularMovies, setPopularMovies] = useState([])
    const [genres, setGenres] = useState([])
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGEyYTgxMjhhNTRmNmNhNDgwYjZkMDg1ZTRiNWVkNyIsInN1YiI6IjY1NWM2ZTc3ZWE4NGM3MTA5NDAzODdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RBECSuDfAnH3YbyjhyJ9AB-Sg-d-a1of88Ikn7hmU6Y",
        },
    }
    const getGenres = async () => {
        return await fetch(
            "https://api.themoviedb.org/3/genre/movie/list?language=en",
            options
        )
            .then((response) => response.json())
            .then((response) => setGenres(response))
            .catch((err) => console.error(err))
    }
    const getPopularMovies = async () => {
        return await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            options
        )
            .then((response) => response.json())
            .then((response) => setPopularMovies(response.results))
            .catch((err) => console.error(err))
    }
    const getMoviesByGenre = async (genre_id) => {
        return await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre_id}`,
            options
        )
            .then((response) => response.json())
            .then((response) => response.results)
            .catch((err) => console.error(err))
    }
    useEffect(() => {
        getPopularMovies()
        getGenres()

        console.log(genres)
    }, [])

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
