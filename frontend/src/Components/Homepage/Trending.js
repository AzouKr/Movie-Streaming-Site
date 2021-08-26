import React from 'react'
import './Trending.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';


function Trending() {

  
  const [info, setinfo] = useState([]);

  
  useEffect(() => {
    Axios.get("http://localhost:3001/api/movies/top_rated").then((response) => {
      setinfo(response.data.results);
    });
  }, []);

  function display() {
    return info.slice(0, 6).map((item) => {
      const imagesrc = "https://image.tmdb.org/t/p/w500" + (item.backdrop_path.toString());
      return (
        <Link to={`/moviedetails/${item.id}`}>
        <a href=""><img src= {imagesrc} alt=""/></a>
        </Link>
      );
    });
  }

    return (
        <div>
            <h1 id="myList">Top Rated</h1>
      <div class="box">
      {display()}               
      </div>
        </div>
    )
}

export default Trending
