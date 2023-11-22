import React from "react"
import "./styles.css"

function CommingSoon({ movies }) {
    return (
        <section className='comming'>
            <h3>Comming Soon</h3>
            <div className='comming-grid'>
                {movies?.map((m, index) => {
                    return (
                        <div className='comming-grid-item' key={index}>
                            <h5>{m?.title}</h5>
                            <p>{m?.overview}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default CommingSoon
