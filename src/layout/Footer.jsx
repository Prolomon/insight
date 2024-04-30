import NewsLatter from "../components/NewsLatter"
import SocialMedia from "../components/SocialMedia"

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-green-600 py-4">
        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-1">
            <NewsLatter />
            <SocialMedia />
        </div>
        <p className="text-center text-gray-400 mt-2">&copy; 2024 Instght blog.All Right Reserved</p>
    </footer>
  )
}

export default Footer