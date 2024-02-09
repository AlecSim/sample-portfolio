import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutContent.css"
import Right from "../assets/about-right.jpg";
import Left from "../assets/about-left.jpg";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Hi, I'm Alec! 👋</h1>
                <p>
                    I just graduated from a coding bootcamp. Before, I didn't know what I really wanted in my career, but when I experienced coding, I really liked it that's why I decided to take an intensive coding bootcamp to further hone my skills.<br /><br />I used to do Business Process Outsourcing, but now I'm becoming a Full Stack Web Developer. My previous job taught me multitasking and problem-solving, which I want to use for creating user-friendly websites.<br /><br />I'm eager to learn more about the latest web technologies like HTML, CSS, and JavaScript because I enjoy solving problems and I am now aiming to secure a job where I could work and do something that I love at the same time.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact Me</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={Left} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={Right} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
