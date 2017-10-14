const router = require('express').Router();
const handler = require('../utils/handler');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/unidad2', {
  useMongoClient: true
});

const User = require('../models/user.model'); //esquema de la bd

module.exports = () => {
 //rutas que se mandan llamar, es lo que se ejecuta (consula con reesultado)
    router.get('/', (req, res) => {    //aqui se 
        User.find({})
        .sort()
        .exec(handler.handleMany.bind(null, 'users', res));
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        User.find({_id:id})
        .sort()
        .exec(handler.handleOne.bind(null, 'user', res));
    });


    router.get('/nombre/:nombre', (req, res) => {
        const nom= req.params.nombre;
        User.find({name:nom})
        .sort()
        .exec(handler.handleOne.bind(null, 'user', res));
    });

    router.get('/email/:email', (req, res) => {
        const ema = req.params.email;
        User.find({email:ema})
        .sort()
        .exec(handler.handleOne.bind(null, 'user', res));
    });
 
 /*  inserciones  */

    router.post('/', (req, res) => {

        //recibe paramaetros

        const usuario = req.body;  //recibe parametros de forma oculta
        User.create(usuario)
        .then(
            function(data){
                console.log(data);
                res.json(data);
            }
        )
        .catch(
            function(err){
                console.log(err);
                res.status(400);
                res.json({error:err});
            }
        );
    });

    /* eliminacion */

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        User.remove({_id:id},function(err,data){
            if (err) {
                console.assert.log(err);
                res.status(400);
                res.json({error:err});
            } else {
                res.json({msj:"todo estuvo bien"});
            }
        });
        
    });


    return router;
}