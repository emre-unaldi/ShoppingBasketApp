const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        maxlength: [30, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır.'],
        minlength: [2, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.'],
        required: [true, '`{PATH}` alanı zorunludur.'],
        trim: true
    },
    price: {
        type: Number,
        max: [9999999, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH})den küçük olmalıdır.'],
        required: [true, '`{PATH}` alanı zorunludur.'],
        trim: true
    },
    unit: {
        type: String,
        maxlength: [15, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır.'],
        minlength: [1, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.'],
        trim: true
    },
    qty: {
        type: Number,
        min: [0, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH})den büyük olmalıdır.'],
        default: 0,
        trim: true
    }
},{
    collection: 'Products',
    timestamps: true
});

module.exports = mongoose.model('Products',ProductSchema);
