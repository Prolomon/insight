import Nav from "../components/Nav"
import { Menu } from "react-feather"
import NavMenu from "../components/NavMenu"

const Header = ({login, avatar, title}) => {
  const handleClick = () => {
    document.querySelector("#nav-menu").classList.toggle("hidden")
  }
  return (
    <header className="w-12/12 bg-green-700 border-b-2 border-green-500 text-white">
        <div className="m-auto w-11/12 flex items-center justify-between py-4">
          <a href="#">
            <h1 className="font-bold text-2xl">Insight</h1>
          </a>
          {/* menu */}
          <div>
            <Menu className="block lg:hidden md:hidden" onClick={handleClick}/>
          </div>
          <div className="hidden lg:block md:block">
            <Nav login={login} avatar={avatar} />
          </div>
        </div>
        <NavMenu login={login} avatar={avatar} title={title} />
    </header>
  )
}

export default Header