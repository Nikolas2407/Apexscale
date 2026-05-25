import './css/Us.css';
import { motion } from "motion/react";
import Title from "../components/titles/Title";
// Imagenes
import nicolas from "../assets/Niko.png";
import david from "../assets/David.jpeg";

function Us() {
    const teamMembers = [
        {
            name: "Nicolás Mejía",
            role: "CEO & Co-founder",
            image: nicolas,
            bio: "Experto en desarrollo de software, lidera la creación de productos digitales robustos y escalables con un enfoque en la calidad y la innovación."
        },
        {
            name: "Juan David Gil",
            role: "CTO & Co-founder",
            image: david,
            bio: "Experto en desarrollo full stack, lidera la creación de productos digitales robustos y escalables con un enfoque en la calidad y la innovación."
        }
    ];

    return (
        <section className="us-section" id="us">
            <div className="us-content">
                <motion.div
                    className="us-header"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                >
                    <span className="us-eyebrow">Nosotros</span>
                    <Title className="us-title">Conoce al equipo detrás de ApexScale.</Title>
                    <p className="us-description">
                        Somos un equipo apasionado por la tecnología y el desarrollo de software, comprometidos en crear soluciones digitales innovadoras que impulsen el crecimiento de nuestros clientes.
                    </p>
                </motion.div>

                <motion.div
                    className="team-grid"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.16,
                            },
                        },
                    }}
                >
                    {teamMembers.map((member, index) => (
                        <motion.article
                            className="team-card"
                            key={index}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 60,
                                    scale: 0.96,
                                    filter: "blur(10px)",
                                },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    filter: "blur(0px)",
                                    transition: {
                                        duration: 0.7,
                                        ease: [0.22, 1, 0.36, 1],
                                    },
                                },
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.015,
                                transition: { duration: 0.28, ease: "easeOut" },
                            }}
                        >
                            <div
                                className="team-card-image-bg"
                                style={{ backgroundImage: `url(${member.image})` }}
                                role="img"
                                aria-label={member.name}
                            />

                            <div className="team-card-info">
                                <h3>{member.name}</h3>
                                <small>{member.role}</small>
                                <p>{member.bio}</p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Us;