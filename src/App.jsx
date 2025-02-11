import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home/Home"
import Sobre from "./pages/Sobre"
import Header from "./components/Header/Header"
import Contato from "./pages/Contato"
import Produto from "./pages/Produto"


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
    </>
  )
}

export default App 
