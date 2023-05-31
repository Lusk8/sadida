import whats from "../../assets/img/Whats.png"
import insta from "../../assets/img/Instagram.png"
import face from "../../assets/img/Facebook.png"
import "./estilo.css"
import "../../components/botao.css"

function Contato() {
    return (
    <>
       <div className="segue">
        <h1>Siga-nos</h1>
       </div>
    <div className="container-geral">

        <div className="whats glow-on-hover">
            <img src={whats} alt="whats" />
            <span>(11) 96452-0215</span>
        </div>

        <div className="insta glow-on-hover">
            <img src={insta} alt="insta" />
            <span>@sadida_Oficial</span>
        </div>

        <div className="face glow-on-hover">
         <img src={face} alt="face " />
         <span>Sadida Oficial</span>
        </div>
    </div>
    </>
    )
}

export default Contato;
