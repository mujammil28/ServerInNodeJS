import path from 'path';
export default class productController{


            getProduct(req,res){

                   console.log(path.resolve())
                    return res.sendFile(path.join(path.resolve(),'src','views','products.html'));

            }
}
