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
            <div className='movie-wrapper'>
                <div className='movie'>
                    <h1>MOVIE: {}</h1>
                    <h1>TIME: {convertMinutesToHours(Movie.runtime)}</h1>
                    <h1>release_date: {Movie.release_date?.substring(0, 4)}</h1>
                    <h1>overview: {Movie.overview}</h1>
                    <h1>TAGLINE: {Movie.tagline}</h1>
                    <h1>
                        AUDIO:
                        {Movie.spoken_languages?.map((audio, index) => (
                            <p key={index}>{audio.english_name}</p>
                        ))}
                    </h1>
                    <h1>
                        STARRING:
                        {Cast.slice(0, 3).map((castMember, index) => (
                            <p key={index}>{castMember.name}</p>
                        ))}
                    </h1>
                    <div className='movie-background'>
                        <img
                            src={
                                Movie.backdrop_path
                                    ? `https://image.tmdb.org/t/p/original${Movie.backdrop_path}`
                                    : `https://image.tmdb.org/t/p/original${Movie.poster_path}`
                            }
                            width='300px'
                            height='300px'
                            alt={Movie.title}
                        />
                    </div>
                    {MoviePoster ? (
                        <div className='movie-poster'>
                            <img
                                src={`https://image.tmdb.org/t/p/original${MoviePoster}`}
                                alt={Movie.title}
                                width='300px'
                                height='300px'
                            />
                        </div>
                    ) : null}
                </div>

                <div className='upcoming-movies'>
                    <h1>UPCOMING:</h1>
                    {UpcomingMovies.map((UpcomingMovie, index) => (
                        <div key={index}>
                            <h3>{UpcomingMovie?.title}</h3>
                            <p>{UpcomingMovie?.overview}</p>
                        </div>
                    ))}
                </div>
                <div className='related-movies'>
                    <h1>RELATED:</h1>
                    {RelatedMovies.map((relatedMovie, index) => (
                        <div key={index}>
                            <h3>{relatedMovie?.title}</h3>
                            <img
                                src={
                                    relatedMovie.backdrop_path
                                        ? `https://image.tmdb.org/t/p/original${relatedMovie.backdrop_path}`
                                        : `https://image.tmdb.org/t/p/original${relatedMovie.poster_path}`
                                }
                                alt={Movie.title}
                                width='300px'
                                height='300px'
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Movies
