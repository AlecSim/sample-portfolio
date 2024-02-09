import "../styles/HeroImg.css";
import BackgroundImg from '../assets/home-bg.jpg';
import { Link } from "react-router-dom";


const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={BackgroundImg} alt="Background-Image" />
            </div>
            <div className="content">
                <p>HI, I'M ALEC JERICHO SIM</p>
                <h2>JUNIOR DEVELOPER</h2>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg