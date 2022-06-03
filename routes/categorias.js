const express = require('express');

let router = express.Router();

let Categoria = require(__dirname + '/../models/categoria.js');

//GET

/** Todos las categorias */
router.get('/', (request, response) =>{
    Categoria.find().then(result => {
        if(result.length > 0){
            response.status(200).send({ok:true, categorias:result});
        }
        else{
            response.status(400).send({ok:false, error:'No hay categorías.'});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR 500.'});
    });
})

//PUT

/** Incrementar número productos */
router.put( '/incrementar/:nombre', (req, res) =>{
    Categoria.find({nombre: req.params.nombre}).then( result => {
        if(result){
            Categoria.findOneAndUpdate({nombre: req.params.nombre}, {numProductos: result[0].numProductos+1}).then( result2 => {
                if(result2){
                    res.status(200).send({ok:true, categoria: result2});
                }else{
                    res.status(400).send({ok:false, error:'No se ha podido incrementar.'});
                }
            }).catch(error =>{
                res.status(500).send({ok:false, error:'INTERNAL2 SERVER ERROR 500.'})
            })
        }else{
            res.status(400).send({ok:false, error:'No se ha podido encontrar la categoría.'});
        }
    }).catch(error =>{
        res.status(500).send({ok:false, error:'INTERNAL SERVER ERROR 500.'})
    });
});

/** Decrementar número productos */
router.put('/decrementar/:nombre', (req, res) =>{
    Categoria.find({nombre: req.params.nombre}).then( result => {
        if(result){
            Categoria.findOneAndUpdate({nombre: req.params.nombre}, {numProductos: result[0].numProductos-1}).then( result2 => {
                if(result2){
                    res.status(200).send({ok:true});
                }else{
                    res.status(400).send({ok:false, error:'No se ha podido incrementar.'});
                }
            }).catch(error =>{
                res.status(500).send({ok:false, error:'INTERNAL2 SERVER ERROR 500.'})
            })
        }else{
            res.status(400).send({ok:false, error:'No se ha podido encontrar la categoría.'});
        }
    }).catch(error =>{
        res.status(500).send({ok:false, error:'INTERNAL SERVER ERROR 500.'})
    });
});

/** Incrementar número productos */
router.put( '/incrementar/reparados/:nombre', (req, res) =>{
    Categoria.find({nombre: req.params.nombre}).then( result => {
        if(result){
            Categoria.findOneAndUpdate({nombre: req.params.nombre}, {numReparados: result[0].numReparados+1}).then( result2 => {
                if(result2){
                    res.status(200).send({ok:true, categoria: result2});
                }else{
                    res.status(400).send({ok:false, error:'No se ha podido incrementar.'});
                }
            }).catch(error =>{
                res.status(500).send({ok:false, error:'INTERNAL2 SERVER ERROR 500.'})
            })
        }else{
            res.status(400).send({ok:false, error:'No se ha podido encontrar la categoría.'});
        }
    }).catch(error =>{
        res.status(500).send({ok:false, error:'INTERNAL SERVER ERROR 500.'})
    });
});

/** Decrementar número productos */
router.put('/decrementar/reparados/:nombre', (req, res) =>{
    Categoria.find({nombre: req.params.nombre}).then( result => {
        if(result){
            Categoria.findOneAndUpdate({nombre: req.params.nombre}, {numReparados: result[0].numReparados-1}).then( result2 => {
                if(result2){
                    res.status(200).send({ok:true});
                }else{
                    res.status(400).send({ok:false, error:'No se ha podido incrementar.'});
                }
            }).catch(error =>{
                res.status(500).send({ok:false, error:'INTERNAL2 SERVER ERROR 500.'})
            })
        }else{
            res.status(400).send({ok:false, error:'No se ha podido encontrar la categoría.'});
        }
    }).catch(error =>{
        res.status(500).send({ok:false, error:'INTERNAL SERVER ERROR 500.'})
    });
})
module.exports =  router;