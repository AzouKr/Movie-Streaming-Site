import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import './MSearch.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import {Link, useLocation} from 'react-router-dom';

function MSearch() {

    const [info, setinfo] = useState([]);
    const location = useLocation().state;
  
    useEffect(() => {
      Axios.post("http://localhost:3001/api/movies/search",{
          name: location.name,
      }).then((response) => {
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
    return (
        <div>
        <Navbar/>
        <div class="location" id="home">
          <h1 className="result">Results  of {location.name}</h1>
          <div class="box">
          {display()}
          </div>
      </div>
        <Footer/>
            
        </div>
    )
}

export default MSearch
