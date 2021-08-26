const Axios = require('axios')
const getMovieId = require("../middlewares/getMovieId");


module.exports = {

  Search: async (req, res) => {
    const name = req.body.name;
    Axios.get("https://api.themoviedb.org/3/search/movie?api_key="+ process.env.api_key + "&query=" + name).then((response) => {
      res.send(response.data);
    });
    },

  Popular: async (req, res) => {

    Axios.get("https://api.themoviedb.org/3/movie/popular?api_key="+ process.env.api_key).then((response) => {
      res.send(response.data);
    });

    },

    Latest: async (req, res) => {

      Axios.get("https://api.themoviedb.org/3/movie/latest?api_key="+ process.env.api_key).then((response) => {
        res.send(response.data);
      });
  
      },

    Top_rated: async (req, res) => {

      Axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key="+ process.env.api_key).then((response) => {
        res.send(response.data);
      });
    
      },

    Now_playing: async (req, res) => {

      Axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key="+ process.env.api_key).then((response) => {
        res.send(response.data);
      });
      
    },

    trending_movie_day: async (req, res) => {

      Axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key="+ process.env.api_key).then((response) => {
        res.send(response.data);
      });
      
    },

    trending_movie_week: async (req, res) => {

      Axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key="+ process.env.api_key).then((response) => {
        res.send(response.data);
      });

    },

    details: async (req, res) => {
      const id = req.body.id;
      Axios.get("https://api.themoviedb.org/3/movie/"+ id +"?api_key="+ process.env.api_key).then((response) => {
        res.send(response.data);
      });
    },    

    images: async (req, res) => {
      const name = req.body.name;
      const movie_id = getMovieId.getMovieId(name);
      movie_id.then(function(result) {
        Axios.get("https://api.themoviedb.org/3/movie/"+ result +"/images?api_key="+ process.env.api_key).then((response) => {
        res.send(response.data);
      });
     })
    }, 

    videos: async (req, res) => {
      const name = req.body.name;
      const movie_id = getMovieId.getMovieId(name);
      movie_id.then(function(result) {
        Axios.get("https://api.themoviedb.org/3/movie/"+ result +"/videos?api_key="+ process.env.api_key).then((response) => {
        res.send(response.data);
      });
     })
    }, 

    keywords: async (req, res) => {
      const name = req.body.name;
      const movie_id = getMovieId.getMovieId(name);
      movie_id.then(function(result) {
        Axios.get("https://api.themoviedb.org/3/movie/"+ result +"/keywords?api_key="+ process.env.api_key).then((response) => {
        res.send(response.data);
      });
     })
    }, 

    similar: async (req, res) => {
      const id = req.body.id;
      Axios.get("https://api.themoviedb.org/3/movie/"+ id +"/similar?api_key="+ process.env.api_key).then((response) => {
        res.send(response.data);
      });
    },

    recommendations: async (req, res) => {
      const id = req.body.id;
      Axios.get("https://api.themoviedb.org/3/movie/"+ id +"/recommendations?api_key="+ process.env.api_key).then((response) => {
        res.send(response.data);
      });
    },

    reviews: async (req, res) => {
      const name = req.body.name;
      const movie_id = getMovieId.getMovieId(name);
      movie_id.then(function(result) {
        Axios.get("https://api.themoviedb.org/3/movie/"+ result +"/reviews?api_key="+ process.env.api_key).then((response) => {
        res.send(response.data);
      });
     })
    },
  


}