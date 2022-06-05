/**
 * ¡IMPORTANTE! Si no se siguen estos pasos la aplicación no funcionará correctamente
 * Orden de generación: Categorías, usuarios, productos, compras, notificaciones
 */

const mongoose = require('mongoose');
const fs = require('fs');
const Producto = require(__dirname + '/../../models/producto');

mongoose.connect('mongodb://localhost:27017/fixme');

Producto.collection.drop();

function getBase64(img){
    let ruta = 'public/uploads/';
    ruta += img;
    return 'data:image/jpeg;base64,' + fs.readFileSync(ruta, {encoding: "base64"});
}

let p1 = new Producto({
    "_id" : "629ba9b5cc6cb33fb59bac6b",
    "nombre" : "Lancia Fluvia",
    "precio" : 300,
    "descripcion" : "El coche no arranca, era de mi abuelo y no me interesa",
    "usuario" : "629ba8f0cc6cb33fb59bac5d",
    "categoria" : "Coches",
    "likes" : 0,
    "vistas" : 8,
    "imagen" : [
        getBase64('lancia-fulvia.jpeg')
    ],
    "reparado" : false,
    "fecha" : "2022-06-04T18:40:11.491Z",
    "vendido" : false,
    "__v" : 0
});  
p1.save();

let p2 = new Producto({
    "_id" : "629bab2bcc6cb33fb59bac94",
    "nombre" : "Canon X34",
    "precio" : 95,
    "descripcion" : "La cámara se me estampó en el suelo y la pantalla se rompió, pero funciona perfectamente",
    "usuario" : "629ba8d5cc6cb33fb59bac5b",
    "categoria" : "TV, Audio y Foto",
    "likes" : 0,
    "vistas" : 0,
    "imagen" : [ 
        getBase64('camera.jpeg'),
        getBase64('camara2.jpg')
    ],
    "reparado" : false,
    "fecha" : "2022-06-04T18:40:11.491Z",
    "vendido" : false,
    "__v" : 0
});  
p2.save();

let p3 = new Producto({
    "_id" : "629bac80cc6cb33fb59baca3",
    "nombre" : "Xiaomi 5",
    "precio" : 120,
    "descripcion" : "Lo vendo porque va muy lento y ya no lo uso, además está abollado por los lados",
    "usuario" : "629ba8d5cc6cb33fb59bac5b",
    "categoria" : "Móviles y Telefonía",
    "likes" : 1,
    "vistas" : 2,
    "imagen" : [
        getBase64('movil1.jpg') 
    ],
    "reparado" : false,
    "fecha" : "2022-06-04T18:40:11.491Z",
    "vendido" : true,
    "__v" : 0
});  
p3.save();

let p4 = new Producto({
    "_id" : "629bad57cc6cb33fb59bacd6",
    "nombre" : "Portátil Acer Aspire 2",
    "precio" : 38,
    "descripcion" : "El portatil no arranca, no sé qué le pasa, incluyo la batería",
    "usuario" : "629ba8bacc6cb33fb59bac59",
    "categoria" : "Informática y Electrónica",
    "likes" : 0,
    "vistas" : 1,
    "imagen" : [ 
        getBase64('portatil1.jpg')
    ],
    "reparado" : false,
    "fecha" : "2022-06-04T18:40:11.491Z",
    "vendido" : false,
    "__v" : 0
});  
p4.save();

let p5 = new Producto({
    "_id" : "629bae08cc6cb33fb59bacdf",
    "nombre" : "Reloj digital",
    "precio" : 5,
    "descripcion" : "La pantalla a veces se apaga, la correa está algo desgastada",
    "usuario" : "629ba8bacc6cb33fb59bac59",
    "categoria" : "Informática y Electrónica",
    "likes" : 0,
    "vistas" : 0,
    "imagen" : [
        getBase64('reloj1.jpg') 
    ],
    "reparado" : false,
    "fecha" : "2022-06-04T18:40:11.491Z",
    "vendido" : false,
    "__v" : 0
});  
p5.save();

