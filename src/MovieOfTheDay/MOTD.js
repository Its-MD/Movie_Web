import "./MOTD.css";
import { useEffect, useState } from "react";
import picUnavaliable from "../movieCard/picUnavaliable.png";
import { useDispatch } from "react-redux";
import { removeLoading } from "../Redux/loadingSlice";
import Loader from "../Loader/loader";

const MOTD = ({ reqData }) => {
  const [movie, setMovie] = useState();
  //   const [image, setImage] = useState();

  const dispatch = useDispatch();

  //original way of state
  // const state = useState()
  // const value = state[0]
  // const valueFunction = state[1]

  //checks if there's a backdrop avaliable
  const backdropHandler = (url) => {
    if (url == null) {
      return picUnavaliable;
    } else {
      return `https://image.tmdb.org/t/p/original${url}`;
    }
  };

  useEffect(() => {
    //puts the info in state so we can use it outside of fetch
    setMovie(reqData);
    //places picture inside state
    dispatch(removeLoading());
  }, [reqData]);

  return (
    <div className="MOTD_Cont">
      <div className="MOTD_Content">
        <h2 className="MOTD_Title">Movie Of The Day</h2>
        <p className="MOTD_MovieTitle">{movie?.title}</p>
      </div>
      {reqData.length === 0 ? (
        <p>...</p>
      ) : (
        <img
          src={backdropHandler(reqData.backdrop_path)}
          className="MOTD_Img"
        />
      )}
    </div>
  );
};
export default MOTD;
