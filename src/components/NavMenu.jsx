import Profile from "./Profile";
import NavList from "./NavList";
import { Home, Edit3, FileText, Search, LogOut, LogIn } from "react-feather";

const NavMenu = ({ login, avatar, title, goto }) => {
  return (
    <div className="w-11/12 h-auto mx-auto py-2 border-t-2 hidden lg:hidden xl:hidden" id="nav-menu">
      <div className="w-full">
        <nav className=" grid grid-cols-2 gap-2 items-center relative">
          <NavList goto="/" title="Blog" icon={<FileText/>}/>
          <NavList goto="/Create-Blog" title="Create Blog" icon={<Edit3/>}/>
          <NavList goto="/Search" title="Search" icon={<Search/>}/>
          <NavList goto="/Category" title="category" icon={<FileText />} />
          {login ? (
            <div className="ms-4">
                <a href={goto}><Profile avatar={avatar} title={title} /></a>
            </div>
          ) : (
            <NavList goto="#" title="login/sign up" icon={<LogIn />} />
          )}
          {login && (<NavList goto="#" title="logout" icon={<LogOut />} />)}
        </nav>
      </div>
    </div>
  );
};

export default NavMenu;
