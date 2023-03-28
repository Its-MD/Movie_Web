import './MOTD.css'
import {randomMovieRequest} from '../Requests/requests';
import { useEffect, useState } from 'react';
import picUnavaliable from '../movieCard/picUnavaliable.png'

const MOTD = ()=>{
    const[movie, setMovie] = useState();
    const[image, setImage] = useState();

    //original way of state
    // const state = useState()
    // const value = state[0]
    // const valueFunction = state[1]

    //checks if there's a backdrop avaliable
    const backdropHandler = (result)=>{
        if (result == null){
            return picUnavaliable
        }
        else{
            return `https://image.tmdb.org/t/p/w1280/${result}`
        }
    }

    useEffect(()=>{
        //takes reponse from req
        let answer = randomMovieRequest().then((res)=>{
            //result contaions the info of the movie
            const result = getMovieRandID(res.results)
            //puts the info in state so we can use it outside of fetch
            setMovie(result);
            //places picture inside state
            setImage(backdropHandler(result.backdrop_path))
        });
    }, [])
    return(
        <div className="MOTD_Cont">
            <div className="MOTD_Content">
                <h2 className="MOTD_Title">Movie Of The Day</h2>
                <p className="MOTD_MovieTitle">{movie?.title}</p>
            </div>
            <img src={image} className="MOTD_Img" />
        </div>
    )
}
export default MOTD;

// gets random movie id from the array that contains movies from the random page
const getMovieRandID = (arr)=>{
    let id = Math.floor(Math.random() * (arr.length - 0 + 1)) + 0;
    return(arr[id])
}

//add year of realse and rating + add blur 