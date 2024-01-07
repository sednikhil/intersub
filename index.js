const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const Product = require('./models/product')
const metrhodOverride= require('method-override');
// app.use(metrhodOverride('_method')); 
mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
main().catch(err => console.log(err)); 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
    console.log("mongo connect done");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');



app.use(express.urlencoded({extended:true}))
app.use(metrhodOverride('_method')) 


app.get('/',async (req,res)=>{
    res.send('hello');
})
app.get('/products/',async (req,res)=>{
    const products = await Product.find({})
    // console.log(products)
    res.render('products/index',{products})
})

app.get('/products/new',(req,res)=>{
    res.render('products/new')
})

app.get('/products/:id/edit',async (req,res)=>{
    const { id } = req.params;
    const product = await Product.findById(id)
    // console.log(products)
    res.render('products/edit',{product})
})

app.get('/products/:id',async (req,res)=>{
    const { id } = req.params;
    const product = await Product.findById(id)
    // console.log(products)
    res.render('products/show',{product})

})

app.post('/products',async(req,res)=>{
    const newProduct =  new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`)
})
app.put('/products/:id', async (req,res)=>{
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body,{runValidators:true ,new:true})
    res.redirect(`/products/${product._id}`)
})
app.delete('/products/:id', async (req,res)=>{
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
})
app.listen(3000,()=>{
    console.log("APP IS LISTENING");
})