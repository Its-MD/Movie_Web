import "./movieGrid.css";
import ratingStar from "./Icons/rating.svg";
import MovieCard from "../movieCard/movieCard";
import { useEffect, useState } from "react";

//dataT is genreItems, data are the current genre movies
const MovieGrid = ({ data, dataT }) => {
  // this function changes the title of the page due to the selected category
  const titleHandler = () => {
    // filter returns us a new array with the elements that satisfies the conditions
    const title = dataT.filter((e, i) => {
      // returns us the element's title which is active
      return e.isActive && e.Title;
    });
    // because the array includes only one element (selected category) we will pass index 0 and return the title field
    return title[0].Title;
  };

  return (
    <div className="pageCont">
      <h2 className="pageTitle">{titleHandler()}</h2>
      <div className="movieGrid">
        {data.map((e, i) => {
          return <MovieCard data={e} isInSlider={true} key={i} />;
        })}
      </div>
    </div>
  );
};
export default MovieGrid;
