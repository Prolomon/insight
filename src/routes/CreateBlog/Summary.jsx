
const Summary = () => {
  return (
    <div className="w-full relative grid mb-1">
        <label htmlFor="title" className="text-xl font-semibold mb-1">Summary</label>
        <textarea name="summary" id="summary" cols="30" rows="3" className="bg-transparent border-2 rounded-lg border-yellow-400 px-3 py-2 text-lg outline-none hover:border-green-700"></textarea>
    </div>
  )
}

export default Summary