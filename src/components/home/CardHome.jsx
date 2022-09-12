import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const CardHome = ({ product, getItemsCart, getProductInfo }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
    getProductInfo(product.id)
    

  }
  const token = localStorage.getItem('Token')
  // funcion para agregar al carrito
  const handleAddToCart = (e) => {
    e.stopPropagation()
    if (!token) {
      navigate('/login')
    } else {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: product.id,
      quantity: 1,
    }
    axios.post(URL, obj, getConfig())
    .then(res => {
      getItemsCart()
      console.log(res.data)})
    .catch(err => console.log(err))
  }
  }
 
  return (
    <article
      className="relative max-w-sm shadow-lg lg:h-96 hover:scale-105 duration-100 w-full lg:w-60 h-40  bg-white flex lg:flex-col p-4 rounded-xl gap-4"
      onClick={handleClick}>
      <header className="w-2/5 h-full lg:h-2/5 lg:w-full flex lg:justify-center justify-center items-center">
        <img className="lg:h-full  max-h-32" src={product.productImgs[0]} alt="" />
      </header>
      <div className="w-3/5 flex flex-col justify-start items-start lg:h-3/5">
        <h3 className="card-home__name font-['Poppins']">{product.title}</h3>
        <section className="card-home__price">
          
          <span className="card-home__price-value">${product.price}</span>
        </section>
        <button
          onClick={handleAddToCart}
          className="absolute inline-flex items-center justify-center p-0.5 right-3 bottom-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-yellow-300 group-hover:from-red-400 group-hover:to-red-600 hover:text-white  focus:ring-4 focus:outline-none focus:ring-red-200 ">
          <span className="relative px-2  transition-all ease-in duration-75   bg-white  rounded-md group-hover:bg-opacity-0">
            <img className="w-8" src="./images/add-cart-black.png" alt="icoon add" />
          </span>
        </button>
      </div>
    </article>
  )
}

export default CardHome
