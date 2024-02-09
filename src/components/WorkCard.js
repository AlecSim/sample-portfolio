import "../styles/WorkCard.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
    const { imgsrc, title, text, view } = props;

    return (
        <div className="project-card">
            <img src={imgsrc} alt="image" />
            <h2 className="project-title">{title}</h2>
            <div className="pro-details">
                <p>{text}</p>
                <div className="pro-btns">
                    {view && <NavLink to={view} className="btn">Source</NavLink>}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
