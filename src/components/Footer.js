import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <h4><FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />Lambakin, Marilao, Bulacan</h4>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+63-936-9333-960</h4>
                    </div>
                    <div className='phone'>
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />simalecjericho@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>Professional Profiles</h4>
                    <p>
                        I'm a passionate web developer from the Philippines, bringing you web development and design from the future.
                    </p>
                    <div className='social'>
                        <NavLink to="https://www.facebook.com/weqrrrr" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to="https://www.instagram.com/alecjerichosim/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to="https://twitter.com/AmazingAIec" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to="https://www.linkedin.com/in/alecjerichosim/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to="https://github.com/AlecSim" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
