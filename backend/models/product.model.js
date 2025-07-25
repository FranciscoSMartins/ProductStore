import mongoose from 'mongoose';
import { type } from 'os';

const productShema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true 
    },
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productShema);

export default Product;