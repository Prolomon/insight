import { useState, useEffect } from "react";
import avatar from "./assets/avatar.jpg"
import bgImg from "./assets/banner.jpg"
import Header from "./layout/Header"
import Footer from "./layout/Footer";
import Main from "./layout/Main";

function App() {
  const [isLogin, setLogin] = useState()
  useEffect(() => {
    setLogin(true)
  },[])
  return (
    <div className="w-full h-screen">
      <Header login={isLogin} avatar={avatar} title="Prolomon" />
      <Main avatar={avatar} bgImg={bgImg}  />
      <Footer />
    </div>
  )
}

export default App
