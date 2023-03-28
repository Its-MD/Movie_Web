import './mainMD.css';
import PosterReview from '../Poster&Review/posterReview'
import AllDetails from '../AllDetails/allDetails';
import Actors from  '../Actors/actors';
import { useEffect, useState } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import {specificMovieRequest} from '../../Requests/requests';

const MainMD = ()=>{
// useSelector returns state or part of state 
const id = useSelector((state)=>{
    //the id part is from store.js
    return state.id
})

const nav = useNavigate()
const[requestData, setRequestData] = useState();

useEffect(()=>{
    let answer = specificMovieRequest(id).then((res)=>{
        if(res != null){
            setRequestData(res)
        }
        else{
            nav("/")
        }
    });
},[])
console.log(requestData)
if(requestData==undefined){
    return null
}
return(
        <div className="movieDetailsBg">
            <div className="movieDetailsBackdrop">
                <img src={`https://image.tmdb.org/t/p/w1280/${requestData.info.backdrop_path}`} alt="" />
                <div className="gradient">
                </div>
            </div>
            <div className="movieDetailsCont">

                <PosterReview data={requestData}/>

                <AllDetails data={requestData}/>

                <Actors data={requestData}/>

            </div>
        </div>
    )
}
export default MainMD;