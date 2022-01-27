import React from "react";
import Navbar from "../Navbar";
import "./TVStreaming.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../Footer";

function TVStreaming() {

  const { id } = useParams();
  const { season } = useParams();
  const { episode_number } = useParams();

  
  const [info, setinfo] = useState([]);
  const [info1, setinfo1] = useState([]);
  const [info2, setinfo2] = useState([]);
  const [info3, setinfo3] = useState([]);
  const [info4, setinfo4] = useState([]);
  let url2 = "moviedetails";



  useEffect(() => {
    Axios.post("https://movie-streaming-site.herokuapp.com/api/tv/details", {
      id: id,
    }).then((response) => {
      setinfo3(response.data.seasons);
    });
  }, []);

  useEffect(() => {
    Axios.post("https://movie-streaming-site.herokuapp.com/api/tv/details", {
      id: id,
    }).then((response) => {
      setinfo(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.post("https://movie-streaming-site.herokuapp.com/api/tv/detailsseason", {
      id: id,
      id_s: season,
    }).then((response) => {
      setinfo4(response.data);
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
        url2 = "moviedetails";
      }else{
        url2 = "tvdetails";
      }
      return (
        <Link to={`/`+url2+`/${item.id}`}>
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
      if(item.media_type === "movie"){
        url2 = "moviedetails";
      }else{
        url2 = "tvdetails";
      }
      return (
        <Link to={`/`+url2+`/${item.id}`}>
          <a href="">
            <img src={imagesrc} alt="" />
          </a>
        </Link>
      );
    });
  }


  function display2() {
    return info3.map((item) => {
      const imagesrc = "https://image.tmdb.org/t/p/w500" + item.poster_path;
      return (
          <a onClick={() => {window.location.href=`/tvstream/${id}/${item.season_number}/1`}}>
            <img src={imagesrc} alt="" />
          </a>
      );
    });
  }

  function display3() {
    return info4.map((item) => {
      const imagesrc = "https://image.tmdb.org/t/p/w500" + item.still_path;
      return (
        <Link to={`/tvstream/${id}/${season}/${item.episode_number}`}>
          <a href="">
          <img src={imagesrc} alt="" />
          </a>
          </Link>
      );
    });
  }

  return (
    <div>
      <Navbar />
      <h1 className="title">{info.name}</h1>
      <iframe
      className="iframe"
        src={url}
        frameborder="0"
        scrolling="no"
        allowfullscreen="allowfullscreen"
      />
      <div class="location1" id="home">
        <h1 className="Similar">Seasons</h1>
        <div class="box">{display2()}</div>
      </div>
      <div class="location1" id="home">
        <h1 className="Similar">Similar</h1>
        <div class="box">{display()}</div>
      </div>
      <div class="location1" id="home">
        <h1 className="Similar">Recommendations</h1>
        <div class="box">{display1()}</div>
      </div>
      <div className="location6" id="home">
      <h1 className="ep">Episodes</h1>
        <div class="box1">
        {display3()}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default TVStreaming;
