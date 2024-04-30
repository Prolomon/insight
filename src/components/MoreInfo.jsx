import MoreList from "./MoreList"
import { User, FileText,  LogOut } from "react-feather"

const MoreInfo = () => {
  return (
    <div id="head-more-info" className="w-40 hidden h-auto absolute right-0 bg-green-600 shadow-2xl text-white p-2 top-10 rounded-md z-10">
        <div className=" rounded-md grid gap-1">
            < MoreList text="account" icon={<User />} />
            < MoreList text="logout" icon={<LogOut />} />
        </div>
    </div>
  )
}

export default MoreInfo