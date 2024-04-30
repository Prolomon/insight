import {Link} from "react-router-dom"

const NavList = ({title, icon, goto}) => {
  return (
    <Link to={goto} className="hover:bg-yellow-400 capitalize hover:text-black rounded-md px-3 py-2 flex items-center gap-1">
        {icon}{title}</Link>
  )
}

export default NavList