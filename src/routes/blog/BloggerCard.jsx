import { Link } from "react-router-dom"

const BloggerCard = ({bgImg, goto, title, summary}) => {
  return (
    <div className="rounded-md flex shadow-lg overflow-hidden h-auto bg-white">
        <div className="w-8/12 p-3">
            <h3 className="font-extrabold text-xl leading-5">{title}</h3>
            <h5 className="leading-5 mb-3 text-sm">{summary}</h5>
            <Link to={goto} className="border-2 border-yellow-400 py-1 px-4">Read Blog</Link>
        </div>
        <img src={bgImg} className="w-4/12" style={{"aspectRatio": "2/2"}} />
    </div>
  )
}

export default BloggerCard