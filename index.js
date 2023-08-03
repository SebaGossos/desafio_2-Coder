import { ProductManager } from "./product_manager.js";


const featureProd = {
    title: 'producto prueba',
    description:'Este es un producto prueba',
    price:200,
    thumbnail:'Sin imagen',
    code:'abc123',
    stock:25
}

const product1 = new ProductManager( 'products.json' )

console.log(product1.getProducts())

// product1.addProduct( featureProd )

// console.log(product1.getProducts())

// console.log( product1.getProductsById(1) )

// console.log(product1.updateProduct( 1, {stock:34, price:333})) 

// product1.deleteProduct()


