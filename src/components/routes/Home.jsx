import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import CategoryFilter from '../home/CategoryFilter'
import InputSearch from '../home/InputSearch'
import PriceFilter from '../home/PriceFilter'

const Home = ({ getItemsCart, togleFilter, handleTogleFilter, setTogleFilter, getProductInfo }) => {
  const [inputSearch, setInputSearch] = useState('')
  const [filterProducts, setFilterProducts] = useState()
  const [objestFilterPrice, setObjestFilterPrice] = useState()
  

  const products = useSelector((state) => state.products)

  useEffect(() => {
    if (inputSearch.length !== 0) {
      const filter = products?.filter((product) =>
        product.title.toLowerCase().includes(inputSearch.toLowerCase())
      )
      setFilterProducts(filter)
    } else {
      setFilterProducts('')
    }
  }, [inputSearch])

  // filtro por precio
  useEffect(() => {
    if (objestFilterPrice !== undefined) {
      const filter = products?.filter((e) => {
        const price = Number(e.price)
        const min = objestFilterPrice?.from
        const max = objestFilterPrice?.to
        if (min && max) {
          return price >= min && price <= max
        } else if (min && !max) {
          return price >= min
        } else if (!min && max) {
          return price <= max
        } else {
          return true
        }
      })
      setFilterProducts(filter)
    } else {
      setFilterProducts('')
    }
  }, [objestFilterPrice?.from, objestFilterPrice?.to])

  console.log(objestFilterPrice)

  

  return (
    <div className="p-4 pt-32 pb-10 min-h-screen w-full bg-slate-100 flex flex-col items-center flex-wrap gap-8 ">
      <div className=" w-full max-w-[600px] flex justify-between items-center gap-2">
        <InputSearch
          objestFilterPrice={objestFilterPrice}
          setInputSearch={setInputSearch}
        />
        <button className="h-[25px]" onClick={handleTogleFilter}>
          <img className="h-full" src="./images/filter.png" alt="" />
        </button>
      </div>

      {togleFilter && (
        <div onClick={(e) => e.stopPropagation()} className="bg-white/[0.6] w-3/4 md:w-[400px] md:px-4 backdrop-blur fixed left-0 top-0 z-50 min-h-screen  pt-10 px-3 flex flex-col gap-4">
          <button className="h-[20px] absolute right-2 top-2" onClick={handleTogleFilter}>
            <img className="h-full" src="./images/close.png" alt="" />
          </button>
          <CategoryFilter setObjestFilterPrice={setObjestFilterPrice} setTogleFilter={setTogleFilter} />
          <PriceFilter
            objestFilterPrice={objestFilterPrice}
            setObjestFilterPrice={setObjestFilterPrice}
            setTogleFilter={setTogleFilter}
          />
        </div>
      )}

      <div className="w-full max-w-[1265px] bg-slate-100 flex flex-wrap gap-8 justify-center">
        {filterProducts
          ? filterProducts.map((product) => (
              <CardHome
                key={product.id}
                product={product}
                getItemsCart={getItemsCart}
              />
            ))
          : products?.map((product) => (
              <CardHome
                key={product.id}
                product={product}
                getItemsCart={getItemsCart}
              />
            ))}
      </div>
    </div>
  )
}

export default Home
