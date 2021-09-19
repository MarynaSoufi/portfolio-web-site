import './WorkContent.css'
import laptop from '../../assets/feest_laptop.png'
import tablet from '../../assets/feest_tablet.png'
import mobile from '../../assets/feest_mobile.png'
import close from '../../assets/close_black_24dp.svg'

const Feest = ({closed, state}) => {
  return (
    <div className={`${state ? 'modal_feest': 'modal_feest--hide '}`}>
      <div className="container content_feest">
        <div className="feest__info-wrapper">
          <h2>Project Name: <span>Gente Feesten</span></h2>
          <h2>Overwiew: <p>Information site of the Ghent Summer Music Festival. Where the user can get acquainted with all the events, view the events for each day, sort by categories, organizers and by day.</p></h2>
          <h2>Used Technologies end Tools: <span>HTML, CSS, JavaScript, ES6, API </span></h2>
        </div>
        <img className="feest__close" onClick={closed} src={close} alt="logo"></img>
    
        <div className="feest__foto-wrapper">
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

export default Feest;
