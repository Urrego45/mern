const {Schema, model} = require('mongoose');

const usuarioSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Usuario', usuarioSchema);