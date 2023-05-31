import tenis1 from "../../assets/img/Tenis-1.png";
import tenis2 from "../../assets/img/Tenis-2.png";
import tenis3 from "../../assets/img/Tenis-3.png";
import tenis4 from "../../assets/img/Tenis-4.png";
import tenis5 from "../../assets/img/Tenis-5.png";
import tenis6 from "../../assets/img/Tenis-6.png";
import bannerproduto from "../../assets/img/banner-produto.png";
import "../Produto/estilo.css"

function Produto() {
    return (
        <>
            <div className="container-banner">
                <img src={bannerproduto} alt="" />
            </div>

            <div className="container-produtos">
                    
                
                <div className="produto-esquerda-1">

                    
                        <img src={tenis1} alt="" />
                        <p>Tênis Sadida para academia</p>
                        <p>R$399,90</p>
                        <button className="comprar-esquerda-1">Comprar</button>
                    

                </div>

                <div className="produto-centro-1">
                    
                        <img src={tenis2} alt="" />
                        <p>Tênis Sadida Air Confort</p>
                        <p>R$199,99</p>
                        <button className="comprar-centro-1">Comprar</button>
                    
                </div>

                <div className="produto-direita-1">
                    
                        <img src={tenis3} alt="" />
                        <p>Tênis Sadida Branco Casual</p>
                        <p>R$249,90</p>
                        <button className="comprar-direita-1">Comprar</button>
                    
                </div>

            </div>

            <div className="container-produtos-2">
                    
                
                <div className="produto-esquerda-2">

                        <img src={tenis4} alt="" />
                        <p>Tênis Sadida Versão Skate</p>
                        <p>R$299,90</p>
                        <button className="comprar-esquerda-1">Comprar</button>

                </div>

                <div className="produto-centro-2">
                        <img src={tenis5} alt="" />
                        <p>Tênis Sadida para Corrida</p>
                        <p>R$229,90</p>
                        <button className="comprar-centro-1">Comprar</button>
                </div>

                <div className="produto-direita-2">
                        <img src={tenis6} alt="" />
                        <p>Tênis Sadida Luxo</p>
                        <p>R$499,90</p>
                        <button className="comprar-direita-1">Comprar</button>
                </div>

            </div>


        </>
    )
}

export default Produto;