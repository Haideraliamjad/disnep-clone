import React from 'react'
import "./Detail.css"
const Detail = () => {
    return (
        <div className="moviedetail">
            <div className="detail-box">
                <div className="img-box">
                    <img src="images/avangers-logo.png" className="img-movie" />
                </div>
                <div className="movie-description">
                    <div className="buttons-section">
                        <button className="primary-button"><img width="20" height="20" src="images/play-icon-black.png" alt="res" />Resume</button>
                        <button className="secandory-button"><img width="20" height="20" src="images/play-icon-white.png" alt="res" />Play Trailer</button> 
                    </div>
                    <p className="movie_deta">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Detail
