const validate=(req,res,next)=>{

  
    const { name, price, image } = req.body;
    let errors = [];

    // Validate input fields
  
    // If no errors, add the new product
    if (!name || name.trim() === '') {
    errors.push('Name is not defined');
}
if (!price || parseFloat(price) < 1) {
    errors.push('Price is not a positive number');
}

           


    if (errors.length > 0) {
        // Render new product form with the first error message
        return res.render('new-product', { errorMessage: errors[0] });
 
    }


    next();
}

export default validate;