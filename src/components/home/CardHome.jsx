import React from 'react'
import { useNavigate } from 'react-router-dom'


const CardHome = ({product}) => {

  const navigate = useNavigate()

  const handleClick =() =>{
    navigate(`/product(${product.id})`)
  };


  return (
    <article className='card__home' onClick={handleClick}>
      <header className='card-home__header'>
        <img className='car-home__img' src={product.productImgs[0]} alt='' />
      </header>
      <div className='card-home__body'>
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