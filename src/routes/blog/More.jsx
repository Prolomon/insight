
const More = ({amount, icon}) => {
  return (
    <div className="flex items-center gap-1">
        {icon}
        <span className="">{amount}</span>
    </div>
  )
}

export default More