import Blogger from "./Blogger"

const TopBloggers = ({avatar}) => {
  return (
    <div className="w-full mt-8">
        <h2 className="text-2xl font-bold text-center">Top Bloggers</h2>
        <div className="w-full mt-5">
          <div className="h-auto overflow-x-auto relative flex mt-3 gap-4 pb-1" style={{"scrollSnapType": "x mandatory","scrollBehavior": "smooth"}}>
            <Blogger avatar={avatar} />
            <Blogger avatar={avatar} />
            <Blogger avatar={avatar} />
            <Blogger avatar={avatar} />
            <Blogger avatar={avatar} />
            <Blogger avatar={avatar} />
            <Blogger avatar={avatar} />
            <Blogger avatar={avatar} />
          </div>
        </div>
    </div>
  )
}

export default TopBloggers