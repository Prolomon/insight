import { Search } from "react-feather"

const NavSearch = () => {
  return (
    <div className="flex items-center border-gray-200 gap-1 border rounded-md w-64 me-2 pe-2">
        <input type="search" name="search" placeholder="Search blogs" className="w-full bg-transparent ps-2 outline-none border-none"/>
        <Search />
    </div>
  )
}

export default NavSearch