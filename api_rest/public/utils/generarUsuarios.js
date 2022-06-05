/**
 * ¡IMPORTANTE! Si no se siguen estos pasos la aplicación no funcionará correctamente
 * Orden de generación: Categorías, usuarios, productos, compras, notificaciones
 */

const mongoose = require('mongoose');
const fs = require('fs');
const Usuario = require(__dirname + '/../../models/usuario');

mongoose.connect('mongodb://localhost:27017/fixme');

Usuario.collection.drop();

function getBase64(img){
    let ruta = 'public/uploads/';
    ruta += img;
    return 'data:image/jpeg;base64,' + fs.readFileSync(ruta, {encoding: "base64"});
}

let c1 = new Usuario({
    "_id" : "629ba8bacc6cb33fb59bac59",
    "nombre" : "Juan Lopez",
    "email" : "juan@gmail.com",
    "password" : "ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f",
    "cash" : 330,
    "fechaNacimiento" : "1999-12-12T00:00:00.000Z",
    "favoritos" : [ 
        "629bac80cc6cb33fb59baca3"
    ],
    "avatar" : getBase64('avatar.jpg'),
    "lat" : 38.3943742,
    "lng" : -0.5256505,
    "rol" : "user",
    "numValoraciones" : 0,
    "valoracion" : 0,
    "productos" : [],
    "__v" : 0
});  
c1.save();

let c2 = new Usuario({
    "_id" : "629ba8d5cc6cb33fb59bac5b",
    "nombre" : "Maria Fernanda",
    "email" : "maria@gmail.com",
    "password" : "ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f",
    "cash" : 0,
    "fechaNacimiento" : "1999-12-12T00:00:00.000Z",
    "favoritos" : [ 
        "629bb0c4cc6cb33fb59bad05", 
        "629bb1a2cc6cb33fb59bad1d", 
        "629bb041cc6cb33fb59bacf9"
    ],
    "avatar" : getBase64('maria.jpg'),
    "lat" : 38.3943742,
    "lng" : -0.5256505,
    "rol" : "user",
    "numValoraciones" : 0,
    "valoracion" : 0,
    "productos" : [],
    "__v" : 0
});  
c2.save();

let c3 = new Usuario({
    "_id" : "629ba8f0cc6cb33fb59bac5d",
    "nombre" : "Mario Medina",
    "email" : "mario@gmail.com",
    "password" : "ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f",
    "cash" : 0,
    "fechaNacimiento" :"1960-12-12T00:00:00.000Z",
    "favoritos" : [],
    "avatar" : getBase64('pepe.jpg'),
    "lat" : 38.3943742,
    "lng" : -0.5256505,
    "rol" : "user",
    "numValoraciones" : 0,
    "valoracion" : 0,
    "productos" : [],
    "__v" : 0
});  
c3.save();
