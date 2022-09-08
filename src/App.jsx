import axios from 'axios'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import ProductDetail from './components/routes/ProductDetail'
import Purchases from './components/routes/Purchases'
import SignUp from './components/routes/SignUp'
import Header from './components/shared/Header'
import ProtectedRoutes from './ProtectedRoutes'
import getConfig from './utils/getConfig'

function App() {
  const [cartToggle, setCartToggle] = useState(false)
  const [cartProducts, setCartProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  console.log(cartProducts)

  const handleCartToggle = (e) => {
    e.stopPropagation()
    setCartToggle(!cartToggle)
  }
  const getItemsCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios
      .get(URL, getConfig())
      .then(res => {
        const products = res.data.data.cart.products
        setCartProducts(products)
        const total = products.reduce((acc, cv) =>{
          return Number(cv.price) * cv.productsInCart.quantity + acc
        }, 0)
        setTotalPrice(total)
      })
      .catch(() => setCartProducts() )
  }


  return (
    <div onClick={() => setCartToggle(false)} className="app bg-slate-100">
      <Header totalPrice={totalPrice} setTotalPrice={setTotalPrice} cartProducts={cartProducts} getItemsCart={getItemsCart} handleCartToggle={handleCartToggle} setCartToggle={setCartToggle} cartToggle={cartToggle} />

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/" element={<Home getItemsCart={getItemsCart} />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
