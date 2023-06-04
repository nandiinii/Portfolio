import React from 'react';
import styles from "./LandingPage.css";
import myself from "../../assets/myself.jpg"
import Navbar from '../../components/Navbar/Navbar';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineCopyright} from 'react-icons/ai';

const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <div className='landing__content'>
      <div className='landing__about'>
        <div className='left__contents'>
          <img src={myself}></img>
        </div>
        <div className='right__content'>
            <div className='about_me'>About me</div>
            <div className='Intro_content'>I'm Nandini P, <div>a Full-Stack Developer</div></div>
        </div>
      </div>
      <div className='college__detail'>
        <div>Nandini P is a B.Tech Computer Science Engineering student</div>
        <div>attending Govt. Model Engineering College,</div>
        <div>Kochi.</div> 
        <div>
          <a href='https://drive.google.com/file/d/1lZZF3SGrQxamblbx5CZrALD7baieQfRy/view?usp=sharing' target="_blank"
          rel="noreferrer">
          <button>
            View Resume
          </button>
          </a>
        </div>
      </div>
      <div className='footer__contents'>
        <div className='footer__left'>
          <div className='visit__content'>Thanks for Visiting!</div>
          <div className='footer__name'><AiOutlineCopyright size={10}/>2023 by Nandini P</div>
        </div>
        <div className='footer__right'>
          <a href="https://www.instagram.com/__.nandiiniii.__/" class="instagram-icon" target="_blank"
          rel="noreferrer">
            <AiOutlineInstagram size={30} color='#103980'/>
          </a>
          <a href="https://www.linkedin.com/in/nandini-p-8388b3250/" class="linkedin-icon" target="_blank"
          rel="noreferrer">
            <AiOutlineLinkedin size={30} color='#103980'/>
          </a>
          <a href="https://github.com/nandiinii" class="github-icon" target="_blank"
          rel="noreferrer">
            <AiOutlineGithub size={30} color='#103980'/>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingPage