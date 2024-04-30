import { Search } from "react-feather"

const SearchBar = () => {
    return (
        <form className="w-full flex items-center border-2 border-yellow-400 rounded-md justify-center mb-2" form onSubmit={e => e.preventDefault()} >
            <Search className="px-[0.35rem] w-14" size={28} />
            <input type="search" name="search" id="search" className="w-full bg-transparent outline-none border-none "/>
            <input type="submit" value="search" className="w-auto px-5 py-2 bg-yellow-400 " />
        </form> 
    )
}

export default SearchBar
