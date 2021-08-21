const router = require("express").Router();
const controller = require("../Controllers/imdbController");


// *************************** Search **************************************

// Get a list of the current popular movies
router.get("/popular", controller.Popular);

// Get the most newly created movie.
router.get("/latest", controller.Latest);

// Get the top rated movies.
router.get("/top_rated", controller.Top_rated);

// Get a list of movies in theatres.
router.get("/now_playing", controller.Now_playing);



module.exports = router;
