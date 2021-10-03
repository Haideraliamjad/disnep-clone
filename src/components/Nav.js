import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
const Nav = () => {
    return (
        <nav className="navegation">
            <div className="wrapper">
            <Link to="/"><img className="logo" src="images/logo.svg" alt="logo" /> </Link>
            <div className="links">
                <Link to="/" className="link"><img className="icon" src="images/home-icon.svg" alt="Home"/><span>Home</span></Link>
                <a href="/" className="link"><img className="icon" src="images/search-icon.svg" alt="Search"/><span>Search</span></a>
                <a href="/" className="link"><img className="icon" src="images/watchlist-icon.svg" alt="WatchList"/><span>WatchList</span></a>
                <a href="/" className="link"><img className="icon" src="images/original-icon.svg" alt="Orignals"/><span>Orignals</span></a>
                <a href="/" className="link"><img className="icon" src="images/movie-icon.svg" alt="Movies"/><span>Movies</span></a>
                <a href="/" className="link"><img className="icon" src="images/series-icon.svg" alt="Searies"/><span>Series</span></a>
            </div>
            </div>
            <img src="images/user.jpg" alt="user" className="user" />
        </nav>
    )
}
export default Nav
