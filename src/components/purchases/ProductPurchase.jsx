

const ProductPurchase = ({product}) => {

  

  return (
    <li className="flex my-3" >
      <h4 className="flex-auto w-64">{product.title}</h4>
      <span className="flex-auto w-32"># {product.productsInCart.quantity}</span>
      <span className="flex-auto w-30">${product.price}</span>
    </li>
  )
}

export default ProductPurchase