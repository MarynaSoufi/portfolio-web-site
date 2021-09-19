import './WorkContent.css'
import laptop from '../../assets/movie_laptop.png'
import tablet from '../../assets/movietablet.png'
import mobile from '../../assets/moviemobile.png'
import close from '../../assets/close_black_24dp.svg'
const Movie = ({closed, state}) => {
 
  return (
    <div className={`${state ? 'modal_movie': 'modal_movie--hide '}`}>
      <div className="container content_movie">
        <div className="movie__info-wrapper">
            <h2>Project Name: <span>Movie Application</span></h2>
            <h2>Overwiew: <p>A film search application where the user can see a selection of popular films and current trends, search for a specific film by title and filter the result by genre, rating, and keywords.
          </p></h2>
            <h2>Used Technologies end Tools: <span>React, Firebase </span></h2>
        </div>
        
          <img className="movie__close" onClick={closed} src={close}></img>
    
        <div className="movie__foto-wrapper">
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

export default Movie;
