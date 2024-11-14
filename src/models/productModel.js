

export default class productModel{

            constructor(_id,_name,_desc,_price,_image){

                this.id=_id;
                this.name=_name;
                this.desc=_desc;
                this.price=_price;
                this.image=_image;

            }

          static  get(){
            
                return products;
                    
            }

            static update(productObj) {
                const index = products.findIndex(
                  (p) => p.id == productObj.id
                );
                products[index] = productObj;
              }


            static add(productDataObj){
               
                    let productAdd=new productModel(

                            products.length+1,
                            productDataObj.name,
                            productDataObj.desc,
                            productDataObj.price,
                            productDataObj.image,

                    );

                    products.push(productAdd);

            }
            static getById(id) {
                return products.find((p) => p.id == id);
              }
}



        let products=[
            new productModel(
            10,
            'John',
            'This is first desc',
            900,
           'https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png',
        ),
        new productModel(11,
            'sam',
            'This is second desc',
            500,
            'https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png',
        ),
       new productModel(
            12,
            'ven',
            'This is third desc',
            200,
            'https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png',
       )
    
    ]