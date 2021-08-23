const Axios = require('axios')

const getTvId = async  (Name) => {
    return await Axios.get("https://api.themoviedb.org/3/search/tv?api_key="+ process.env.api_key + "&query=" + Name).then((response) => {
        return response.data.results[0].id;
    });

}

module.exports.getTvId = getTvId;
