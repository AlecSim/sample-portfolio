import "../styles/HeroImg2.css";

export const HeroImg2 = (props) => {
    const { heading, text } = props;
    return (
        <div className="hero-img">
            <div className="heading">
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}
