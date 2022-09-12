import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import ProductDetail from './components/routes/ProductDetail'
import Purchases from './components/routes/Purchases'
import SignUp from './components/routes/SignUp'
import Header from './components/shared/Header'
import ProtectedRoutes from './ProtectedRoutes'
import { getAllProducts } from './store/slices/products.slice'
import getConfig from './utils/getConfig'

function App() {
  const [cartToggle, setCartToggle] = useState(false)
  const [cartProducts, setCartProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [productInfo, setProductInfo] = useState()
  const [togleFilter, setTogleFilter] = useState(false)

  console.log(cartProducts)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  

  const handleCartToggle = (e) => {
    e.stopPropagation()
    setCartToggle(!cartToggle)
    
  }

  const handleTogleFilter = (e) => {
    e.stopPropagation()
    setTogleFilter(!togleFilter)
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

  const getProductInfo = (id) => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios
      .get(URL)
      .then((res) => setProductInfo(res.data.data.product))
      .catch((err) => console.log(err))

  }

  const resetTogles = () => {
    setTogleFilter(false)
    setCartToggle(false)
  }


  return (
    <div onClick={resetTogles} className="app bg-slate-100">
      <Header totalPrice={totalPrice} setTotalPrice={setTotalPrice} cartProducts={cartProducts} getItemsCart={getItemsCart} handleCartToggle={handleCartToggle} setCartToggle={setCartToggle} cartToggle={cartToggle} getProductInfo={getProductInfo} />

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/product/:id" element={<ProductDetail  getProductInfo={getProductInfo} productInfo={productInfo} getItemsCart={getItemsCart} />}></Route>
        <Route path="/" element={<Home getItemsCart={getItemsCart} togleFilter={togleFilter} handleTogleFilter={handleTogleFilter} setTogleFilter={setTogleFilter} getProductInfo={getProductInfo} />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
