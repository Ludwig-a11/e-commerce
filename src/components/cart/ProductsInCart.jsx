import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const ProductsInCart = ({ cartProducts, getItemsCart, getProductInfo }) => {
  const navigate = useNavigate()
  

  const handleCartToggle = (e) => {
    e.stopPropagation()
  }

  const handleDeleteProduct = (id, e) => {
    handleCartToggle(e)
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`
    axios
      .delete(URL, getConfig())
      .then(() => getItemsCart())
      .catch((err) => console.log(err))
  }
  const handleClick = (id) => {
    navigate(`/product/${id}`)
    getProductInfo(id)
  }

  console.log('hola')

  return (
    <div className="flex overflow-auto flex-col items-center gap-4 py-2 px-2 w-full">
      {cartProducts &&
        cartProducts.map((product) => (
          <div
            onClick={() => handleClick(product.id)}
            key={product.id}
            className="relative w-full bg-slate-50 p-2 rounded-lg shadow-lg">
            <p>{product.brand}</p>
            <h3 className="w-3/4">{product.title}</h3>

            <p className="ml-5 mt-2 w-8 flex justify-center border border-solid border-slate-900">
              {product.productsInCart.quantity}
            </p>
            <p className="w-full flex justify-end">price: {product.price}</p>
            <button
              className="absolute right-2 top-2"
              onClick={(e) => handleDeleteProduct(product.id, e)}>
              <img
                className="w-8 hover:scale-105"
                src="./images/trash.png"
                alt=""
              />
            </button>
          </div>
        ))}
    </div>
  )
}

export default ProductsInCart
