import tech from "../../assets/banner.jpg"
import Button from "../../components/Button";

const Banner = ({login}) => {
  return (
    <div className="w-screen relative shadow-lg h-96 overflow-hidden">
        <img src={tech} className="w-full h-96 " />
        <div className="w-screen h-screen grid absolute top-0 left-0 bg-black opacity-55"></div>
        <div className="w-screen mx-auto h-96  inline-block items-center justify-center absolute top-0 left-0 text-gray-300">
          <div className="w-[80%] m-auto h-96 flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-4xl text-center">Stay Updated with the latest Info</h1>
            <p className="text-xl text-center mb-3">Discover new perspective, Learn something new and stay up-to-date on the latest trends and topics with our diverse collection of blog posts from all categories.</p>
            {login ? <Button goto="#" title="Read Blogs" /> : <Button goto="#" title="Get Started" />}
          </div>
        </div>
    </div>
  )
}

export default Banner