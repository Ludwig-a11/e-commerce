import { useNavigate } from 'react-router-dom'


const CardHome = ({product}) => {

  const navigate = useNavigate()

  const handleClick =() =>{
    navigate(`/product(${product.id})`)
  };


  return (
    <article className='shadow-lg hover:scale-105 duration-100 w-60 h-96 bg-white flex flex-col p-4 rounded-xl gap-6' onClick={handleClick}>
      <header className='h-2/5 flex justify-center items-center'>
        <img className='h-full' src={product.productImgs[0]} alt='' />
      </header>
      <div className='h-3/5'>
        <h3 className='card-home__name'>{product.title}</h3>
        <section className='card-home__price'>
          <h4 className='card-home__price-label'>Price</h4>
          <span className='card-home__price-value'>{product.price}</span>
        </section>
        <button className='card-home__btn'>Cart</button>
      </div>
    </article>
  )
}

export default CardHome