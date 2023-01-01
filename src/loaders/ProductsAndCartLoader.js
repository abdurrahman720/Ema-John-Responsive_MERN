import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoader = async () => {
  //get data
  const productsData = await fetch("http://localhost:5001/products");
  const {products} = await productsData.json();

  //get cart data
  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product._id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      console.log(quantity);
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }

  console.log(initialCart);

  return { products: products, initialCart: initialCart };
};
