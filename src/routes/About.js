import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HeroImg2 } from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 /* heading="ABOUT." */ text="A career shifter and now in the world of web development as a full stack developer." />
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About