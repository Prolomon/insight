

const Blogger = ({avatar}) => {
  return (
    <div className="rounded-2xl shadow-xl bg-white overflow-hidden" style={{"flex": "1 0 18rem", "scrollSnapAlign": "start"}}>
        <div className="w-full rounded-bl-2xl rounded-br-2xl py-9 bg-green-700">
            <img src={avatar} alt="profile avatar" className="border-4 w-24 h-24 rounded-full mx-auto" />
        </div>
        <div className="bg-white py-3">
            <h3 className="text-xl font-semibold capitalize text-center">samuel john</h3>
            <p className="text-center mx-auto text-sm w-10/12 mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" className="capitalize text-center block w-full mb-1 text-white mx-3 px-5 bg-green-700 rounded-md py-2">look up</a>
        </div>
    </div>
  )
}

export default Blogger