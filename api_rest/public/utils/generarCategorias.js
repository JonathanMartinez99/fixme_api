/**
 * ¡IMPORTANTE! Si no se siguen estos pasos la aplicación no funcionará correctamente
 * Orden de generación: Categorías, usuarios, productos, compras, notificaciones
 */

const mongoose = require('mongoose');
const Categoria = require(__dirname + '/../../models/categoria');

mongoose.connect('mongodb://localhost:27017/fixme');

Categoria.collection.drop();

let c1 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab1e",
    "nombre" : "Arte y Música",
    "descripcion" : "hola",
    "numProductos" : 1,
    "numReparados" : 1,
    "__v" : 0
});
c1.save();

let c2 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab1f",
    "nombre" : "Electrodomésticos",
    "descripcion" : "hola",
    "numProductos" : 0,
    "numReparados" : 0,
    "__v" : 0
});
c2.save();

let c3 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab20",
    "nombre" : "Hogar y Jardín",
    "descripcion" : "hola",
    "numProductos" : 0,
    "numReparados" : 0,
    "__v" : 0
});
c3.save();

let c4 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab21",
    "nombre" : "Deporte y Ocio",
    "descripcion" : "hola",
    "numProductos" : 0,
    "numReparados" : 0,
    "__v" : 0
});
c4.save();

let c5 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab22",
    "nombre" : "Informática y Electrónica",
    "descripcion" : "hola",
    "numProductos" : 2,
    "numReparados" : 0,
    "__v" : 0
});
c5.save();

let c6 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab23",
    "nombre" : "Coleccionismo",
    "descripcion" : "hola",
    "numProductos" : 0,
    "numReparados" : 0,
    "__v" : 0
});
c6.save();

let c7 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab24",
    "nombre" : "Moda y Accesorios",
    "descripcion" : "hola",
    "numProductos" : 0,
    "numReparados" : 0,
    "__v" : 0
});
c7.save();

let c8 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab25",
    "nombre" : "Móviles y Telefonía",
    "descripcion" : "hola",
    "numProductos" : 0,
    "numReparados" : 0,
    "__v" : 0
});
c8.save();

let c9 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab26",
    "nombre" : "TV, Audio y Foto",
    "descripcion" : "hola",
    "numProductos" : 1,
    "numReparados" : 0,
    "__v" : 0
});
c9.save();

let c10 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab27",
    "nombre" : "Consolas y Videojuegos",
    "descripcion" : "hola",
    "numProductos" : 1,
    "numReparados" : 1,
    "__v" : 0
});
c10.save();

let c11 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab28",
    "nombre" : "Materiales",
    "descripcion" : "hola",
    "numProductos" : 0,
    "numReparados" : 0,
    "__v" : 0
});
c11.save();

let c12 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab29",
    "nombre" : "Bicicletas",
    "descripcion" : "hola",
    "numProductos" : 0,
    "numReparados" : 0,
    "__v" : 0
});
c12.save();

let c13 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab2a",
    "nombre" : "Coches",
    "descripcion" : "hola",
    "numProductos" : 1,
    "numReparados" : 0,
    "__v" : 0
});
c13.save();

let c14 = new Categoria({
    "_id" : "629ba6ec02afa5fdcef4ab2b",
    "nombre" : "Motos",
    "descripcion" : "hola",
    "numProductos" : 0,
    "numReparados" : 1,
    "__v" : 0
});
c14.save();

