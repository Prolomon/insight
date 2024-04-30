import Blog from "../routes/blog/Blog"
import BlogContent from "../routes/blog/BlogContent"
import CreateBlog from "../routes/CreateBlog/CreateBlog"
import Search from "../routes/search/Search"
import Category from "../routes/category/category"
import { Routes, Route } from "react-router-dom"

const Main = ({avatar, bgImg}) => {
    return(
        <main className="w-full h-100">
            {/* <RouterProvider router={router} /> */}
            <Routes>
                <Route path="/" element={<Blog avatar={avatar} bgImg={bgImg} />} /> 
                <Route path="/Blog-Content" element={<BlogContent avatar={avatar} bgImg={bgImg} />} />
                <Route path="/Create-Blog" element={<CreateBlog />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/Category" element={<Category bgImg={bgImg} />} />
            </Routes>
        </main>
    )
}

export default Main