import React from 'react'
import './Navbar.css';
import { Link, useHistory } from "react-router-dom";
import { useState} from "react";
import logo from "../img/logo-1.png";



function Navbar() {
  const [name, setname] = useState("");
  let history = useHistory();

  const search = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/moviesearch",
      state: {name: name},
      }); 
      history.go(0)
  };

    return (
        <div>
        <header>
        <div class="netflixLogo">
        <a id="logo" href="/"><img src={logo} alt="Logo Image"/></a>
      </div>      
      <nav class="main-nav">     
      <Link to="/">         
        <a href="#home">Home</a>
        </Link>  
        <Link to="/series">
        <a href="#tvShows">Series</a>
        </Link>
        <Link to="/movies"> 
        <a href="">Movies</a>
        </Link> 
        <a href="#originals">Originals</a>
        <a href="#">Recently Added</a>
      </nav>
      <div class="search">
            <input type="text" onChange={(e) => {
              setname(e.target.value);
            }} placeholder="Search"/>
            <i onClick={search} class="fa fa-search"></i>
        </div>
      <nav class="sub-nav">
        <i class="fas fa-bell sub-nav-logo"></i>
        <a href="#">Account</a>        
      </nav> 
      </header>
            
        </div>
    )
}

export default Navbar
