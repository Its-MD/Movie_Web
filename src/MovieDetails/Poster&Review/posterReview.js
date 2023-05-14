import './posterReview.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import picUnavaliable from '../../movieCard/picUnavaliable.png'

const PosterReview = ({data})=>{

    const progressbarStyles = buildStyles({
        trailColor: "#000",
        pathColor: "#FF5409",
        textColor: "#F2F2F2",
        textSize: "30px"
    })

    const posterHandler = (result)=>{
        if (result == null){
            return picUnavaliable
        }
        else{
            return `https://image.tmdb.org/t/p/original${result}`
        }
    }

    return(
        <div className="PRCont">
            <img src={posterHandler(data.info.poster_path)} className="moviePoster"/>
            <div className="rateCont">
                <div className="progressBar">                    
                    <CircularProgressbar value={data.info.vote_average} text={data.info.vote_average.toFixed(1)} maxValue={10} styles={progressbarStyles}/>
                </div>
                <p className="totalRateCont"><span className="rateNum">{data.info.vote_count} </span> RATINGS</p>
            </div>
        </div>
    )
}

export default PosterReview;