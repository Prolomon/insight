import Banner from "./Banner"
import BlogsSection from "./BlogsSection"
import TopBloggers from "./TopBloggers"

const Blog = ({login, avatar, bgImg}) => {
  return (
    <main className="w-full h-auto mx-auto bg-gray-100 overflow-hidden">
      <Banner login={login}/>
      <div className="w-10/12 mx-auto my-4">
        <BlogsSection bgImg={bgImg} />
        <TopBloggers avatar={avatar} />
      </div>
    </main>
  )
}

export default Blog