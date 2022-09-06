import { Routes, Route } from 'react-router-dom'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import ProductDetail from './components/routes/ProductDetail'
import Purchases from './components/routes/Purchases'
import SignUp from './components/routes/SignUp'
import Header from './components/shared/Header'
import ProtectedRoutes from './ProtectedRoutes'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/purchases" element={<Purchases />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
