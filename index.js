import  express from 'express';
import productController from './src/controllers/Product_controller.js';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import validate from './src/middlewares/validationMiddleware.js';
import { uploadFile } from './src/middlewares/multerMiddleware.js';
import userController from './src/controllers/userControlle.js';


const server = express();

server.use(ejsLayouts)
server.use(express.static('public'));
server.set("view engine",'ejs');
server.set("views",path.join(path.resolve(),'src','views'))

server.use(express.urlencoded({extended:true}));

const productControllers=new productController()

server.get('/', productControllers.getProduct);

server.get('/new', productControllers.addProduct);

server.post('/',uploadFile.single('image'),validate,productControllers.addNewProd)

server.get('/update-product/:id',productControllers.getUpdateProductView);
server.post('/update-product',productControllers.postUpdateProduct);

server.get('/delete-product/:id',productControllers.deleteProduct);

const userControl=new userController();

server.get('/register',userControl.getRegister)
server.get('/login', userControl.getLogin);
server.post('/login', userControl.postLogin);
server.post('/register',userControl.postRegister);

server.use(express.static('src/views'));


server.listen(3400,()=>{
    console.log('Server is running on 3400')
    
    
});



