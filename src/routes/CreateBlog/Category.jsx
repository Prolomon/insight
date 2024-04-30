
const Category = () => {
  return (
    <div className="w-full grid relative mb-1">
        <label htmlFor="title" className="text-xl font-semibold mb-1">Category</label>
        <select name="category" id="category" className="bg-transparent border-2 rounded-lg border-yellow-400 px-3 py-2 text-lg outline-none hover:border-green-700">
            <option hidden aria-hidden>---- Select a category ----</option>
            <option value="science" className="">Science</option>
            <option value="fasion">Fasion</option>
            <option value="entertainment">Entertainment</option>
        </select>
    </div>
  )
}

export default Category