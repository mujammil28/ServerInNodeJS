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

                    return res.render('new-product',{errorMessage:null});
            }

            addNewProd(req,res){
                console.log(req.body)
                const {name,desc,price,img}=req.body
                let errors=[];
                if(!name||name.trim()==''){

                    errors.push('Name is not Defined')
                }
                if(!price||parseFloat(price)>1){

                    errors.push('Price is not positive number')
                }

                try{
                    const url=new URL(img);
                }
                catch(err){
                    errors.push('url is not correct');
                }
                
                if(errors.length>0){
                    res.render('new-product',{errorMessage:errors[0]})
                }

                productModel.add(req.body)
                let product=productModel.get();
                
                return res.render('products', {product})

            }

        


        }
