const Axios = require('axios')



module.exports = {

  Search: async (req, res) => {
    const name = req.body.name;
    Axios.get("https://api.themoviedb.org/3/search/multi?api_key="+ process.env.api_key + "&query=" + name).then((response) => {
      res.send(response.data);
    });
    },

}