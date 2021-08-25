import React from 'react'
import './TVShow.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function TVShow() {
  
  const [info, setinfo] = useState([]);

  
  useEffect(() => {
    Axios.get("http://localhost:3001/api/tv/popular").then((response) => {
      setinfo(response.data.results);
    });
  }, []);

  function display() {
    return info.slice(0, 12).map((item) => {
      const imagesrc = "https://image.tmdb.org/t/p/w500" + (item.backdrop_path);
      return (
        <a href=""><img src= {imagesrc} alt=""/></a>
      );
    });
  }

    return (
        <div>
            <h1 id="tvShows">TV Shows</h1>
      <div class="box">
      {display()}             
      </div>
        </div>
    )
}

export default TVShow
