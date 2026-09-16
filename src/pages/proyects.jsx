import Title from "../components/titles/Title";
import "./css/proyects.css";
import { motion } from "motion/react";

import jupaImage from "../assets/projects/jupa.PNG";
import trianaImage from "../assets/projects/triana.PNG";
import liceoImage from "../assets/projects/liceointegral.PNG";
import dulceImage from "../assets/projects/dulcebaby.PNG";

const projects = [
    {
        number: "01",
        title: "JUPA PH",
        description:
            "Sitio web profesional para presentar la marca, sus servicios y fortalecer su presencia digital.",
        type: "Web Design",
        image: jupaImage,
        link: "https://www.jupa-ph.com/",
        className: "project-card large",
    },
    {
        number: "02",
        title: "Liceo Integral Joseph",
        description:
            "Plataforma web institucional diseñada para comunicar la propuesta educativa y facilitar el acceso a la información.",
        type: "Web Design",
        image: liceoImage,
        link: "https://www.liceointegraljoseph.com/",
        className: "project-card tall",
    },
    {
        number: "03",
        title: "Triana Beauty Studio",
        description:
            "Experiencia web enfocada en mostrar servicios, identidad de marca y facilitar el contacto con nuevos clientes.",
        type: "Web Design",
        image: trianaImage,
        link: "https://www.trianabeautystudio.com/",
        className: "project-card small",
    },
    {
        number: "04",
        title: "Dulce Baby Sleep Coach",
        description:
            "Sitio web profesional para presentar servicios especializados, generar confianza y conectar con nuevos clientes.",
        type: "Web Design",
        image: dulceImage,
        link: "https://www.dulcebabysleepcoach.com/",
        className: "project-card small",
    },
];

function Proyects() {
    return (
        <section className="projects-section" id="proyectos">
            <div className="projects-content">
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="projects-eyebrow">Proyectos</span>

                    <Title className="projects-title">
                        Soluciones digitales creadas para crecer.
                    </Title>

                    <p className="projects-description">
                        Algunos de los proyectos que hemos diseñado y desarrollado
                        para marcas, empresas y emprendedores.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article
                            className={project.className}
                            key={project.number}
                        >
                            <div className="project-card-bg" />

                            <div
                                className="project-card-image-bg"
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                }}
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

                                <a
                                    className="project-link"
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
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