import axios from 'axios'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import ProductsInCart from '../cart/ProductsInCart'

const Header = ({
  handleCartToggle,
  cartToggle,
  getItemsCart,
  cartProducts,
  totalPrice,
  setTotalPrice,
  getProductInfo
}) => {
  const token = localStorage.getItem('Token')

  useEffect(() => {
    if (cartToggle) {
      getItemsCart()
    }
    console.log('dentro del if')
  }, [cartToggle])
  console.log(cartProducts)

  const handleCheckout = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
      street: 'Green St. 1456',
      colony: 'Southwest',
      zipCode: 12345,
      city: 'USA',
      references: 'Some references'
    }
    axios
      .post(URL, obj, getConfig())
      .then((res) => {
        getItemsCart()
        setTotalPrice(0)
      })
      .catch((err) => console.log(err))
  }

  return (
    <header className="fixed flex z-50 shadow-md w-full h-20 px-5 items-center bg-slate-100 justify-between  top-0 ">

      <NavLink className="flex items-center" to="/">

        <img className="w-10" src="./images/logo.png" alt="" />
        <h1 className="font-bold text-xl">E-commerce</h1>
      </NavLink>
      <nav className="flex  h-full  ">
        <ul className="flex w-full h-full gap-4 md:gap-8 lg:gap-10">
          <li className="h-full   flex items-center justify-center ">

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'w-full h-full flex justify-center items-center border-b-2 border-solid border-black'
                  : ''
              }
              to="/login">

              <img className="w-8" src="./images/user.png" alt="icon" />
            </NavLink>
          </li>
          <li className="h-full   flex items-center justify-center">

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'w-full h-full flex justify-center items-center border-b-2 border-solid border-black'
                  : ''
              }
              to="/purchases">
              <img className="w-8" src="./images/bag.png" alt="icon" />
            </NavLink>
          </li>
          <li className="h-full   flex items-center justify-center">
            <button onClick={handleCartToggle} className="pointer">
              <img className="w-8" src="./images/cart.png" alt="icon" />
            </button>
          </li>
        </ul>
      </nav>
      {token && cartToggle ? (
        <section
          onClick={(e) => {
            e.stopPropagation()
          }}
          className=" bg-slate-100/[.6] fixed z-50 backdrop-blur  right-0 w-2/3 md:w-2/3 lg:w-1/3 top-0 h-full flex flex-col items-center py-10">
          <button
            className='absolute top-2 right-2 w-8 h-8 bg-cover  bg-[url("./images/close.png")] rounded-full'
            onClick={handleCartToggle}></button>
          <div className="w-full h-4/5 flex flex-col items-center justify-start">
            <h2 className="font-bold">{cartProducts?.length > 0 ? 'Cart' : 'Add products to cart'}</h2>
            <ProductsInCart
              getProductInfo={getProductInfo}
              getItemsCart={getItemsCart}
              cartProducts={cartProducts}
            />
          </div>
          <div className="absolute h-1/5 bottom-4 border-t border-gray-300  w-full flex flex-col justify-center py-4 px-3 gap-4">
            <section className="flex justify-between px-4">
              <p>total:</p>
              <p>${totalPrice}</p>
            </section>
            <button
              onClick={handleCheckout}
              className=" shadow-xl active:shadow-none px-10 py-2 bg-red-400 hover:bg-red-500">
              checkout
            </button>
          </div>

        </section>
      ) : null}
    </header>
  )
}

export default Header
