import Title from "../components/titles/Title";
import Button from "../components/buttons/Button";
import { FiPlus } from "react-icons/fi";


function Hero (){
    return(
        <div className="hero">
        <Title className="Title_1">Creamos soluciones digitales para escalar tu negocio</Title>
        <Title>Desarrollamos páginas web, aplicaciones, automatizaciones y sistemas personalizados para empresas que quieren crecer con tecnología.</Title>
        <Button>Trabajemos juntos</Button>
        <Button>Ver servicios</Button>
        {/* Cards */}
        <div className="cards">
            <div className="card">
                <Title>3 marcas</Title>
            </div>
            <div className="card">
                <Title><FiPlus />10 Proyectos</Title>
            </div>
            <div className="card">
                <Title>5 desarrollo web</Title>
            </div>
        </div>
        </div>
    )
}
export default Hero;