import "./watching.css";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../Firebase/config";
import { useEffect, useState } from "react";
import picUnavaliable from "../movieCard/picUnavaliable.png";
import { toggleTheme } from "../Redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import LightTrash from "./Icons/LightTrash.svg";

const WatchingList = () => {
  const [cards, setCards] = useState([]);

  const dispatch = useDispatch();
  const isLight = useSelector((state) => state.theme);

  const getAllMovies = async () => {
    const arr = [];
    //gets all documents from our firestore
    const querySnapshot = await getDocs(collection(firestore, "WatchingList"));
    querySnapshot.forEach((doc) => {
      //we push it into a new empty array
      arr.push(doc.data());
    });
    //and set that array value inside state
    setCards(arr);
  };

  const posterHandler = (result) => {
    if (result == null) {
      return picUnavaliable;
    } else {
      return `https://image.tmdb.org/t/p/original${result}`;
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className={`watchingContainer ${isLight ? "lightWatch" : ""}`}>
      <h1 className="watchingTitle">Your Wacthing List</h1>
      <div className="allCardsContainer">
        {cards.map((e, i) => {
          return (
            <div className="cardContainer" key={i}>
              <img
                className="movieCardPoster"
                src={posterHandler(e.poster_path)}
                alt=""
              />
              <img src={LightTrash} alt="" className="trashIcon" />
              <div className="cardInfo">
                <p className="movieCardTitle">{e.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WatchingList;
