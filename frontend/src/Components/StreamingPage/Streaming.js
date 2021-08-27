import React from "react";
import "./Streaming.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Streaming() {
  const { id } = useParams();
  const url = "https://autoembed.xyz/movie/tmdb/" + id;
  const [info1, setinfo1] = useState([]);
  const [info2, setinfo2] = useState([]);

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

  return (
    <div>
      <Navbar />
      <iframe
        src={url}
        frameborder="0"
        scrolling="no"
        allowfullscreen="allowfullscreen"
      />
      <div class="location1" id="home">
        <h1 className="Similar">Similar</h1>
        <div class="box">{display()}</div>
      </div>
      <div class="location1" id="home">
        <h1 className="Similar">Recommendations</h1>
        <div class="box">{display1()}</div>
      </div>
      <Footer/>
    </div>
  );
}

export default Streaming;
