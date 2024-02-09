import Work from "../components/Work";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HeroImg2 } from "../components/HeroImg2";
// import { PricingCard } from "../components/PricingCard";

const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 /* heading="PROJECTS" */ text="The projects I worked on when I was in Zuitt." />
            <Work />
            {/* <PricingCard /> */}
            <Footer />
        </div>
    )
}

export default Project