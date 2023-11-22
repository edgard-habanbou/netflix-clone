import React from "react"
import MovieItem from "../../common/MoviesItem"

import "./styles.css"
import { Link } from "react-router-dom"

function RelatedMovies({ movies }) {
    return (
        <section className='related-movies'>
            <h3>More LikeThis</h3>
            <div className='movies-grid'>
                {movies?.map((movie, i) => {
                    return (
                        <div className='movie-item'>
                            <Link to={`/movies/${movie.id}`}>
                                <img
                                    className='movie-item'
                                    key={i}
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default RelatedMovies
