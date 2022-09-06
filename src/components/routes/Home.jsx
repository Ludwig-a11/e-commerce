import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import CardHome from '../home/CardHome'

const Home = () => {
  const dispatch = useDispatch()

  /* ayuda a manejar el estado  */

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  /* para acceder la informacion que esta en la store y usarla en la app */

  const products = useSelector((state) => state.products)

  return (
    <div className="font-bold">
      <div className="home__container-card"></div>
      {products?.map((product) => (
        <CardHome key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Home
