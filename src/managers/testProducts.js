import productManage from "./productManage.js";

productManage.addProduct({
  title: "Producto 1",
  description: "Descripción del producto 1",
  price: 80,
  code: "ABC123",
  stock: 25,
});

productManage.addProduct({
  title: "Producto 2",
  description: "Descripción del producto 2",
  price: 150,
  code: "ABC124",
  stock: 10,
})

const testProducts = async () => {

    const products = await productManage.deleteProduct(1);
    console.log(products);
}

testProducts();