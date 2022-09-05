import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import ProductDetail from './components/routes/ProductDetail'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'

function App() {
  

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/purchases' element={<Purchases />}></Route>
        <Route path='/product/:id' element={<ProductDetail />}></Route>

      </Routes>
    </div>
  )
}

export default App
