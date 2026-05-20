import Title from "../components/titles/Title";
import Button from "../components/buttons/Button";
import './css/Hero.css'
import { motion } from "motion/react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const visualVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

function Hero() {
    return (
        <section className="hero">
            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className="hero-copy" variants={itemVariants}>
                    <motion.div variants={itemVariants}>
                        <Title className="hero-title">
                            Creamos soluciones digitales <span>para escalar tu negocio</span>
                        </Title>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Title className="hero-description">
                            Diseñamos y desarrollamos páginas web, aplicaciones, automatizaciones y sistemas personalizados para empresas que quieren crecer con tecnología.
                        </Title>
                    </motion.div>

                    <motion.div className="hero-actions" variants={itemVariants}>
                        <motion.button
                            className="btn-primary"
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            Trabajemos juntos
                        </motion.button>
                        <Button className="btn-secondary">Ver servicios</Button>
                    </motion.div>

                    <motion.div className="hero-stats" variants={itemVariants}>
                        <div className="stat">
                            <strong>+3</strong>
                            <span>Marcas acompañadas</span>
                        </div>

                        <div className="stat">
                            <strong>+10</strong>
                            <span>Proyectos creados</span>
                        </div>

                        <div className="stat">
                            <strong>+5</strong>
                            <span>Desarrollos web</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div className="hero-visual" aria-hidden="true" variants={visualVariants}>
                    <div className="visual-card visual-card-main">
                        <span className="visual-label">Proyecto activo</span>
                        <h3>Dashboard empresarial</h3>
                        <div className="visual-bars">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className="visual-card visual-card-small top">
                        <span>Automatización</span>
                        <strong>+42%</strong>
                    </div>

                    <div className="visual-card visual-card-small bottom">
                        <span>Sistemas web</span>
                        <strong>Escalable</strong>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
export default Hero;