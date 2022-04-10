const mongoose = require('mongoose');
const Categoria = require(__dirname + '/../../models/categoria');

mongoose.connect('mongodb://localhost:27017/fixme');

Categoria.collection.drop();

let c1 = new Categoria({
    nombre: 'Arte y Música',
    descripcion: 'hola',
    numProductos: 0
});
c1.save();

let c2 = new Categoria({
    nombre: 'Electrodomésticos',
    descripcion: 'hola',
    numProductos: 0
});
c2.save();

let c3 = new Categoria({
    nombre: 'Hogar y Jardín',
    descripcion: 'hola',
    numProductos: 0
});
c3.save();

let c4 = new Categoria({
    nombre: 'Deporte y Ocio',
    descripcion: 'hola',
    numProductos: 0
});
c4.save();

let c5 = new Categoria({
    nombre: 'Informática y Electrónica',
    descripcion: 'hola',
    numProductos: 0
});
c5.save();

let c6 = new Categoria({
    nombre: 'Coleccionismo',
    descripcion: 'hola',
    numProductos: 0
});
c6.save();

let c7 = new Categoria({
    nombre: 'Moda y Accesorios',
    descripcion: 'hola',
    numProductos: 0
});
c7.save();

let c8 = new Categoria({
    nombre: 'Móviles y Telefonía',
    descripcion: 'hola',
    numProductos: 0
});
c8.save();

let c9 = new Categoria({
    nombre: 'TV, Audio y Foto',
    descripcion: 'hola',
    numProductos: 0
});
c9.save();

let c10 = new Categoria({
    nombre: 'Consolas y Videojuegos',
    descripcion: 'hola',
    numProductos: 0
});
c10.save();

let c11 = new Categoria({
    nombre: 'Materiales',
    descripcion: 'hola',
    numProductos: 0
});
c11.save();

let c12 = new Categoria({
    nombre: 'Bicicletas',
    descripcion: 'hola',
    numProductos: 0
});
c12.save();

let c13 = new Categoria({
    nombre: 'Coches',
    descripcion: 'hola',
    numProductos: 0
});
c13.save();

let c14 = new Categoria({
    nombre: 'Motos',
    descripcion: 'hola',
    numProductos: 0
});
c14.save();

