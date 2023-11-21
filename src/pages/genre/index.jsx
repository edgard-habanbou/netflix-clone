import React, { useEffect, useState } from "react"
import "./styles.css"
import StickyNav from "../../components/common/StickyNav"
import Hero from "../../components/genre/Hero"
import MoviesCarousel from "../../components/common/MovieCarousel"
import Footer from "../../components/common/Footer"

function Genre() {
    let moviesByGenre
    const [popularMovies, setPopularMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [carouselList, setcarouselList] = useState([])
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
            .then((response) => response.genres)
            .then((res) => {
                return res
            })
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
        const fetchMoviesByGenre = async (genre) => {
            try {
                const CarouselData = await getMoviesByGenre(genre.id)
                setcarouselList((prevCarousel) => [
                    ...prevCarousel,
                    { genreTitle: genre.name, movies: CarouselData },
                ])
            } catch (error) {
                console.error(`Error fetching movies for ${genre}:`, error)
            }
        }
        genres.forEach((genre) => {
            fetchMoviesByGenre(genre)
        })
        console.log(carouselList)
    }, [genres])
    useEffect(() => {
        const getAPI = async () => {
            await getPopularMovies()
        }
        const fetchGenres = async () => {
            let test = await getGenres()
            setGenres(test)
        }
        fetchGenres()
        getAPI()
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
            {carouselList.map((carousel) => {
                return (
                    <MoviesCarousel
                        title={carousel.genreTitle}
                        movies={carousel.movies}
                    />
                )
            })}
            <Footer />
        </div>
    )
}

export default Genre
