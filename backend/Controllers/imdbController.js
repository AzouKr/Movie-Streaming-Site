const Axios = require('axios')



module.exports = {
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
  


}