import path from 'path';
import productModel from '../models/productModel.js';
export default class productController {
    getProduct(req, res) {
        
        let product = productModel.get();
       
        res.render('products', { product: product,userEmail:req.session.userEmail });
    }

    addProduct(req, res) {
        return res.render('new-product', { errorMessage: null,userEmail:req.session.userEmail });
    }

    addNewProd(req, res) {
      
        const {name,desc,price}=req.body;
        const image="images/"+req.file.filename;
        productModel.add(name,desc,price,image);
        let product = productModel.get();
        res.render('products', { product,userEmail:req.session.userEmail });
      
    }

    getUpdateProductView(req, res, next) {
        // 1. if product exists then return view
        const  id  = req.params.id;
        const productFound = productModel.getById(id);
        if (productFound) {
          res.render('update-product', {
            product: productFound,
            errorMessage: null,userEmail:req.session.userEmail
          });
        }
        // 2. else return errors.
        else {
          res.status(401).send('Product not found');
        }
      }
      postUpdateProduct(req, res) {
        productModel.update(req.body);
        var product = productModel.get();
        res.render('products', { product });
      }

      deleteProduct(req, res){
        const  id  = req.params.id;
        const productFound = productModel.getById(id);
        if (!productFound) {
            res.status(401).send('Product not found');
          }
          // 2. else return errors.
          else {
            productModel.update(req.body);
            var product = productModel.get();
            productModel.delete(id);
                res.render('products',{product})
          }
      }

}
