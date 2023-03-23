import React from 'react'
import '../About/About.css'
import chef from '../../assets/images/chef2.jpg'

const About = () => {
  return (
    <div id='about-bg'>
      <img src={chef} alt='chef' id='chef' />
      <h1 id='about-title'>About Us</h1>
      <h2 id='about-section'>The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. The Chef? Mr. Italiano himself</h2>
    </div>
  )
};
export default About;