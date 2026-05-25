import Title from "../components/titles/Title";
import "../pages/css/Nosotros.css";

function Nosotros() {
    return (
        <section className="us-section" id="nosotros">
            <div className="us-content">
                <div className="us-copy">
                    <Title className="nosotros-title">
                        Más que diseño, construimos bases digitales para crecer.
                    </Title>
                </div>

                <div className="us-grid">
                    <article className="us-card large reveal-card">
                        <span>01</span>
                        <h3>Diseño funcional</h3>
                        <p>Interfaces modernas, limpias y pensadas para que el usuario entienda qué hacer sin complicaciones.</p>
                    </article>

                    <article className="us-card reveal-card">
                        <span>02</span>
                        <h3>Desarrollo escalable</h3>
                        <p>Código organizado y preparado para crecer junto con el negocio.</p>
                    </article>

                    <article className="us-card reveal-card">
                        <span>03</span>
                        <h3>Procesos claros</h3>
                        <p>Acompañamos cada etapa: idea, diseño, desarrollo, lanzamiento y mejora.</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Nosotros;