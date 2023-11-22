import React, { useEffect, useState } from "react"
import "./styles.css"
import StickyNav from "../../components/common/StickyNav"
import Hero from "../../components/genre/Hero"
import MoviesCarousel from "../../components/common/MovieCarousel"
import Footer from "../../components/common/Footer"
import { options } from "../../api/options"
import { getMoviesByGenre } from "../../api/get-movies-by-genre"
import { getGenres } from "../../api/get-genres"
import { getPopularMovies } from "../../api/get-popular-movies"

const Genre = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const [carouselList, setcarouselList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const PopularMovies = await getPopularMovies(options)
                setPopularMovies(PopularMovies)

                const genres = await getGenres(options)

                const carouselPromises = genres.map(async (genre) => {
                    const CarouselData = await getMoviesByGenre(
                        genre.id,
                        options
                    )
                    return { genreTitle: genre.name, movies: CarouselData }
                })

                const carousels = await Promise.all(carouselPromises)
                setcarouselList(carousels)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
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
            {carouselList.map((carousel, index) => (
                <MoviesCarousel
                    key={index}
                    title={carousel.genreTitle}
                    movies={carousel.movies}
                />
            ))}
            <Footer />
        </div>
    )
}

export default Genre
