

const Categories = () => {
  return (
    <div className="h-auto overflow-x-auto relative flex gap-2 py-1" style={{"scrollSnapType": "x mandatory","scrollBehavior": "smooth"}}>
        <input type="button" role="anchor" className="rounded-md py-1 px-3 capitalize shadow-xl bg-yellow-400 overflow-hidden" style={{"flex": "1 0 auto", "scrollSnapAlign": "start"}} value="tech" />
        <input type="button" role="anchor" className="rounded-md py-1 px-3 capitalize shadow-xl bg-white overflow-hidden" style={{"flex": "1 0 auto", "scrollSnapAlign": "start"}} value="entertainment" />
        <input type="button" role="anchor" className="rounded-md py-1 px-3 capitalize shadow-xl bg-white overflow-hidden" style={{"flex": "1 0 auto", "scrollSnapAlign": "start"}} value="sport" />
        <input type="button" role="anchor" className="rounded-md py-1 px-3 capitalize shadow-xl bg-white overflow-hidden" style={{"flex": "1 0 auto", "scrollSnapAlign": "start"}} value="business" />
        <input type="button" role="anchor" className="rounded-md py-1 px-3 capitalize shadow-xl bg-white overflow-hidden" style={{"flex": "1 0 auto", "scrollSnapAlign": "start"}} value="science" />
        <input type="button" role="anchor" className="rounded-md py-1 px-3 capitalize shadow-xl bg-white overflow-hidden" style={{"flex": "1 0 auto", "scrollSnapAlign": "start"}} value="politics" />
    </div>
  )
}

export default Categories