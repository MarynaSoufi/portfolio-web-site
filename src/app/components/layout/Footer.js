import React from 'react'
import './Footer.css'
import { SiInstagram, SiGithub, SiLinkedin, SiMinutemailer } from 'react-icons/si'
import { BiMobileVibration } from 'react-icons/bi'
const Footer = () => {
  return (
    <footer>
      <div  className ="container">
        <div className="wrapper">
          <div>
            <p className="text">My social media</p>
            <ul className="list"> 
              <li>
                <a href=""> <SiInstagram/></a>
              </li>
              <li>
                <a href=""><SiGithub/></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/marina-soufi-2a19581b7/"><SiLinkedin/></a>
              </li>
            </ul>
          </div>

          <div className="contact">
          <p className="text">Contact me</p>
            <ul className="contact__list">
              <li>
                <SiMinutemailer/>
                <a href="mailto:xysamemir@gmail.com">xysamemir@gmail.com</a>
              </li>
              <li>
                <BiMobileVibration/>
                <a href="tel:0486952762">0486952762</a>
              </li>
            </ul>
          </div>
        </div>
       
      
    
     
        <div className="copyright"><p>&copy; Maryna Soufi</p></div>
      </div>
     
    </footer>
  )
}

export default Footer;
