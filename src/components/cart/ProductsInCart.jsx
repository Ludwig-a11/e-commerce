import axios from "axios"
import getConfig from "../../utils/getConfig"

const ProductsInCart = ({cartProducts, getItemsCart}) => {

  const handleDeleteProduct = (id) => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`
    axios.delete(URL, getConfig())
    .then((res) => getItemsCart())
    .catch((err) => console.log(err))
    }

    console.log('hola')
    
  return (
  <div className='flex flex-col items-center gap-4 py-2 w-full'>
    {
        cartProducts && cartProducts.map((product) => (
            <div key={product.id} className='relative w-2/4 bg-slate-50 p-2 rounded-lg shadow-lg'>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <p>{product.productsInCart.quantity}</p>
                <button className="absolute right-2 bottom-2" onClick={() => handleDeleteProduct(product.id)}>
                    <img className="w-8" src="./images/trash.png" alt="" />
                </button>
            </div>
        ))
    }
  </div>
  
  )
}

export default ProductsInCart
