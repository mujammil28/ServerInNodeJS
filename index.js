import  express from 'express';
import productController from './src/controllers/Product_controller.js';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts'
const server = express();

server.use(ejsLayouts)

server.set("view engine",'ejs');
server.set("views",path.join(path.resolve(),'src','views'))

const productControllers=new productController()

server.get('/', productControllers.getProduct);

server.get('/new', productControllers.addProduct);

server.post('/',productControllers.addNewProd)

server.use(express.static('src/views'));
server.listen(3400,()=>{
    console.log('Server is running on 3400')
    
    
});