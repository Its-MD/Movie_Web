import './allDetails.css';
import SaveIcon from './icons/save.png'
import ShareIcon from './icons/share.png'


const AllDetails = ({data})=>{
    return(
        <div className="movieAllDetsCont">
            <div className="mainInfo">

                <h2 className="detailsTitle">{data.info.title}</h2>

                <div className="underTitleCont">
                    <p className="year">{data.info.release_date.slice(0, 4)}</p>
                </div>

                <div className="buttonsCont">
                    <button className="trailer detailsBtn">Watch Trailer</button>
                    <button className="save detailsBtn"><img src={SaveIcon}/></button>
                    <button className="share detailsBtn"><img src={ShareIcon}/></button>
                </div>

                <p className="detsDesc">{data.info.overview}</p>

                <div className="specsCont">
                    <p className="specHeader">Details</p>

                    <div className="spec_genresCont underlineItem">
                        <p className="spec_genre_title">Genres</p>
                        
                        {
                            data.info.genres.map((e,i)=>{
                                return <p className="spec_genres_item" key={i}>{e.name}</p>
                            })
                        }
                    </div>

                    <div className="spec_origin underlineItem">
                        <p className="origin_title">Country of origin</p>
                        <p className="origin ULItem_value">{data.info.production_countries[0].name}</p>
                    </div>

                    <div className="spec_runtime underlineItem">
                        <p className="runtime_title">Runtime</p>
                        <p className="runtime ULItem_value">{data.info.runtime} minutes</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AllDetails;