const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let producto_schema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: String,
    precio: {
        type: String,
        required: true
    },
    categoria_id: {
        type: Schema.Types.ObjectId,
        ref: 'categoria',
        required: true
    }
});

model = mongoose.model('producto', producto_schema, 'producto');

module.exports = model;