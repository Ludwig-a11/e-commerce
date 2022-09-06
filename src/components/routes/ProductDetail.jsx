import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { setProducts } from '../../store/slices/products.slice'

const ProductDetail = () => {
  const [productInfo, serProductInfo] = useState()

  const { id } = useParams()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios
      .get(URL)
      .then((res) => setProducts(res.data.data.product))
      .catch((err) => console.log(err))
  }, [])

  return <div>ProductDetail</div>
}

export default ProductDetail
