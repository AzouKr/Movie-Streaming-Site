const router = require("express").Router();
const moviecontroller = require("../Controllers/moviesController");
const tvcontroller = require("../Controllers/tvController");
const multicontroller = require("../Controllers/multiController");




// *************************** Multi Search **************************************

// Search for a movie/tvShow.
router.post("/multi/search", multicontroller.Search);


// *************************** Search Movies **************************************

// Search for a movie.
router.post("/movies/search", moviecontroller.Search);

// Get a list of the current popular movies
router.get("/movies/popular", moviecontroller.Popular);

// Get the most newly created movie.
router.get("/movies/latest", moviecontroller.Latest);

// Get the top rated movies.
router.get("/movies/top_rated", moviecontroller.Top_rated);

// Get a list of movies in theatres.
router.get("/movies/now_playing", moviecontroller.Now_playing);

// Get the daily trending items.
router.get("/movies/trending/movies/day", moviecontroller.trending_movie_day);

// Get the weekly trending items.
router.get("/movies/trending/movies/week", moviecontroller.trending_movie_week);

// Get details about a movie.
router.post("/movies/details", moviecontroller.details);

// Get images about a movie.
router.get("/movies/images", moviecontroller.images);

// Get videos about a movie.
router.get("/movies/videos", moviecontroller.videos);

// Get keywords about a movie.
router.get("/movies/keywords", moviecontroller.keywords);

// Get similar movies.
router.post("/movies/similar", moviecontroller.similar);

// Get recommendations about a movie.
router.post("/movies/recommendations", moviecontroller.recommendations);

// Get reviews about a movie.
router.get("/movies/reviews", moviecontroller.reviews);



// *************************** Search Series **************************************

// Search for a movie.
router.get("/tv/search", tvcontroller.Search);

// Get a list of the current popular movies
router.get("/tv/popular", tvcontroller.Popular);

// Get the most newly created movie.
router.get("/tv/latest", tvcontroller.Latest);

// Get the top rated movies.
router.get("/tv/top_rated", tvcontroller.Top_rated);

// Get a list of movies in theatres.
router.get("/tv/n_the_air", tvcontroller.On_the_air);

// Get the daily trending items.
router.get("/tv/trending/tv/day", tvcontroller.trending_tv_day);

// Get the weekly trending items.
router.get("/tv/trending/tv/week", tvcontroller.trending_tv_day);

// Get details about a tv show.
router.post("/tv/details", tvcontroller.details);

// Get images about a tv show.
router.get("/tv/images", tvcontroller.images);

// Get videos about a tv show.
router.get("/tv/videos", tvcontroller.videos);

// Get keywords about a tv show.
router.get("/tv/keywords", tvcontroller.keywords);

// Get similar tv shows.
router.post("/tv/similar", tvcontroller.similar);

// Get recommendations about a tv show.
router.post("/tv/recommendations", tvcontroller.recommendations);

// Get reviews about a tv show.
router.get("/tv/reviews", tvcontroller.reviews);



module.exports = router;
