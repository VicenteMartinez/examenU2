var mongoose = require('mongoose');
var schema = require ('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var Product = mongoose.model('Products',schema,'products');

//Documento en RAM
var product = new Product({
    code: '264952',
    price: '65',
    description: 'Pan',
    quantity:15,
    minimun: 8
});

var d = product;

product.save(function(error){
    if(d.quantity < d.minimun){
        console.log("Productos menor al minimo de stock");
        process.exit(1);
    }
    console.log(d.quantity);
    process.exit(0);
});

Product.find({}, function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);

    }
    console.log("Consulta");
    console.log(docs);
});
