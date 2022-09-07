import { useNavigate } from 'react-router-dom'

const CardHome = ({ product }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product(${product.id})`)
  }

  return (
    <article
      className="relative shadow-lg hover:scale-105 duration-100 w-60 h-96 bg-white flex flex-col p-4 rounded-xl gap-6"
      onClick={handleClick}>
      <header className="h-2/5 flex justify-center items-center">
        <img className="h-full" src={product.productImgs[0]} alt="" />
      </header>
      <div className="h-3/5">
        <h3 className="card-home__name">{product.title}</h3>
        <section className="card-home__price">
          <h4 className="card-home__price-label">Price</h4>
          <span className="card-home__price-value">{product.price}</span>
        </section>
        <button
          onClick={() => console.log('add to cart')}
          className="absolute inline-flex items-center justify-center p-0.5 right-3 bottom-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-yellow-300 group-hover:from-red-400 group-hover:to-red-600 hover:text-white  focus:ring-4 focus:outline-none focus:ring-green-200 ">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900  rounded-md group-hover:bg-opacity-0">
            <img className="w-4" src="./images/add-cart.png" alt="icoon add" />
          </span>
        </button>
      </div>
    </article>
  )
}

export default CardHome
