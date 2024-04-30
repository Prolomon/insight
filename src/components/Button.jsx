
const Button = ({goto, title}) => {
  return (
    <a href={goto} className="bg-yellow-400 text-black hover:bg-green-800 hover:text-gray-200 rounded-md px-3 py-2" role="button">{title}</a>
  )
}

export default Button