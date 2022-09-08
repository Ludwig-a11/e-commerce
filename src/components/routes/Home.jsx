import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import CardHome from '../home/CardHome'

const Home = ({getItemsCart}) => {
  const dispatch = useDispatch()

  /* ayuda a manejar el estado  */

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  /* para acceder la informacion que esta en la store y usarla en la app */

  const products = useSelector((state) => state.products)

  return (
    

      <div className="p-4 pt-32 pb-10 min-h-screen w-full bg-slate-100 flex flex-wrap gap-8 justify-center">

        {products?.map((product) => (
          <CardHome key={product.id} product={product} getItemsCart={getItemsCart} />
        ))}
      </div>
  )
}

export default Home
