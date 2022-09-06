import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import ProductDetail from './components/routes/ProductDetail'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'

function App() {
  const [cartToggle, setCartToggle] = useState(false)

  const handleCartToggle = () => setCartToggle(!cartToggle)

  console.log(cartToggle)

  return (
    <div className="app bg-slate-100">
      <Header handleCartToggle={handleCartToggle} cartToggle={cartToggle} />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/purchases" element={<Purchases />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  )
}

export default App
