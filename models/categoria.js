const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let categoria_schema = new Schema({
    nombre: {
        type: String,
        required: true
    }
});

model = mongoose.model('categoria', categoria_schema);

module.exports = model;