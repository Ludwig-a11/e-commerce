import axios from 'axios'

// import { setProducts } from '../../store/slices/products.slice'

import { useEffect, useState } from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import SimilarProducts from '../product/SimilarProducts'

const ProductDetail = ({ getProductInfo, productInfo, getItemsCart }) => {
  const [counter, setCounter] = useState(1)
  const [numberImage, setNumberImage] = useState(0)

  const handlePlus = () => {
    if (counter + 1 <= 10) {
      setCounter(counter + 1)
    }
  }
  const handleMinus = () => {
    if (counter - 1 >= 1) {
      setCounter(counter - 1)
    }
  }
  const navigate = useNavigate()

  const { id } = useParams()

  const token = localStorage.getItem('Token')

  useEffect(() => {
    getProductInfo(id)
  }, [])

  const handleAddToCart = () => {
    if (token) {
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
      axios
        .post(URL, { id: productInfo.id, quantity: counter }, getConfig())
        .then((res) => {
          setCounter(1)
          console.log(res)
        })
        .catch((err) => console.log(err))
    } else {
      navigate('/login')
    }
  }
  console.log(productInfo)

  const prev = () => {
    if (numberImage - 1 < 0) {
      setNumberImage(productInfo?.productImgs.length - 1)
    } else {
      setNumberImage(numberImage - 1)
    }
  }

  const next = () => {
    if (numberImage + 1 > productInfo?.productImgs.length - 1) {
      setNumberImage(0)
    } else {
      setNumberImage(numberImage + 1)
    }
  }

  console.log(numberImage)

  return (
    <div className=" min-h-screen pt-20 flex flex-col items-center">
      <ul className="flex flex-wrap items-center mb-4 w-full py-3 pl-2 md:px-20">
        <li className="mr-6">
          <Link
            className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
            to="/">
            <span>Home</span>
            <svg
              className="ml-6"
              width="4"
              height="7"
              viewBox="0 0 4 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                fill="currentColor"></path>
            </svg>
          </Link>
        </li>
        <li>
          <span
            className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
            href="#">
            {productInfo?.title}
          </span>
        </li>
      </ul>
      <div className=" px-2 flex items-center flex-col gap-6 md:gap-0 md:flex-row md:justify-center w-full md:max-w-[1000px] mb-6">
        <picture className="md:w-2/4 w-full h-[400px] flex justify-center relative px-10">
          <img
            className="object-contain"
            src={productInfo?.productImgs[numberImage]}
            alt={productInfo?.title}
          />
          <div className="absolute min-w-full w-full md:w-full top-[180px] flex justify-between  rounded-full p-2">
            <button
              onClick={prev}
              className="bg-white rounded-full p-2 hover:bg-gray-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.41 16.09L10.83 11.5L15.41 6.91L14 5.5L8 11.5L14 17.5L15.41 16.09Z"
                  fill="currentColor"></path>
              </svg>
            </button>
            <button
              onClick={next}
              className="bg-white rounded-full p-2 hover:bg-gray-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.59 7.91L13.17 12.5L8.59 17.09L10 18.5L16 12.5L10 6.5L8.59 7.91Z"
                  fill="currentColor"></path>
              </svg>
            </button>
          </div>
        </picture>
        <section className="md:w-2/4 pb-6 w-full  px-2">
          <div>
            <h1 className="text-3xl font-bold ">{productInfo?.title}</h1>
            <p>{productInfo?.category}</p>
          </div>
          <div>
            <del>${+productInfo?.price + 400} </del>
            <p className="text-xl font-bold mb-4">${productInfo?.price}</p>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-sm font-bold">Quantity : </p>
            <div className="flex items-center">
              <button
                onClick={handleMinus}
                className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center active:scale-[0.99]">
                -
              </button>
              <p className="w-[30px] flex justify-center">{counter}</p>
              <button
                onClick={handlePlus}
                className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center active:scale-[0.99]">
                +
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={handleAddToCart}
              className="from-red-400 bg-gradient-to-br to-yellow-300 w-full  h-8 rounded-full flex items-center justify-center text-white active:scale-[0.99]">
              Add to cart
            </button>
          </div>
        </section>
      </div>
      <div className=" w-full md:max-w-[1000px] p-2">
        <h3 className="font-semibold mb-2 ">Description : </h3>
        <p className="text-xs md:text-base">{productInfo?.description}</p>
      </div>
      <SimilarProducts getItemsCart={getItemsCart} getProductInfo={getProductInfo} productInfo={productInfo} />
    </div>
  )
}

export default ProductDetail
