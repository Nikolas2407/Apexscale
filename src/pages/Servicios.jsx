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
      img: automatizacion,
      nombre: "Automatización de procesos",
      description:
        "Transformamos tareas diarias en sistemas autónomos.",
    },
    {
      id: 4,
      img: software,
      nombre: "Software a Medida",
      description:
        "Sistemas personalizados según las necesidades de tu negocio.",
    },
  ];

  return (
    <section className="servicios-section">

      <motion.div
        className="servicios-header"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Servicios</h2>

        <p>
          Soluciones tecnológicas modernas enfocadas en rendimiento,
          automatización y escalabilidad empresarial.
        </p>
      </motion.div>

      <div className="servicios-grid">
        {servicios.map((s, index) => (
          <motion.div
            className="servicio-card"
            key={s.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
          >
            <div className="servicio-glow"></div>

            <div className="servicio-image-container">
              <img src={s.img} alt={s.nombre} />
            </div>

            <div className="servicio-content">
              <h3>{s.nombre}</h3>
              <p>{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;