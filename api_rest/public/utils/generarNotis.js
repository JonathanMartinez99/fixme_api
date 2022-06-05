/**
 * ¡IMPORTANTE! Si no se siguen estos pasos la aplicación no funcionará correctamente
 * Orden de generación: Categorías, usuarios, productos, compras, notificaciones
 */

const mongoose = require('mongoose');
const Noti = require(__dirname + '/../../models/notificacion');

mongoose.connect('mongodb://localhost:27017/fixme');

Noti.collection.drop();

let n1 = new Noti({
    "_id" : "629bb9fccc6cb33fb59baee8",
    "estado" : false,
    "info" : "Tu producto ha sido vendido",
    "title" : "¡Se ha vendido!",
    "usuario" : "629ba8bacc6cb33fb59bac59",
    "producto" : "629bae94cc6cb33fb59bace8",
    "__v" : 0
});
n1.save();

let n2 = new Noti({
    "_id" : "629bb9fccc6cb33fb59baeea",
    "estado" : false,
    "info" : "Has comprado este producto",
    "title" : "¡Lo has comprado!",
    "usuario" : "629ba8d5cc6cb33fb59bac5b",
    "producto" : "629bae94cc6cb33fb59bace8",
    "__v" : 0
});
n2.save();

let n3 = new Noti({
    "_id" : "629bba4ccc6cb33fb59baf20",
    "estado" : false,
    "info" : "Tu producto ha sido vendido",
    "title" : "¡Se ha vendido!",
    "usuario" : "629ba8d5cc6cb33fb59bac5b",
    "producto" : "629bac80cc6cb33fb59baca3",
    "__v" : 0
});
n3.save();

let n4 = new Noti({
    "_id" : "629bba4dcc6cb33fb59baf24",
    "estado" : false,
    "info" : "Has comprado este producto",
    "title" : "¡Lo has comprado!",
    "usuario" : "629ba8bacc6cb33fb59bac59",
    "producto" : "629bac80cc6cb33fb59baca3",
    "__v" : 0
});
n4.save();

