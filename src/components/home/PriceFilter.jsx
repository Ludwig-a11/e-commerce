const PriceFilter = ({setObjestFilterPrice, setTogleFilter}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      from: +e.target.fromPrice.value,
      to: +e.target.toPrice.value
    }
    setObjestFilterPrice(obj)
    e.target.fromPrice.value = ''
    e.target.toPrice.value = ''

    setTogleFilter(false)
  }
  // input controlado
  
  return (
    <div>
      <h3 className="font-semibold my-2">Price</h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input className="px-2 py-1 shadow-lg rounded-sm"  type="number" name="fromPrice" placeholder="from" />
        <input className="px-2 py-1 shadow-lg rounded-sm" type="number" name="toPrice" placeholder="to" />
        <button className="bg-red-400" type="submit">Filter</button>
      </form>
    </div>)
  
}

export default PriceFilter
