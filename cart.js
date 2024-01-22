let products = [
  {
    id: "product1",
    title: "galletas",
    price: 50000,
    img: "url",
    units: 1,
  },

  {
    id: "product2",
    title: "galletas 2",
    price: 50000,
    img: "url",
    units: 1,
  },
];

const productsInCart = [{ id: "product1", units: 1 }];

const findProductIndexById= (id)=>{
    const productFound= productsInCart.findIndex((element)=> element.id=== id)
    return productFound
}

const productSelected = (product) => {
    const productInfo= {id: product.id, units: product.units}

  if (productsInCart.length === 0) {
    productsInCart.push(productInfo);
  } else {
    let isThere = findProductIndexById(product.id)
    isThere !== -1
      ? (productsInCart[isThere].units += 1)
      : productsInCart.push(productInfo);
  }
  return productsInCart;
};

const manageProductUnitsFromCart= (productId, action)=>{
    const productIndex= findProductIndexById(productId)
    action === "+"
    ? productsInCart[productIndex].units+=1 
    : productsInCart[productIndex].units-=1
    return productsInCart
}



// const productAdded= new Cart ()
