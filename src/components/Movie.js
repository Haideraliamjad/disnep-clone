import React from 'react'
import "./Movie.css"
import { Link } from 'react-router-dom'
const Movie = ({link,img}) => {
    return (
        <Link to={link}>
        <div className="moviebox">
            <img src={img} alt="movie-poster" className="movies" />
        </div>
        </Link>
    )
}

export default Movie
