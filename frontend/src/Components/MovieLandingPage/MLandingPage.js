import React from "react";
import "./MlandingPage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../Navbar";

function MLandingPage() {
  const { id } = useParams();
  const [info, setinfo] = useState([]);
  const [info1, setinfo1] = useState([]);
  const [info2, setinfo2] = useState([]);


  useEffect(() => {
    Axios.post("http://localhost:3001/api/movies/details", {
      id: id,
    }).then((response) => {
      setinfo(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.post("http://localhost:3001/api/movies/similar", {
      id: id,
    }).then((response) => {
      setinfo1(response.data.results);
    });
  }, []);

  useEffect(() => {
    Axios.post("http://localhost:3001/api/movies/recommendations", {
      id: id,
    }).then((response) => {
      setinfo2(response.data.results);
    });
  }, []);

  function display() {
    return info1.slice(0, 6).map((item) => {
      const imagesrc = "https://image.tmdb.org/t/p/w500" + item.backdrop_path;
      return (
        <Link to={`/moviedetails/${item.id}`}>
          <a href="">
            <img src={imagesrc} alt="" />
          </a>
        </Link>
      );
    });
  }

  function display1() {
    return info2.slice(0, 6).map((item) => {
      const imagesrc = "https://image.tmdb.org/t/p/w500" + item.backdrop_path;
      return (
        <Link to={`/moviedetails/${item.id}`}>
          <a href="">
            <img src={imagesrc} alt="" />
          </a>
        </Link>
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
          <h4>
            <span>2020</span>
            <span>
              <i>16+</i>
            </span>
            <span>1hr 55mins</span>
            <span>11</span>
          </h4>
          <p>{info.overview}</p>
          <div class="buttons">
          <Link to={`/moviestream/${info.id}`}>
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
      <div class="location" id="home">
        <h1 className="Similar">Similar</h1>
        <div class="box">{display()}</div>
      </div>
      <div class="location" id="home">
        <h1 className="Similar">Recommendations</h1>
        <div class="box">{display1()}</div>
      </div>
    </div>
  );
}

export default MLandingPage;