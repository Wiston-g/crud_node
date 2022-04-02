module.exports = {
    obtener:function (conexion, funcion) {
        conexion.query("SELECT * FROM libros", funcion);
    },

    guardar:function (conexion, datos, archivo) {
        conexion.query("INSERT INTO `libros` (`id`, `titulo`, `imagen`, `descripcion`, `price`) VALUES (NULL, ?, ?, ?, ?);",[datos.titulo, archivo.filename, datos.descripcion, datos.price]);
    },

    retornarDatosPorId:function (conexion, id, funcion) {
        conexion.query("SELECT * FROM libros WHERE id=?",[id], funcion);
    },

    actualizarDatosPorId:function (conexion, datos, funcion) {
       
        conexion.query("UPDATE `libros` SET `titulo` = ?, `descripcion` = ?, `price` = ? WHERE `libros`.`id` = ?;",[datos.titulo,  datos.descripcion, datos.price, datos.id])
    },

    actualizarArchivoPorId:function (conexion, datos, archivo, funcion) {
       
        conexion.query("UPDATE `libros` SET `imagen` = ? WHERE `libros`.`id` = ?;",[archivo.filename, datos.id])
    },

    borrarPorId:function (conexion, id, funcion) {
        conexion.query("DELETE FROM libros WHERE id=?",[id], funcion);
    },
}