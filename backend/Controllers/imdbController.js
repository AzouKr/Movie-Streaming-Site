const { response } = require('express');
const imdb = require('imdb-api')


module.exports = {
    Search: async (req, res) => {

        imdb.search({
            name: 'titanic'
          }, {
            apiKey: 'foo'
          }).then((response) => {
            res.send(response);
        }).catch((e) => {
            res.send(e);
        });

    }


}