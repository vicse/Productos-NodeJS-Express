let model = require('../models/producto');
let modelCat = require('../models/categoria');

module.exports = {
    // show: function(req, res) {
    //     model.find({}, function(err, data) {
    //         if (!err) {
    //             res.send(data);
    //         } else {
    //             console.log(err);
    //             res.status(500);
    //         }
    //     });
    // },

    show: function(req, res) {
        model.find({}).populate({
            path: 'categoria_id',
            select: 'nombre'
        }).exec(function(err, data) {
            if (!err) {
                res.send(data);
            } else {
                console.log(err);
                res.status(500);
            }
        });

    },

    detail: function(req, res) {

        var val_id = req.params.id;

        model.findOne({ _id: val_id }, function(err, data) {
            if (!err) {
                res.send(data);
            } else {
                return console.log(err);
            }

        })
    },

    create: function(req, res) {

        var nuevo = new model;
        nuevo.nombre = req.body.nombre;
        nuevo.descripcion = req.body.descripcion;
        nuevo.precio = req.body.precio;
        nuevo.categoria_id = req.body.categoria_id;


        nuevo.save(function(err, newData) {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                res.send(newData);
            }
        });

    },
    update: function(req, res) {

        let val_id = req.params.id;

        let datos = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            categoria_id: req.body.categoria_id
        }

        model.updateOne({ _id: val_id }, datos, (err, newData) => {

            if (err) {
                console.log(err);
                res.status(500);
            } else {
                res.send(newData);
            }
        });
    },
    delete: function(req, res) {

        let val_id = req.params.id;

        model.findOne({ _id: val_id }, (err, producto) => {
            producto.remove();
            res.send({ status: true });
        });
    }
};