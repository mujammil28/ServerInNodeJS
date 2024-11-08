import path from 'path';
import productModel from '../models/productModel.js';

export default class productController{


            getProduct(req,res){

                   console.log(path.resolve())
                  let product=productModel.get();
                   console.log(product)
                   
                   res.render('products', {product:product})
                   
                //     return res.sendFile(path.join(path.resolve(),'src','views','products.html'));

            }

            addProduct(req,res){

                    return res.render('new-product');
            }

            addNewProd(req,res){
                console.log(req.body)
                let product=productModel.get();

                res.render('products', {product:product})

            }
}
