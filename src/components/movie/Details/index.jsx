import React from "react"
import "./styles.css"

function Details({ genres, audio, cast }) {
    return (
        <div className='movie-details-more'>
            <h3>More Detailes</h3>
            <div className='details-part-1'>
                <div className='details-section'>
                    <p>Watch offline</p>
                    <div>Download and watch everywhere you go</div>
                </div>
                <div className='details-section'>
                    <p>Genres</p>
                    {genres?.map((g) => (
                        <span> {g.name},</span>
                    ))}
                </div>
                <div className='details-section'>
                    <p>Audio</p>
                    <div>
                        {audio?.map((audio, index) => (
                            <span key={index}> {audio.english_name},</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className='details-part-2'>
                <div className='details-section w-100'>
                    <p>Cast</p>
                    <div className='details-section-big'>
                        {cast.slice(0, 11).map((castMember, index) => (
                            <span key={index}>{castMember.name}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
