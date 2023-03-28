import { useState } from 'react';
import './actors.css';
import arrowIcon from './icons/rightArrowIconColor.png'

const Actors = ({data})=>{
    const [itemsOnPage, setItemsOnPage] = useState(4);
    
    const btnStylesHandler = ()=>{
        return itemsOnPage==data.cast.cast.length?"buttonWrap btnHide": "buttonWrap"
    }

    return(
        <div className="movieActorsCont">
            <h2 className="actorsHeader">Cast & Crew</h2>
            <div className="actorsCont">
                {
                    data.cast.cast.map((e,i)=>{
                        return i<itemsOnPage?(
                        <div className="actor_item" key={i}>
                        <div className="imageWrapper">
                            <img src={`http://image.tmdb.org/t/p/h632/${e.profile_path}`} className="actorImg"/>
                        </div>
                        <div className="actor_item_text">
                            <p className="actorName">{e.name}</p>
                            <p className="actorRole">{e.character}</p>
                        </div>
                        </div>):null
                    })
                }
            </div>

            <div className={btnStylesHandler()} onClick={()=>{
                    if(itemsOnPage<data.cast.cast.length){
                        if(data.cast.cast.length-itemsOnPage<10){
                            setItemsOnPage((prev)=>{
                                return prev+data.cast.cast.length-itemsOnPage
                            })
                        }
                        else{
                            setItemsOnPage((prev)=>{
                                return prev+10
                            })
                        }
                    }
                }}>
                <button className="showAllBtn">Show All</button>
                <img src={arrowIcon} className="showBtnIcon" />
            </div>

        </div>
    )
}
export default Actors;