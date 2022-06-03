const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//enrutadores
const productRouter = require(__dirname + '/routes/productos');
const userRouter = require(__dirname + '/routes/usuarios');
const categoriaRouter = require(__dirname + '/routes/categorias');
const compraRouter = require(__dirname + '/routes/compras');
const notificacionRouter = require(__dirname + '/routes/notificaciones');
const chatRouter = require(__dirname + '/routes/chats');

//conexión bbdd
mongoose.connect('mongodb://localhost:27017/fixme');

let app = express();

app.use(express.json({limit: '25mb'}));

app.use(cors());

app.use('/productos', productRouter);
app.use('/usuarios', userRouter);
app.use('/categorias', categoriaRouter);
app.use('/compras', compraRouter);
app.use('/notificaciones', notificacionRouter);
app.use('/chats', chatRouter);

app.listen(8080);