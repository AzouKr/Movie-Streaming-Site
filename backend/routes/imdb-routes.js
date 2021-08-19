const router = require("express").Router();
const controller = require("../Controllers/imdbController");


// *************************** Search **************************************
router.get("/search", controller.Search);

module.exports = router;
