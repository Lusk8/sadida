import banner from "../../assets/img/Banner.png";
import "../Home/estilo.css"
function Home() {
    return (
        <>
            <div className="container-separador">
            </div>

            <div className="banner">
                <img src={banner} alt="" />
            </div>

            <div className="Container-branco">
                <div className="texto-1">
                    <span>Já conhece nossos produtos?</span>
                </div>

                <div className="texto-2">
                    <span>Conheça!</span>
                </div>

                <div className="texto-3">
                    <button className="mao">Clique aqui!</button>
                </div>
            </div>

           
        </>
    )
}

export default Home;