import { useEffect, useState } from "react"
import BloggerCard from "./BloggerCard"

const BlogsSection = ({bgImg}) => {

  const [title, setTitle] = useState("")
  const [summary, setSummary] = useState("")
  const [goto, setGoto] = useState("")

  useEffect(() => {
    setTitle("Lorem ipsum dolor sit amet consectetur.")
    setSummary("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum odit rem, temporibus architecto eligendi nobis.")
    setGoto("#")
  },[])

  return (
    <div className="w-full">
        <div className="mt-3">
            <div className="w-full h-auto grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                <BloggerCard bgImg={bgImg} title={title} summary={summary} goto="/Blog-Content" />
                <BloggerCard bgImg={bgImg} title={title} summary={summary} goto="/Blog-Content" />
                <BloggerCard bgImg={bgImg} title={title} summary={summary} goto="/Blog-Content" />
                <BloggerCard bgImg={bgImg} title={title} summary={summary} goto="/Blog-Content" />
                <BloggerCard bgImg={bgImg} title={title} summary={summary} goto="/Blog-Content" />
                <BloggerCard bgImg={bgImg} title={title} summary={summary} goto="/Blog-Content" />
                <BloggerCard bgImg={bgImg} title={title} summary={summary} goto="/Blog-Content" />
            </div>
        </div>
    </div>
  )
}

export default BlogsSection