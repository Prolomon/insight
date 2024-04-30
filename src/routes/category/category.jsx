import Categories from "./Categories"
import BlogsSection from "./BlogsSection"

const category = ({bgImg}) => {
  return (
    <main className="w-full h-auto mx-auto bg-gray-100 ">
        <div className="w-10/12 mx-auto my-4">
            <Categories />
            <BlogsSection bgImg={bgImg} />
        </div>
    </main>
  )
}

export default category