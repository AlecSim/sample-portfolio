import project1 from "../assets/capstone-1.jpg"
import project2 from "../assets/capstone-2.jpg"
import project3 from "../assets/capstone-3.jpg"
import project4 from "../assets/project-4.jpg"
import project5 from "../assets/project-5.jpg"
import project6 from "../assets/project-6.jpg"

console.log(project1);

const WorkCardData = [
    {
        imgsrc: project1,
        title: 'Capstone 1 (Front-end)',
        text: 'Designed and developed a static responsive website using HTML5, CSS3, Bootstrap, and Git for version control, hosted on GitHub.',
        view: "https://alecsim.github.io/webportfolio/",
    },
    {
        imgsrc: project2,
        title: 'Capstone 2 (Back-end)',
        text: 'Created a suite project including an E-commerce API using JavaScript, MongoDB, Node, and Express JS.',
        view: "https://backend-qs14.onrender.com/product/all",
    },
    {
        imgsrc: project3,
        title: 'Capstone 3 (Full-stack)',
        text: 'Developed a React-based web application with API integration and responsive design, utilizing modern JavaScript techniques and DOM manipulation.',
        view: "https://react-nine-jade.vercel.app/",
    },
    {
        imgsrc: project4,
        title: 'Intro to MySQL',
        text: 'A 20-hour short course covering the fundamentals of relational database design, definition, and manipulation via MySQL.'
    },
    {
        imgsrc: project5,
        title: 'Intro to Java',
        text: ' A 20-hour short course covering the fundamentals of object-oriented programming namely classes, objects, inheritance, composition, abstraction, encapsulation, and polymorphism via the use of Java.'
    },
    {
        imgsrc: project6,
        title: 'Intro to Springboot',
        text: 'A 20-hour short course covering API development via the use of Java Spring Boot.'
    }
];

export default WorkCardData;
