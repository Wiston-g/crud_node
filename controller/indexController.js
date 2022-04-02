
const request = require('request');

module.exports = {
    index:function (req, res, next) {
        res.render('index', { title: 'Busqueda de la pelicula de tu agrado' });
    },

    obtener:function (req, res) {
        let url='https://imdb-api.com/en/API/Search/k_908wq9nl/'+req.body.nombre;
        

        const options = {
        method: 'GET',
        url: url,
        };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);
        
        let peliculas = JSON.parse(body);
        //console.log(peliculas.results);
        res.render('mostrar', { title: 'Mostrar resultados',
                                nombre: req.body.nombre,
                                peliculas: peliculas.results});
        //console.log(body);
        });
    }
}