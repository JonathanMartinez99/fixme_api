const express = require('express');

let router = express.Router();

let Compra = require(__dirname + '/../models/compra.js');

//GET

/** GET COMPRA */
router.get('/:producto', (request, response) =>{
    Compra.find({producto:request.params.producto}).populate('comprador').populate('vendedor').populate('producto').then(result => {
        if(result.length > 0){
            response.status(200).send({ok:true, compra:result});
        }
        else{
            response.status(200).send({ok:false, error:'No existe la compra.'});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR 500.'});
    });
})


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