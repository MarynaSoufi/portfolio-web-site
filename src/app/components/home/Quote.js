import React from 'react'
import './Quote.css'
import icon from '../../assets/developer.svg'
const Quote = () => {
  return (
    <div className="container">
      <div className="back">
        <div className="quote__wrapper ">
            <img className="image" src={icon} alt="developer_icon"></img>
              <q className="quote">
                <strong>Hi, I’m Maryna Soufi. Nice to meet you.</strong> <br/>I am a growing, ambitious and promising JavaScript Developer! I love my job and I am a JavaScript fan.
                When I do not click on the pixels, you will find that I am spending time with my family, walking with my dog, or doing sports.
              </q>
        </div>
      </div>
   
      
    </div>
   
  )
}

export default Quote;
