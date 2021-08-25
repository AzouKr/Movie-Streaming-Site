import React from 'react'
import Footer from '../Footer';
import NavBar from '../Navbar';
import './Homepage.css';
import PopularSection from './PopularSection';
import Trending from './Trending';
import TVShow from './TVShow';

function Homepage() {
    return (
        <div>
        <NavBar/>
        <section class="main-container" >
        <PopularSection/>
        <Trending/>
        <TVShow/>
        </section>
        <Footer/>
        </div>
    )
}

export default Homepage
