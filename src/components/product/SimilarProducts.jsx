import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CardHome from "../home/CardHome"

const SimilarProducts = ({productInfo, getProductInfo, getItemsCart}) => {
    const [filterProducts, setFilterProducts] = useState()


    const products = useSelector((state) => state.products)

    useEffect(() => {
        if (productInfo) {
            console.log(productInfo)
            const filter = products?.filter(e => e.category.name === productInfo.category)
            setFilterProducts(filter)
        }
    }, [productInfo])

    
  return (
    <div className=" w-full md:max-w-[1000px] p-2 mb-6" >
        <h3 className='font-semibold mb-4'>Similar Products</h3>
        <div className="w-full max-w-[1265px] bg-slate-100 flex flex-wrap gap-8 justify-center">

        {
            filterProducts?.map(product => (
                product.title !== productInfo.title &&  <CardHome key={product.id} product={product} getProductInfo={getProductInfo} getItemsCart={getItemsCart} />
                
            ))
        }
        </div>
    </div>
  )
}

export default SimilarProducts