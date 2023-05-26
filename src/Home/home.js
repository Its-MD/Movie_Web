import { useEffect, useState } from "react";
import "./home.css";
import { discoverRequestNew, randomMovieRequest } from "../Requests/requests";
import {
  G_ACTION,
  G_COMEDY,
  G_FANTASY,
  G_DRAMA,
  G_DOC,
  G_HORROR,
  G_ANIME,
  G_ALL,
} from "../constans";
import MovieGrid from "../movieGrid/movieGrid";
import Loader from "../Loader/loader";
import MOTD from "../MovieOfTheDay/MOTD";
import AOTD from "../ActorOfTheDay/AOTD";
import MovieSlider from "../movieSlider/movieSlider";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeLoading, setLoading } from "../Redux/loadingSlice";

const Home = () => {
  const nav = useNavigate();

  const [genreItems, setGenreItems] = useState([
    {
      Title: "🍿 All",
      Color: "#FF5409",
      isActive: true,
      id: G_ALL,
    },
    {
      Title: "😎 Action",
      Color: "#A348E7",
      isActive: false,
      id: G_ACTION,
    },
    {
      Title: "🤖 Animation",
      Color: "#5BE748",
      isActive: false,
      id: G_ANIME,
    },
    {
      Title: "😄 Comedy",
      Color: "#C9D02F",
      isActive: false,
      id: G_COMEDY,
    },
    {
      Title: "🧚🏻 Fantasy",
      Color: "#F937C2",
      isActive: false,
      id: G_FANTASY,
    },
    {
      Title: "🤧 Drama",
      Color: "#0923FF",
      isActive: false,
      id: G_DRAMA,
    },
    {
      Title: "📽️ Documentary",
      Color: "#09DAFF",
      isActive: false,
      id: G_DOC,
    },
    {
      Title: "👺 Horror",
      Color: "#FF094C",
      isActive: false,
      id: G_HORROR,
    },
  ]);

  const [pageNum, setPageNum] = useState(2);
  //here are stored the movies data of the current category from API
  const [data, setData] = useState([]);
  const [MOTDData, setMOTDData] = useState({});

  const userData = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  const isLight = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const isAuth = userData.isAuth;

  // console.log(loading.loading);

  //adding neon class to selected category
  const classHandler = (active) => {
    if (active) {
      return "genreContainer containerActive";
    } else {
      return "genreContainer";
    }
  };

  //returns data of movie (by id)
  const resultHandler = async (id) => {
    let result = await discoverRequestNew(id);
    setData(result.results);
  };

  //returns genre id of the category that is selected
  const idHandler = () => {
    //filter goes over all elements and returns a new array with the needed data (if)
    const arrWithActive = genreItems.filter((e) => {
      if (e.isActive) {
        return e;
      }
    });
    return arrWithActive[0].id;
  };

  //returns true if All category is opened, else - false
  const isAllActive = genreItems[0].isActive;

  //useEffect function (hook) which is activated only after construct component template (all function including return and states)
  //when dependency array item has changed useEffect activates. else no change in depen it'll pass
  useEffect(
    () => {
      dispatch(setLoading());
      resultHandler(idHandler());
      setTimeout(() => {
        dispatch(removeLoading());
      }, 1500);
    },
    [genreItems] // = dependency array
  );

  useEffect(() => {
    if (!isAuth) {
      nav("/signUp");
    }
  }, [userData.isAuth]);

  //useEffect of MOTD
  useEffect(() => {
    //takes reponse from req
    let answer = randomMovieRequest().then((res) => {
      //result contaions the info of the movie
      // this line checks if res.results is ever undefined it will place just an empty object
      const result = getMovieRandID(res.results) || {};
      setMOTDData(result);
    });
  }, []);

  // we return either Loader or the whole page depends if loading true or false
  return loading.loading ? (
    <Loader />
  ) : (
    <div className={`home ${isLight ? "lightHome" : ""}`}>
      <h1 className="homeTitle">My Cinema</h1>
      <div className="genrePicker">
        {
          // we go over all genreItems with map (returns new array)
          genreItems.map((e, i) => {
            return (
              <div
                key={i}
                className={
                  //we check which genre is activated and with classHandler we add a class to change styles
                  e.isActive ? classHandler(true) : classHandler(false)
                }
                //we check if the clicked genre is already selected or not so we won't rerender again
                onClick={() => {
                  // if returns true it wont go inside if
                  //if returns false it goes
                  if (idCompare(i, genreItems) === false) {
                    const disabled = genreItems.map((e) => {
                      //... is spreading each element and rewrites only isActive to false (does this to all elements)
                      return { ...e, isActive: false };
                    });
                    // disabled is new array from map with all elements isActive=false, but we need to change isActive=true to only current clicked item
                    // index of this item is inside "i"
                    disabled[i].isActive = true;
                    // we place new the new array inside state
                    setGenreItems(disabled);
                  }
                }}
                style={{
                  background: e.isActive ? e.Color : null,
                  boxShadow: e.isActive ? `0 0 15px ${e.Color}` : null,
                }}
              >
                <p className="genreItem">{e.Title}</p>
              </div>
            );
          })
        }
      </div>
      <div className="homeBody">
        <div className="homeHeader">
          {
            // to render a group of components you should wrap into an array
            isAllActive
              ? [<MOTD key={0} reqData={MOTDData} />, <AOTD key={1} />]
              : null
          }
        </div>
        {
          //same structure of terrnary operator just without ":null"
          isAllActive && <MovieSlider />
        }
        <MovieGrid data={data} dataT={genreItems} />
        <button
          className="showMoreBtn"
          onClick={() => {
            setPageNum((prev) => {
              return ++prev;
            });
            paginationRequest(
              setData,
              pageNum,
              discoverRequestNew,
              idHandler()
            );
          }}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Home;

//fucntion which compares between the index of the clicked genre to the active genre and returns true/false
//arr is the genreItems array, i is the index of the specific checked element
function idCompare(i, arr) {
  //findIndex will return the first index that satisfies our condition
  const foundedIndex = arr.findIndex((e) => {
    //whatever is in the (), is our condition - in total our return returns the index
    return e.isActive;
  });
  //if the index of the clicked element equals to the element that has isActive=true - returns true
  if (i === foundedIndex) {
    return true;
  } else {
    return false;
  }
}
async function paginationRequest(setState, pageNumebr, request, genre) {
  const loadedPage = await request(genre, pageNumebr);
  setState((prev) => {
    return [...prev, ...loadedPage.results];
  });
}

// gets random movie id from the array that contains movies from the random page
const getMovieRandID = (arr) => {
  let id = Math.floor(Math.random() * (arr.length - 0 + 1)) + 0;
  return arr[id];
};
