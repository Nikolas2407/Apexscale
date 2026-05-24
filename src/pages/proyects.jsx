import Title from "../components/titles/Title";
import "./css/proyects.css";
import { motion } from "motion/react";

const projects = [
    {
        number: "01",
        title: "Landing page corporativa",
        description: "Diseño y desarrollo de una página moderna para presentar servicios, captar clientes y fortalecer la presencia digital.",
        type: "Web Design",
        image: "https://images.unsplash.com/photo-1648134859177-66e35b61e106?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
        className: "project-card large",
    },
    {
        number: "02",
        title: "Sistema administrativo",
        description: "Panel interno para organizar procesos, datos y operaciones de una empresa.",
        type: "Dashboard",
        image: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
        className: "project-card tall",
    },
    {
        number: "03",
        title: "Automatización de procesos",
        description: "Flujos digitales para reducir tareas manuales y mejorar la productividad.",
        type: "Automation",
        image: "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
        className: "project-card small",
    },
    {
        number: "04",
        title: "Aplicación móvil",
        description: "App moderna, rápida y escalable para conectar negocios con sus usuarios.",
        type: "Mobile App",
        image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "#",
        className: "project-card small",
    },


];

function Proyects() {
    return (
        <section className="projects-section" id="proyectos">
            <div className="projects-content">
                <motion.div className="projects-header"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}>
                    <span className="projects-eyebrow">Proyectos</span>
                    <Title className="projects-title">Soluciones digitales creadas para crecer.</Title>
                    <p className="projects-description">
                        Algunos tipos de productos que podemos diseñar y desarrollar para marcas, empresas y emprendedores.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className={project.className} key={project.number}>
                            <div className="project-card-bg" />

                            <div
                                className="project-card-image-bg"
                                style={{ backgroundImage: `url(${project.image})` }}
                                role="img"
                                aria-label={project.title}
                            />

                            <div className="project-card-overlay" />

                            <div className="project-card-top">
                                <span>{project.number}</span>
                                <small>{project.type}</small>
                            </div>

                            <div className="project-card-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                                    Ver proyecto
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Proyects;