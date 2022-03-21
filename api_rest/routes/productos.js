const express = require('express');
const multer = require('multer');

let router = express.Router();

let Producto = require(__dirname + '/../models/producto.js');

let storage = multer.diskStorage({
    destination: function (request, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (request, file, cb) {
      cb(null, Date.now() + "_" + file.originalname)
    }
  })

let upload = multer({storage: storage});

//GET

/** Todos los productos */
router.get('/', (request, response) =>{
    Producto.find().populate('usuario').then(result => {
        if(result.length > 0){
            response.status(200).send({ok:true, productos:result});
        }
        else{
            response.status(400).send({ok:false, error:'No hay ningún producto.'});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR 500.'});
    });
})

/** Un solo producto por ID */
router.get('/:id', (request, response) =>{
    Producto.findById(request.params.id).populate('usuario').then(result =>{
        if(result){
            response.status(200).send({ok:true, producto:result});
        }else{
            response.status(400).send({ok:false, error:'No se ha podido encontrar el producto.'})
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR 500'})
    })
})

/** Productos por categoría */
router.get('/categoria/:categoria', (request, response) =>{
    Producto.find({categoria: new RegExp(request.params.categoria, "i") }).populate('usuario').then(result =>{
        if(result.length > 0){
            response.status(200).send({ok:true, productos:result});
        }
        else{
            response.status(400).send({ok:false, error:'No se han podido encontrar los productos.'})
        }
    }).catch(error =>{ 
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR'});
    })
})

//POST

router.post('/', upload.array('imagen', 5), (request, response) =>{
    let producto = new Producto({
        nombre: request.body.nombre,
        precio: request.body.precio,
        descripcion: request.body.descripcion,
        usuario: request.body.usuario,
        categoria: request.body.categoria,
        imagen:request.file?.filename
    });

    producto.save().then(resultado =>{
        response.status(200).send({ok:true, producto:resultado});
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR. 500'})
    })
})

//PUT
/** Modificar por id, usuario normal */
router.put('/:id', upload.array('imagen', 5), (request, response) =>{

    Producto.findByIdAndUpdate(request.params.id, {$set: {
        nombre:request.body.nombre,
        precio:request.body.precio,
        descripcion:request.body.descripcion,
        categoria:request.body.categoria,
        imagen:request.file?.filename
        }}, {new:true})
    .populate('usuario').then(result =>{
        
        if(result)
        {
            response.status(200).send({ok:true, producto:result});
        }
        else
        {
            response.status(400).send({ok:false, error: 'Error actualizando el producto.'});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error: 'INTERNAL SERVER ERROR. 500'});
    });
})

/** Modificar por id, usuario ADMINISTRADOR */
router.put('/admin/:id', upload.array('imagen', 5), (request, response) =>{

    Producto.findByIdAndUpdate(request.params.id, {$set: {
        nombre:request.body.nombre,
        precio:request.body.precio,
        descripcion:request.body.descripcion,
        usuario:request.body.usuario,
        categoria:request.body.categoria,
        likes:request.body.likes,
        vistas:request.body.vistas,
        imagen:request.file?.filename
        }}, {new:true})
    .populate('usuario').then(result =>{
        
        if(result)
        {
            response.status(200).send({ok:true, producto:result});
        }
        else
        {
            response.status(400).send({ok:false, error: 'Error actualizando el producto.'});
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error: 'INTERNAL SERVER ERROR. 500'});
    });
})

//DELETE
router.delete('/:id', (request, response) =>{
    Producto.findByIdAndRemove(request.params.id).then(result =>{
        if(result){
            response.status(200).send({ok:true, producto:result});
        }
        else{
            response.status(400).send({ok:false, error:'No se ha podido eliminar el producto.'})
        }
    }).catch(error =>{
        response.status(500).send({ok:false, error:'INTERNAL SERVER ERROR. 500'});
    })
});

module.exports = router;