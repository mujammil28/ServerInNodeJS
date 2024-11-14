import path from 'path';
import productModel from '../models/productModel.js';
export default class productController {
    getProduct(req, res) {
        
        let product = productModel.get();
       
        res.render('products', { product: product });
    }

    addProduct(req, res) {
        return res.render('new-product', { errorMessage: null });
    }

    addNewProd(req, res) {
       
        productModel.add(req.body);
        let product = productModel.get();
        return res.render('products', { product });
    }

    getUpdateProductView(req, res, next) {
        // 1. if product exists then return view
        const  id  = req.params.id;
        const productFound = productModel.getById(id);
        if (productFound) {
          res.render('update-product', {
            product: productFound,
            errorMessage: null,
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
}
