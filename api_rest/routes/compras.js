const express = require('express');

let router = express.Router();

let Compra = require(__dirname + '/../models/compra.js');

/** AÑADIR COMPRA */
router.post('/', (request, response) =>{
    let compra = new Compra({
        producto: request.body.producto,
        comprador: request.body.comprador,
        vendedor: request.body.vendedor,
        direccion: request.body.direccion,
        codigoPostal: request.body.codigoPostal
    });

    compra.save().then(resultado =>{
        if(resultado){
            response.status(200).send({ok:true, compra:resultado});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR. 500'})
        console.log(error)
    })
})

module.exports =  router;