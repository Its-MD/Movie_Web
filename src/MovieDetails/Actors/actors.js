import './actors.css';

const Actors = ()=>{
    return(
        <div className="movieActors">
            <h2 className="actorsHeader">Cast</h2>
            <div className="actorsCont">

                <div className="actor_item">
                    <img src="" className="actorProfile"/>
                    <p className="actorName">John Doe</p>
                    <p className="actorRole">JD JD</p>
                </div>

                <div className="actor_item">
                    <img src="" className="actorProfile"/>
                    <p className="actorName">John Doe</p>
                    <p className="actorRole">JD JD</p>
                </div>


            </div>
            <button className="showAll">Show All</button>
        </div>
    )
}
export default Actors;