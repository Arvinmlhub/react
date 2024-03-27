class Product{
    constructor(name,price){
       this.price=price;
       this.name=name;

    }
}


class Cart{
    constructor(){ 
        this.products=[];
    }

    addProduct(product){
        this.products.push(product);

    }

    getTotal(){
        return this.products.reduce((total,product)=> 
          total+product.price,0)
    }
    printDetails() {
        this.products.forEach((product,index)=>{
            console.log(`Product ${index+1}`);
            console.log(`Name: ${product.name}`);
            console.log(`Price: ${product.price}`);

        });
    }
    


}
let cart = new Cart();
cart.addProduct(new Product("Net",569))
cart.addProduct(new Product("Induction", 1000));

console.log(cart.getTotal());
cart.printDetails();

