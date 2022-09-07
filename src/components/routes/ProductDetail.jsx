import axios from 'axios'
import { useEffect, useState } from 'react'


import { Link, useParams} from 'react-router-dom'


const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState()

  const { id } = useParams()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios
      .get(URL)
      .then((res) => setProductInfo(res.data.data.product))
      .catch((err) => console.log(err))
  }, [])
  console.log(productInfo)

  return (
    <div className="mt-10">
      <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap items-center mb-16">
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
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <img
                className="mx-auto"
                src={productInfo?.productImgs[1]}
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-md mb-6">
                <h2 className="mt-6 mb-4 text-5xl md:text-7xl lg:text-6xl font-heading font-medium">
                  {productInfo?.title}
                </h2>
                <p className="flex items-center mb-6">
                  <span className="mr-2 text-sm text-blue-500 font-medium">
                    $
                  </span>
                  <span className="text-3xl text-blue-500 font-medium">
                    {productInfo?.price}
                  </span>
                </p>
                <p className="text-lg max-h-32 overflow-y-scroll text-gray-400">
                  {productInfo?.description}
                </p>
              </div>
              <div className="mb-10">
                <h4 className="mb-3 font-heading font-medium">Qty:</h4>
                <input
                  className="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  type="text"
                  placeholder="1"
                />
              </div>
              <div className="flex flex-wrap -mx-2 mb-12">
                <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0">
                  <a
                    className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                    href="#">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
