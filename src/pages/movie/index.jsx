import React, { useEffect, useState } from "react"
import StickyNav from "../../components/common/StickyNav"
import Footer from "../../components/common/Footer"
import Hero from "../../components/movie/Hero"
import Details from "../../components/movie/Details"
import RelatedMoviesSection from "../../components/movie/RelatedMovies"
import { useParams } from "react-router-dom"
import { GetMovieById } from "../../api/get-movie-by-id"
import { getRelatedMovies } from "../../api/get-related-movies"
import { GetUpcomingMovies } from "../../api/get-upcoming-movies"
import { GetMoviePoster } from "../../api/get-movie-poster"
import { GetCast } from "../../api/get-movie-credits"
import "./styles.css"
import CommingSoon from "../../components/movie/Comming Soon"

const Movies = () => {
    const { movieID } = useParams()
    const [Movie, setMovie] = useState([])
    const [RelatedMovies, setRelatedMovies] = useState([])
    const [UpcomingMovies, setUpcomingMovies] = useState([])
    const [MoviePoster, setMoviePoster] = useState([])
    const [Cast, setCast] = useState([])
    function convertMinutesToHours(minutes) {
        var hours = Math.floor(minutes / 60)
        var remainingMinutes = minutes % 60
        return hours + "h " + remainingMinutes + "m"
    }
    useEffect(() => {
        const fetchData = async () => {
            const Movie = await GetMovieById(movieID)
            setMovie(Movie)

            const UpcomingMovies = await GetUpcomingMovies()
            setUpcomingMovies(UpcomingMovies)

            const RelatedMovies = await getRelatedMovies(movieID)
            setRelatedMovies(RelatedMovies)

            const MoviePoster = await GetMoviePoster(movieID)
            setMoviePoster(MoviePoster[0].file_path)

            const Cast = await GetCast(movieID)
            setCast(Cast)
            console.log(RelatedMovies)
        }

        fetchData()
    }, [movieID])

    return (
        <div className='movie-page'>
            <StickyNav />
            <Hero
                img={
                    Movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/original${Movie.backdrop_path}`
                        : `https://image.tmdb.org/t/p/original${Movie.poster_path}`
                }
                title={Movie.title}
                logo={`https://image.tmdb.org/t/p/original${MoviePoster}`}
                releaseDate={Movie.release_date?.substring(0, 4)}
                duration={convertMinutesToHours(Movie.runtime)}
                genre={Movie.genres}
                overview={Movie.overview}
                cast={Cast}
            />
            <section className='movie-tagline'>
                <div className='tagline-line'></div>
                <p>{Movie.tagline}</p>
                <div className='tagline-line'></div>
            </section>
            <Details
                genres={Movie.genres}
                audio={Movie.spoken_languages}
                cast={Cast}
            />
            <RelatedMoviesSection movies={RelatedMovies} />
            <CommingSoon movies={UpcomingMovies} />
            <Footer />
        </div>
    )
}

export default Movies
