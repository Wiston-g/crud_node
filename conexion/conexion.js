const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'libros'
})

connection.connect(
    (err)=>{
        if(!err){
            console.log("Conexion exitosa");
        }else{
            console.log("Conexion fallida");
        }
    }
);

module.exports=connection;
// connection.query("SELECT * FROM libros", function (err, resultados) {
//     console.log(resultados);
// });


//connection.end()