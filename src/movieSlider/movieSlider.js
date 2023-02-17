import './movieSlider.css'
import { useEffect, useState } from 'react';
import MovieCard from '../movieCard/movieCard';
import {lastReleasedRequest} from '../Requests/requests';

const MovieSlider = ()=>{
//a state that contains the movies that were recently released
    const [movies, setMovies] = useState([])

    //takes the results field from the request info and places is it the state
    const resultHandler = async()=>{
        const data = await lastReleasedRequest();
        setMovies(data.results)
    }

    useEffect(()=>{
        resultHandler();
    },[])

    return(
        <div className="slider">
            <h2 className="slider_header">Last Released</h2>
            <div className="slider_container">
                <div className="slider_body">
                {
                    movies.map((e, i)=>{
                        return(
                            <MovieCard data={e} key={i}/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default MovieSlider;