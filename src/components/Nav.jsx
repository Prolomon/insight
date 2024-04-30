import Profile from "./Profile";
import NavList from "./NavList";
import MoreInfo from "./MoreInfo"
import { Edit3, FileText, Search, LogIn } from "react-feather"

const Nav = ({login, avatar}) => {
    return (
      <nav className=" flex gap-2 items-center relative">
        <NavList goto="/" title="Blog" icon={<FileText/>}/>
        <NavList goto="/Create-Blog" title="Create Blog" icon={<Edit3/>}/>
        <NavList goto="/Search" title="Search" icon={<Search/>}/>
        <NavList goto="/Category" title="category" icon={<FileText />} />
        {login ? <Profile avatar={avatar} /> : <NavList goto="#" title="login/register" icon={<LogIn />} />}
        <MoreInfo />
      </nav>
    )
}

export default Nav