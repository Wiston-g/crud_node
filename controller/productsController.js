const bd = require("../conexion/conexion");
const libro = require("../model/productModel");
var borrar = require("fs");

module.exports={

    index:function (req, res) {  
        libro.obtener(bd, function (err, datos) {
            res.render('product/products', { title: 'Productos',
                                description: 'Todos los libros.',
                                libroDB: datos });
        }) 
    },

    create:function (req, res) {
        res.render('product/create',{ title: 'Crear Productos',
                                description: 'Crear el libro.'});
    },

    save:function (req, res) {
        console.log(req.body);
        console.log(req.file.filename);
        libro.guardar(bd, req.body, req.file);
        res.redirect('/products');
    },

    edit:function (req, res) {
        libro.retornarDatosPorId(bd, req.params.id, function (err, registro) {
            console.log(registro[0]);
            res.render('product/edit',{ title: 'Editar Productos',
                                description: 'Editar el libro.',
                                libro:registro[0]});
        });  
    },

    update:function (req, res) {
        
        if(req.file){
            if (req.file.filename) {

                libro.retornarDatosPorId(bd, req.body.id, function (err, registro) {
                    let nombreImagen = "public/images/"+(registro[0].imagen);
        
                    if(borrar.existsSync(nombreImagen)){
                        borrar.unlinkSync(nombreImagen);
                    };
                    libro.actualizarArchivoPorId(bd, req.body, req.file, function (err) {}); 
                    
                });   
            } 
        }

        if(req.body.titulo){
            libro.actualizarDatosPorId(bd, req.body, function (err) {});  
        }
        res.redirect('/products');
    },

    delete:function (req, res) {

        libro.retornarDatosPorId(bd, req.params.id, function (err, registro) {
            let nombreImagen = "public/images/"+(registro[0].imagen);

            if(borrar.existsSync(nombreImagen)){
                borrar.unlinkSync(nombreImagen);
            };

            libro.borrarPorId(bd, req.params.id, function(err){
                res.redirect('/products');
            } )
            
        });
    },
}