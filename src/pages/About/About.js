import React from 'react';
import styles from "./About.css";
import Navbar from '../../components/Navbar/Navbar';
import circle from "../../assets/myself1.png";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='about__main'>
      <div className='box__container'>
          <div className='box__left'>
          <div className='about__heading'>
            <h1>A little about me.</h1>
          </div>
          <div>
            <img src={circle}></img>
          </div>
         </div>
        <div>
          <h2>Nandini P</h2>
          <p>Hello! I'm Nandini P, a passionate and dedicated individual in the field of computer science. 
            I'm thrilled to have the opportunity to share a bit about myself with you.
            I am a Computer Science undergraduate, currently pursuing my degree. 
            I have a strong academic foundation and a keen interest in exploring the vast world of technology.
          </p>
          <p>
          Throughout my academic journey, I have gained practical experience through internships and projects. 
          These experiences have allowed me to apply my knowledge and enhance my skills in various areas of computer science.
          I possess a diverse set of skills, including programming languages like Python, Java, and C++.
          I have experience with web development technologies such as HTML, CSS, and JavaScript. 
          Additionally, I am proficient in database management and have a strong understanding of software engineering principles.
          </p>
          <p>
          Beyond my academic pursuits, I have a deep passion for problem-solving and creating innovative solutions. 
          I enjoy staying updated with the latest advancements in technology and exploring new programming concepts. 
          In my free time, I also indulge in creative activities like designing and developing personal projects.
          My goal is to leverage my skills and knowledge to contribute to the ever-evolving field of computer science. 
          I aspire to work in a challenging and dynamic environment where I can collaborate with like-minded individuals and make a positive impact through innovative technological solutions.
          </p>
          <p>
          Thank you for taking the time to learn more about me. 
          I am excited about the opportunities that lie ahead, and I look forward to connecting with others who share a passion for technology and innovation. 
          Feel free to explore my portfolio to learn more about my projects and achievements.
          If you need any further information or have any questions, please don't hesitate to reach out.
          </p>
        </div>
        <div>
          <h2>
            I have experience with...
          </h2>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>Machine Learning Algorithms</li>
          <li>Model Training</li>
        </div>
      </div>
    </div>
    </>
  )
}

export default About