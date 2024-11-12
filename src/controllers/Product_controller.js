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
}
