import { ProductManager } from "./product_manager.js";


const featureProd = {
    title: 'producto prueba',
    description:'Este es un producto prueba',
    price:200,
    thumbnail:'Sin imagen',
    code:'abc123',
    stock:25
}

const featureProd2 = {
    title: 'producto prueba',
    description:'Este es un producto prueba',
    price:200,
    thumbnail:'Sin imagen',
    code:'abc123',
    stock:25
}

const product1 = new ProductManager( 'products.json' )

const test = async() => {

    console.log( product1.getProducts() )

    await product1.addProduct( featureProd )

    // await product1.addProduct( featureProd2 )

    console.log( product1.getProducts() )
    
    console.log( product1.getProductsById( 1 ))
    
    console.log( product1.updateProduct( 1, {stock:34, price:333}) ) 
    
    // await product1.deleteProduct()
}
test()



