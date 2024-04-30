import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "react-feather"

const SocialMedia = () => {
  return (
    <div className="">
        <h1 className="text-2xl mb-2">Follow us on</h1>
        <dic className="flex gap-3">
            <a href="#" className="text-white" title="https://facebook.com"><Facebook size={30} className="hover:text-yellow-400" /></a>
            <a href="#" className="text-white" title="https://instagram.com"><Instagram size={30} className="hover:text-yellow-400" /></a>
            <a href="#" className="text-white" title="https://linkedin.com"><Linkedin size={30} className="hover:text-yellow-400" /></a>
            <a href="#" className="text-white" title="https://youtube.com"><Youtube size={30} className="hover:text-yellow-400" /></a>
            <a href="#" className="text-white" title="https://twitter.com"><Twitter size={30} className="hover:text-yellow-400" /></a>
        </dic>
    </div>
  )
}

export default SocialMedia