let p6 = new Producto({
    "_id" : "629bae94cc6cb33fb59bace8",
    "nombre" : "Nevera",
    "precio" : 50,
    "descripcion" : "La nevera no enfria bien y la luz no funciona",
    "usuario" : "629ba8bacc6cb33fb59bac59",
    "categoria" : "Electrodomésticos",
    "likes" : 0,
    "vistas" : 2,
    "imagen" : [
        getBase64('nevera2.jpg'),
        getBase64('nevera2.jpg')
    ],
    "reparado" : false,
    "fecha" : "2022-06-04T18:40:11.491Z",
    "vendido" : true,
    "__v" : 0
});  
p6.save();

let p7 = new Producto({
    "_id" : "629bafddcc6cb33fb59bacf1",
    "nombre" : "XBOX Reparada",
    "precio" : 130,
    "descripcion" : "Está como nueva, el lector estaba roto pero ya funciona",
    "usuario" : "629ba8bacc6cb33fb59bac59",
    "categoria" : "Consolas y Videojuegos",
    "likes" : 0,
    "vistas" : 0,
    "imagen" : [
        getBase64('consolareparada.jpg') 
    ],
    "reparado" : true,
    "fecha" : "2022-06-04T18:40:11.491Z",
    "vendido" : false,
    "__v" : 0
});  
p7.save();

let p8 = new Producto({
    "_id" : "629bb041cc6cb33fb59bacf9",
    "nombre" : "XBOX",
    "precio" : 25,
    "descripcion" : "Está muy vieja y no arranca, la tenía guardada y no la necesito",
    "usuario" : "629ba8bacc6cb33fb59bac59",
    "categoria" : "Consolas y Videojuegos",
    "likes" : 1,
    "vistas" : 2,
    "imagen" : [ 
        getBase64('xboxsinreparar.jpg'),
        getBase64('sinrepararcaja.jfif')
    ],
    "reparado" : false,
    "fecha" : "2022-06-04T18:40:11.491Z",
    "vendido" : false,
    "__v" : 0
});  
p8.save();

let p9 = new Producto({
    "_id" : "629bb0c4cc6cb33fb59bad05",
    "nombre" : "Pack flautas dulces",
    "precio" : 19,
    "descripcion" : "No suenan bien, ya no las uso",
    "usuario" : "629ba8bacc6cb33fb59bac59",
    "categoria" : "Arte y Música",
    "likes" : 1,
    "vistas" : 2,
    "imagen" : [
        getBase64('flautas.jpg')
    ],
    "reparado" : false,
    "fecha" : "2022-06-04T18:40:11.491Z",
    "vendido" : false,
    "__v" : 0
});  
p9.save();

let p10 = new Producto({
    "_id" : "629bb1a2cc6cb33fb59bad1d",
    "nombre" : "Vespa",
    "precio" : 200,
    "descripcion" : "Totalmente reparada, está como nueva",
    "usuario" : "629ba8bacc6cb33fb59bac59",
    "categoria" : "Motos",
    "likes" : 1,
    "vistas" : 1,
    "imagen" : [
        getBase64('vespa1.jpg'),
        getBase64('vespa2.jpg') 
    ],
    "reparado" : true,
    "fecha" : "2022-06-04T18:40:11.491Z",
    "vendido" : false,
    "__v" : 0
});  
p10.save();

let p11 = new Producto({
    "_id" : "629baa5acc6cb33fb59bac77",
    "nombre" : "Guitarra Eléctrica",
    "precio" : 59,
    "descripcion" : "La guitarra tenía el mástil partido, ahora está totalmente reparada",
    "usuario" : "629ba8f0cc6cb33fb59bac5d",
    "categoria" : "Arte y Música",
    "likes" : 0,
    "vistas" : 0,
    "imagen" : [ 
        getBase64('guitarreparada.jpg')
    ],
    "reparado" : true,
    "fecha" : "2022-06-04T18:40:11.491Z",
    "vendido" : false,
    "__v" : 0
});  
p11.save();
