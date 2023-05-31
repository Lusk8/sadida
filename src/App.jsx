import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home/Home"
import Sobre from "./pages/Sobre"
import Header from "./components/Header/Header"
import Produto from "./pages/Produto/Produto"
import Footer from "./components/Header/Footer/footer"
import Contato from "./pages/contato/Contato"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/produto" element={<Produto/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App 
