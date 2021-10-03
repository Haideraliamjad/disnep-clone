import "./Home.css"
import Sliders from "./Sliders" 
import Brand from "./Brand"; 
import Movie from "./Movie"
const Home = () => 
{
    return (
        <div className="home-container">
            <Sliders/> 
            <div className="brands-section">
                <Brand images="images/viewers-disney.png"/> 
                <Brand images="images/viewers-pixar.png"/> 
                <Brand images="images/viewers-national.png"/> 
                <Brand images="images/viewers-starwars.png"/> 
                <Brand images="images/viewers-marvel.png"/> 
            </div>
            <h2 className="section-heading">Originals</h2> 
            <div className="movies-section">
                <Movie link="/details" img="images/poster1.jpeg"/> 
                <Movie link="/details" img="images/poster2.jpg"/> 
                <Movie link="/details" img="images/poster3.jpg"/> 
                <Movie link="/details" img="images/poster4.jpg"/> 
            </div>
        </div>
    );

}
export default Home;