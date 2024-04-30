import SearchBar from "./SearchBar"
import Output from "./Output"

const Search = () => {

  return (
    <main className="w-full h-auto mx-auto bg-gray-100 ">
        <div className="w-10/12 mx-auto my-4">
            <SearchBar />
            <Output /> 
        </div>
    </main>
  )
}

export default Search