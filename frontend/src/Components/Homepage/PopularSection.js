import React from 'react'
import './PopularSection.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';


function PopularSection() {

  const [info, setinfo] = useState([]);

  
  useEffect(() => {
    Axios.get("http://localhost:3001/api/movies/popular").then((response) => {
      setinfo(response.data.results);
    });
  }, []);

  function display() {
    return info.slice(0, 12).map((item) => {
      const imagesrc = "https://image.tmdb.org/t/p/w500" + (item.backdrop_path);
      return (
        <Link to={`/moviedetails/${item.id}`}>
        <a href=""><img src= {imagesrc} alt=""/></a>
        </Link>
      );
    });
  }

    return (
        <div>
            <div class="location" id="home">
          <h1 id="home">Popular on Popcorn</h1>
          <div class="box">
          {display()}
          </div>
      </div>
        </div>
    )
}

export default PopularSection
