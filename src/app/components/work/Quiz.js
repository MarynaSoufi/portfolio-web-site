import './WorkContent.css'
import laptop from '../../assets/quizlaptop.png'
import tablet from '../../assets/quiz_tablet.png'
import mobile from '../../assets/quiz_mobile.png'
import close from '../../assets/close_black_24dp.svg'
const Quiz = ({closed, state}) => {
 
  return (
    <div className={`${state ? 'modal_quiz': 'modal_quiz--hide '}`}>
      <div className="container content_quiz">
        <div className="quiz__info-wrapper">
            <h2>Project Name: <span>Developer Quiz</span></h2>
            <h2>Overwiew: <p>Quiz web application in which the user sets the level of difficulty, the number of questions and one of the proposed topics for testing. Each question is given 15 seconds. At the end of the quiz, the userwill se an overview:
            <br/>- All questions and correct answers to them<br/>-Own answers<br/>-Score</p></h2>
            <h2>Used Technologies end Tools: <span>HTML, CSS, JavaScript, ES6 </span></h2>
        </div>
        
          <img className="quiz__close" onClick={closed} src={close}></img>
    
        <div className="quiz__foto-wrapper">
          <div>
            <img src={mobile}></img>
          </div>
          <div>
            <img src={tablet}></img>
          </div>
          <div>
            <img src={laptop}></img>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Quiz;
