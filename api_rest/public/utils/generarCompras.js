/**
 * ¡IMPORTANTE! Si no se siguen estos pasos la aplicación no funcionará correctamente
 * Orden de generación: Categorías, usuarios, productos, compras, notificaciones
 */

const mongoose = require('mongoose');
const Compra = require(__dirname + '/../../models/compra');

mongoose.connect('mongodb://localhost:27017/fixme');

Compra.collection.drop();

let c1 = new Compra({
    "_id" : "629bb9fccc6cb33fb59baee2",
    "producto" : "629bae94cc6cb33fb59bace8",
    "comprador" : "629ba8d5cc6cb33fb59bac5b",
    "vendedor" : "629ba8bacc6cb33fb59bac59",
    "codigo" : "0.76c39",
    "direccion" : "C/ Jacinto Benavente,Nº24",
    "codigoPostal" : 3690,
    "__v" : 0
});
c1.save();

let c2 = new Compra({
    "_id" : "629bba4ccc6cb33fb59baf1a",
    "producto" : "629bac80cc6cb33fb59baca3",
    "comprador" : "629ba8bacc6cb33fb59bac59",
    "vendedor" : "629ba8d5cc6cb33fb59bac5b",
    "codigo" : "0.76c39",
    "direccion" : "C/ Girasoles,Nº3,2A",
    "codigoPostal" : 1231,
    "__v" : 0
});
c2.save();

