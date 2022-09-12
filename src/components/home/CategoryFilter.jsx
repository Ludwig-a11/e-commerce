import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductByCategory } from '../../store/slices/products.slice'

const CategoryFilter = ({setObjestFilterPrice, setTogleFilter}) => {

    const [categories, setCategories] = useState()
    
    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    console.log(categories)
    const dispatch = useDispatch()

    const handleClickCategory = (id) => {
        setObjestFilterPrice(undefined)
        dispatch(getProductByCategory(id))
        setTogleFilter(false)
    }

    const products = useSelector((state) => state.products)

    console.log(products)

    const handleClickAllProducts = () => {
        setObjestFilterPrice(undefined)
        dispatch(getAllProducts())
        setTogleFilter(false)
    }
    
  return (
    <div>
        <h3 className='font-semibold'>Category</h3>
        <ul className='flex flex-col gap-2 mt-4'>
            <li onClick={handleClickAllProducts}>All Products</li>
            {
                categories?.map(category => <li onClick={() => handleClickCategory(category.id)} key={category.id}>{category.name}</li>)
            }
        </ul>
    </div>
  )
}

export default CategoryFilter