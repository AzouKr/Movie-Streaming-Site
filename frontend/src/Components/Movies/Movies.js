import React from 'react'
import './Movies.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';
import NavBar from '../Navbar';
import Footer from '../Footer';


function Movies() {

    const [info, setinfo] = useState([]);
    const [info1, setinfo1] = useState([]);

  
  useEffect(() => {
    Axios.get("http://localhost:3001/api/movies/popular").then((response) => {
      setinfo(response.data.results);
    });
  }, []);

  function display() {
    return info.map((item) => {
      const imagesrc = "https://image.tmdb.org/t/p/w500" + (item.backdrop_path);
      return (
        <Link to={`/moviedetails/${item.id}`}>
        <a href=""><img src= {imagesrc} alt=""/></a>
        </Link>
      );
    });
  }

  
  useEffect(() => {
    Axios.get("http://localhost:3001/api/movies/now_playing").then((response) => {
      setinfo1(response.data.results);
    });
  }, []);

  function display1() {
    return info1.map((item) => {
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
        <NavBar/>
          <div class="location2" id="home">
            <h1 id="home">Popular on Popcorn</h1>
            <div class="box">
            {display()}
          </div>
        </div>
        <div class="location2" id="home">
            <h1 id="home">Now Playing on Popcorn</h1>
            <div class="box">
                {display1()}
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Movies
