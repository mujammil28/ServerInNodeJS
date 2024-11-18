import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";
    export default class userController{

                    getRegister(req,res){

                            res.render('register');
                    }
                    getLogin(req, res) {
                        res.render('login', { errorMessage: null });
                      }
                    
                      postRegister(req, res) {
                        const { name, email, password } = req.body;
                        userModel.add(name, email, password);
                        res.render('login', { errorMessage: null });
                      }
                    
                      postLogin(req, res) {
                        const { email, password } = req.body;
                        const user = userModel.isValidUser(
                          email,
                          password
                        );
                        if (!user) {
                          return res.render('login', {
                            errorMessage: 'Invalid Credentials',
                          });
                        }
                         req.session.userEmail=email;
                        var product = productModel.get();
                        res.render('products', { product,userEmail:req.session.userEmail });
                      }

                      logout(req,res){

                        req.session.destroy((err)=>{
                         if(err){       console.log("Error")
                        }else{
                            res.redirect('/login')
                        }
                    })
                      }
    }