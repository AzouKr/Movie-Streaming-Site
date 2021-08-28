import React from 'react'
import "./TVlandingPage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../Navbar";
import Footer from '../Footer';

function TVLandingPage() {
  const { id } = useParams();
  const [info, setinfo] = useState([]);
  const [info3, setinfo3] = useState([]);
  const [info4, setinfo4] = useState([]);
  const [info1, setinfo1] = useState([]);
  const [info2, setinfo2] = useState([]);
  let url = "moviedetails";



  useEffect(() => {
    Axios.post("https://movie-streaming-site.herokuapp.com/api/tv/details", {
      id: id,
    }).then((response) => {
      setinfo(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.post("https://movie-streaming-site.herokuapp.com/api/tv/details", {
      id: id,
    }).then((response) => {
      setinfo3(response.data.genres[0]);
    });
  }, []);

  useEffect(() => {
    Axios.post("https://movie-streaming-site.herokuapp.com/api/tv/details", {
      id: id,
    }).then((response) => {
      setinfo4(response.data.first_air_date);
    });
  }, []);

  useEffect(() => {
    Axios.post("https://movie-streaming-site.herokuapp.com/api/tv/similar", {
      id: id,
    }).then((response) => {
      setinfo1(response.data.results);
    });
  }, []);

  useEffect(() => {
    Axios.post("https://movie-streaming-site.herokuapp.com/api/tv/recommendations", {
      id: id,
    }).then((response) => {
      setinfo2(response.data.results);
    });
  }, []);

  function display() {
    return info1.slice(0, 6).map((item) => {
      const imagesrc = "https://image.tmdb.org/t/p/w500" + item.backdrop_path;
      if(item.media_type === "movie"){
        url = "moviedetails";
      }else{
        url = "tvdetails";
      }
      return (
          <a onClick={() => {window.location.href=`/`+url+`/${item.id}`}}>
            <img src={imagesrc} alt="" />
          </a>
      );
    });
  }

  function display1() {
    return info2.slice(0, 6).map((item) => {
      const imagesrc = "https://image.tmdb.org/t/p/w500" + item.backdrop_path;
      if(item.media_type === "movie"){
        url = "moviedetails";
      }else{
        url = "tvdetails";
      }
      return (
          <a onClick={() => {window.location.href=`/`+url+`/${item.id}`}}>
            <img src={imagesrc} alt="" />
          </a>
      );
    });
  }

  const imagesrc = "https://image.tmdb.org/t/p/w500" + info.backdrop_path;

    return (
        <div>
            <Navbar />
      <div class="banner">
        <img src={imagesrc} class="bg" alt="" />
        <div class="content">
          <img src="images/mortal-kombat.png" class="movieTitle" alt="" />
          <h1>{info.name}</h1>
          <h4>
            <span>{info4.slice(0,4)}</span>
            <span>
              <i>16+</i>
            </span>
            <span>1hr 55mins</span>
            <span>{info3.name}</span>
          </h4>
          <p>{info.overview}</p>
          <div class="buttons">
          <Link to={`/tvstream/${info.id}/1/1`}>
            <a href="#">
              <i class="fa fa-play"></i>Play
            </a>
            </Link>
            <a href="#">
              <i class="fa fa-plus"></i>My List
            </a>
          </div>
        </div>
      </div>
      <div class="location1" id="home">
        <h1 className="Similar">Similar</h1>
        <div class="box">{display()}</div>
      </div>
      <div class="location" id="home">
        <h1 className="Similar">Recommendations</h1>
        <div class="box">{display1()}</div>
      </div>
      <Footer/>
        </div>
    )
}

export default TVLandingPage
