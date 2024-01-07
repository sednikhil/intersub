const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required :true
    },
    price:{
        type:Number,
        require:true,
        min:0
    },
    catergory:{
        type:String,
        lowercase:true,
        enum:['fruit','vegetable','dairy']
    }
})
const product = mongoose.model('product',productSchema);
module.exports = product;