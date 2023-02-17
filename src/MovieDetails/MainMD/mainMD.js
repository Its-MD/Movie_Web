import './mainMD.css';
import PosterReview from '../Poster&Review/posterReview'
import AllDetails from '../AllDetails/allDetails';
import Actors from  '../Actors/actors'
import {getMovie} from '../requests.js';
import { useEffect, useState } from 'react';


const MainMD = ()=>{
    return(
        <div className="movieDetailsBg">
            <div className="movieDetailsCont">

                <PosterReview/>

                <AllDetails/>

                <Actors/>

            </div>
        </div>
    )
}
export default MainMD;