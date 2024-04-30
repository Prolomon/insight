import { ChevronDown } from "react-feather"

const Profile = ({avatar, title}) => {
  const handleClick = () => {
    const moreInfo = document.querySelector('#head-more-info')
    moreInfo.classList.toggle("hidden")
    
  }
  return (
    <div className="flex gap-1 items-center" onClick={handleClick}>
        <img src={avatar} alt="avatar img" className="w-9 rounded-full border-2 border-yellow-400" />
        <ChevronDown size={18} className="hidden lg:block md:block" />
        <h3 className="text-white hover:text-yellow-400 text-sm block lg:hidden md:hidden">{title}</h3>
    </div>
  )
}

export default Profile