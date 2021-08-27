const Axios = require("axios");
const getTvId = require("../middlewares/getTvId");


module.exports = {
  Search: async (req, res) => {
    const name = req.body.name;
    Axios.get(
      "https://api.themoviedb.org/3/search/tv?api_key=" +
        process.env.api_key +
        "&query=" +
        name
    ).then((response) => {
      res.send(response.data);
    });
  },

  Popular: async (req, res) => {
    Axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=" + process.env.api_key
    ).then((response) => {
      res.send(response.data);
    });
  },

  Latest: async (req, res) => {
    Axios.get(
      "https://api.themoviedb.org/3/tv/latest?api_key=" + process.env.api_key
    ).then((response) => {
      res.send(response.data);
    });
  },

  Top_rated: async (req, res) => {
    Axios.get(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=" + process.env.api_key
    ).then((response) => {
      res.send(response.data);
    });
  },

  On_the_air: async (req, res) => {
    Axios.get(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=" +
        process.env.api_key
    ).then((response) => {
      res.send(response.data);
    });
  },

  trending_tv_day: async (req, res) => {
    Axios.get(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=" +
        process.env.api_key
    ).then((response) => {
      res.send(response.data);
    });
  },

  trending_tv_week: async (req, res) => {
    Axios.get(
      "https://api.themoviedb.org/3/trending/tv/week?api_key=" +
        process.env.api_key
    ).then((response) => {
      res.send(response.data);
    });
  },

  details: async (req, res) => {
    const id = req.body.id;
    Axios.get("https://api.themoviedb.org/3/tv/"+ id +"?api_key="+ process.env.api_key).then((response) => {
      res.send(response.data);
    });
  },    

  season: async (req, res) => {
    const id = req.body.id;
    const id_s = req.body.id_s;

    Axios.get("https://api.themoviedb.org/3/tv/"+ id +"/season/"+ id_s+"?api_key="+ process.env.api_key).then((response) => {
      res.send(response.data.episodes);
    });
  }, 

  images: async (req, res) => {
    const name = req.body.name;
    const movie_id = getTvId.getTvId(name);
    movie_id.then(function(result) {
      Axios.get("https://api.themoviedb.org/3/tv/"+ result +"/images?api_key="+ process.env.api_key).then((response) => {
      res.send(response.data);
    });
   })
  }, 

  videos: async (req, res) => {
    const name = req.body.name;
    const movie_id = getTvId.getTvId(name);
    movie_id.then(function(result) {
      Axios.get("https://api.themoviedb.org/3/tv/"+ result +"/videos?api_key="+ process.env.api_key).then((response) => {
      res.send(response.data);
    });
   })
  }, 

  keywords: async (req, res) => {
    const name = req.body.name;
    const movie_id = getTvId.getTvId(name);
    movie_id.then(function(result) {
      Axios.get("https://api.themoviedb.org/3/tv/"+ result +"/keywords?api_key="+ process.env.api_key).then((response) => {
      res.send(response.data);
    });
   })
  }, 

  similar: async (req, res) => {
    const id = req.body.id;
    Axios.get("https://api.themoviedb.org/3/tv/"+ id +"/similar?api_key="+ process.env.api_key).then((response) => {
      res.send(response.data);
    });
  },

  recommendations: async (req, res) => {
    const id = req.body.id;
    Axios.get("https://api.themoviedb.org/3/tv/"+ id +"/recommendations?api_key="+ process.env.api_key).then((response) => {
      res.send(response.data);
    });
  },

  reviews: async (req, res) => {
    const name = req.body.name;
    const movie_id = getTvId.getTvId(name);
    movie_id.then(function(result) {
      Axios.get("https://api.themoviedb.org/3/tv/"+ result +"/reviews?api_key="+ process.env.api_key).then((response) => {
      res.send(response.data);
    });
   })
  },
};
