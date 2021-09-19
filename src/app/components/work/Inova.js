import './WorkContent.css'
import laptop from '../../assets/inova_laptop.png'
import tablet from '../../assets/inova_tablet.png'
import mobile from '../../assets/inova_mobile.png'
import close from '../../assets/close_black_24dp.svg'

const Inova = ({closed, state}) => {
  return (
    <div className={`${state ? 'modal_inova': 'modal_inova--hide '}`}>
      <div className="container content_inova">
        <div className="inova__info-wrapper">
          <h2>Project Name: <span>Inova</span></h2>
          <h2>Overwiew: <p>Website for a digital agency, where the user can get acquainted with the basic services of the agency, look at previously completed orders and get acquainted with the team of employees.</p></h2>
          <h2>Used Technologies end Tools: <span>Eleventy, Nunjucks, Sass, Bootstrap, JavaScript, GitFlow </span></h2>
        </div>
        <img className="inova__close" onClick={closed} src={close} alt="logo"> </img>
    
        <div className="inova__foto-wrapper">
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

export default Inova;
