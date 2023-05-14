import { popularActorsRequest } from "../Requests/requests";
import { useEffect, useState } from "react";
import "./AOTD.css";
import picUnavaliable from "../movieCard/picUnavaliable.png";

const AOTD = () => {
  const [actor, setActor] = useState();
  const [image, setImage] = useState();

  const backdropHandler = (result) => {
    if (result == null) {
      return picUnavaliable;
    } else {
      return `http://image.tmdb.org/t/p/original${result}`;
    }
  };

  useEffect(() => {
    let answer = popularActorsRequest().then((res) => {
      const result = getActorRandID(res.results);
      setActor(result);
      setImage(backdropHandler(result.profile_path));
    });
  }, []);

  return (
    <div className="AOTD_Container">
      <div className="AOTD_Content">
        <h2 className="AOTD_Title">Actor Of The Day</h2>
        <p className="AOTD_ActorName">{actor?.name}</p>
        <p className="AOTD_ActorRate">🔥{Math.round(actor?.popularity)}</p>
      </div>
      <img src={image} className="AOTD_Img" />
    </div>
  );
};
export default AOTD;

// gets random actor id from the array that contains movies from the random page
const getActorRandID = (arr) => {
  let id = Math.floor(Math.random() * (arr.length - 0 + 1)) + 0;
  return arr[id];
};
