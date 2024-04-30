
const MoreList = ({text, icon}) => {
  return (
    <a href="#" className="px-2 py-2 flex gap-2 hover:bg-yellow-400 bg-green-700 hover:text-black rounded-md">
        {icon}
        <p className="text-sm capitalize">{text}</p>
    </a>
  )
}

export default MoreList