import "./css/Servicios.css";

import automatizacion from "../assets/automatizacion.jpeg";
import software from "../assets/software.jpg";
import aplicaciones from "../assets/aplicaciones.png";
import web from "../assets/web.jpg";

import { motion } from "motion/react";

function Servicios() {
  const servicios = [
    {
      id: 1,
      img: web,
      nombre: "Desarrollo web",
      description:
        "Landing pages, sitios corporativos y plataformas modernas.",
    },
    {
      id: 2,
      img: aplicaciones,
      nombre: "Aplicaciones Móviles",
      description:
        "Apps con React Native, Expo y tecnologías escalables.",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      nombre: "Automatización de procesos",
      description:
        "Transformamos tareas diarias en sistemas autónomos.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      nombre: "Software a Medida",
      description:
        "Sistemas personalizados según las necesidades de tu negocio.",
    },
        {
      id: 5,
      img: "https://plus.unsplash.com/premium_photo-1681487735113-5224f4e33cd2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      nombre: "Impulsamos tu negocio",
      description:
        "Hacemos tu negocio mediante Google Ads.",
    }
  ];

  return (
    <section className="servicios-section" id="servicios">

      <motion.div
        className="servicios-header"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h2>Servicios</h2>

        <p>
          Soluciones tecnológicas modernas enfocadas en rendimiento,
          automatización y escalabilidad empresarial.
        </p>
      </motion.div>

      <motion.div
        className="servicios-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.14,
            },
          },
        }}
      >
        {servicios.map((s, index) => (
          <motion.div
            className="servicio-card"
            key={s.id}
            variants={{
              hidden: {
                opacity: 0,
                y: 70,
                scale: 0.94,
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
              y: -12,
              scale: 1.025,
              transition: { duration: 0.28, ease: "easeOut" },
            }}
          >
            <div className="servicio-glow"></div>

            <motion.div
              className="servicio-image-container"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <img src={s.img} alt={s.nombre} />
            </motion.div>

            <div className="servicio-content">
              <h3>{s.nombre}</h3>
              <p>{s.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Servicios;