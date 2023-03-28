import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import picUnavaliable from './picUnavaliable.png'
import { Link, useNavigate } from 'react-router-dom';
import { store } from '../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { passId } from '../Redux/idSlice';

const MovieCard=({data, isInSlider})=>{
    const dispatch = useDispatch();
    const nav = useNavigate();

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
        <div className={isInSlider?"movieCard":"slider_item"} onClick={()=>{
            nav(`/movieID`)
            //dispatch - this function starts the store changes (it gets action and calls reducer with this action inside)
            //passId - Action creator (it's function return object(action) with 2 fields type and payload), type is static but payload can be dynamic and then we need to put it on function argument
            //data.id - this is the new value for state, this value is stored in action.payload
            //this is a cample of redux action
            // const action = {
            //     type:'idName/passId',
            //     payload: data.id
            // }
            //this is a sample of action creator
            // const passIdAC = (payload) => ({
            //     type:'idName/passId',
            //     payload: payload
            // })
            dispatch(passId(data.id))
        }}>
            <img src={resultBackdrop()} className="mainPic" />

            <div className="movieDesc">
                <p className="movieTitle">{data.title}</p>

                <div className="detailsCont">
                    <p className="year">{data.release_date.slice(0, 4)}</p>
                    <p className="rating"><FontAwesomeIcon icon={faStar} className="ratingStar"/> {data.vote_average}</p>
                </div>

            </div>
        </div>
    )
}
export default MovieCard;