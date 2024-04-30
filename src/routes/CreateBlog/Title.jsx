
const Title = () => {
  return (
    <div className="w-full grid relative mb-1">
        <label htmlFor="title" className="text-xl font-semibold mb-1">Title</label>
        <input type="text" name="title" id="title" className="bg-transparent border-2 rounded-lg border-yellow-400 px-3 py-2 text-lg outline-none hover:border-green-700" />
    </div>
  )
}

export default Title