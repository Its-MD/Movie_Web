import "./watching.css";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../Firebase/config";
import { useEffect, useState } from "react";
import picUnavaliable from "../movieCard/picUnavaliable.png";

const WatchingList = () => {
  const [cards, setCards] = useState([]);

  const getAllMovies = async () => {
    const arr = [];
    const querySnapshot = await getDocs(collection(firestore, "WatchingList"));
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
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
    <div className="watchingContainer">
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
