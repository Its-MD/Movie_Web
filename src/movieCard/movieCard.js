import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import picUnavaliable from './picUnavaliable.png'

const MovieCard=({data, isInSlider})=>{

    //checks if there's a backdrop avaliable
    const resultBackdrop = ()=>{
        if(data.backdrop_path == null){
            return picUnavaliable
        }
        else{
            return `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
        }
    }

    return(
        <div className={isInSlider?"movieCard":"slider_item"}>
            <img src={resultBackdrop()} className="mainPic" />

            <div className="movieDesc">
                <p className="movieTitle">{data.original_title}</p>

                <div className="detailsCont">
                    <p className="year">{data.release_date.slice(0, 4)}</p>
                    <p className="rating"><FontAwesomeIcon icon={faStar} className="ratingStar"/> {data.vote_average}</p>
                </div>

            </div>
        </div>
    )
}
export default MovieCard;