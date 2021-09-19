import React from 'react'
import laptop from '../../assets/arne_laptop.png'
import tablet from '../../assets/arne_tablet.png'
import mobile from '../../assets/arne_mobile.png'
import close from '../../assets/close_black_24dp.svg'

const Arne = ({closed, state}) => {
  return (
    <div className={`${state ? 'modal_arne': 'modal_arne--hide '}`}>
      <div className="container content_arne">
        <div className="arne__info-wrapper">
          <h2>Project Name: <span>Arne Quinze</span></h2>
          <h2>Overwiew: <p>Web site of a contemporary Belgian artist and sculptor. Where you can find out his biography and see his work. For the convenience of the user, the artist's work can be sorted by year of creation and by category.</p></h2>
          <h2>Used Technologies end Tools: <span>HTML, CSS, JavaScript, JSON</span></h2>
        </div>
          <img className="arne__close" onClick={closed} src={close} alt="logo"></img>
    
        <div className="arne__foto-wrapper">
          <div>
            <img src={mobile} alt="logo"></img>
          </div>
          <div>
            <img src={tablet} alt="logo"></img>
          </div>
          <div>
            <img src={laptop} alt="logo"></img>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}



export default Arne;
