const mongoose = require('mongoose');
const product = require('./models/product')
mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
main().catch(err => console.log(err)); 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
    console.log("mongo connect done");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// const p = new product({
//     name: 'Ruby Grapefruit',
//     price:1.99,
//     catergory:'fruit',
// })
const seedproducts =[
    {
        name: 'abcd',
        price:1.01,
        catergory:'fruit',
    },
    {
        name: 'efgh',
        price:1.02,
        catergory:'vegetable',
    },
    {
        name: 'Ruby hijk',
        price:2.99,
        catergory:'fruit',
    },
    {
        name: 'lmno',
        price:3.99,
        catergory:'dairy',
    },
    {
        name: 'Ruby Grapefruit',
        price:1.99,
        catergory:'fruit',
    },
]
product.insertMany(seedproducts)
    .then(res =>{
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })