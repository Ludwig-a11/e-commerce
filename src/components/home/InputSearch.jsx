const InputSearch = ({ setInputSearch }) => {
  const handleChange = (e) => setInputSearch(e.target.value.trim())

  return (
    <input
      className="px-2 py-1 w-full max-w-[250px] shadow-lg rounded-sm"
      onChange={handleChange}
      placeholder="Search"
      type="text"
    />
  )
}

export default InputSearch
