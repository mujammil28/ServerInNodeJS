import  express from 'express';
import productController from './src/controllers/Product_controller.js';

const server = express();

const productControllers=new productController()

server.get('/', productControllers.getProduct);

server.use(express.static('src/views'))

server.listen(3400,()=>{
    console.log('Server is running on 3400')
    
    
});