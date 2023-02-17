import './allDetails.css';


const AllDetails = ()=>{
    return(
        <div className="movieAllDetsCont">
            <div className="mainInfo">

                <h2 className="movieTitle">Movie</h2>

                <div className="underTitleCont">
                    <p className="year">2023</p>
                </div>

                <div className="buttonsCont">
                    <button className="trailerBtn">Watch Trailer</button>
                    <button className="saveBtn">Save</button>
                    <button className="shareBtn">Share</button>
                </div>

                <p className="movieDesc">blah blah blah</p>

                <div className="specs">
                    <p className="specHeader">Details</p>

                    
                    {
                        //better to do span? or if possible p inside p
                    }
                    <div className="spec_genres">
                        <p className="spec_genres_item">Drama</p>
                        <p className="spec_genres_item">Crime</p>
                        <p className="spec_genres_item">Action</p>
                    </div>

                    <div className="spec_origin">
                        <p className="origin_title">Country of origin: </p>
                        <p className="origin">Canada</p>
                    </div>

                    <div className="spec_runtime">
                        <p className="runtime_title">Runtim: </p>
                        <p className="runtime">90 min</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AllDetails;