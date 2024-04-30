import Title from "./Title"
import Category from "./Category"
import Summary from "./Summary"
import { useState } from "react"
import Markdown from "./Markdown"

const CreateBlog = () => {

    const [markdown, setMarkdown] = useState("")

  return (
    <main className="w-full h-auto mx-auto bg-gray-100 ">
        <div className="w-10/12 mx-auto my-4">
            <h1 className="font-bold text-3xl border-b border-yellow-400 pb-3">Create Blog Post</h1>
            <form onSubmit={e => e.preventDefault()} className="w-full mt-4 grid relative">
                <Title />
                <Category />
                <Summary />
                <Markdown markdown={markdown} setMarkdown={setMarkdown} />
                <button type="submit" className="capitalize w-[80vw] px-8 py-2 text-center mt-2 mx-auto  rounded-md bg-yellow-400">send post</button>
            </form>
        </div>
    </main>
  )
}

export default CreateBlog