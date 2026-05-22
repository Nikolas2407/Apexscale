import "./css/Frase.css";

import { motion } from "motion/react";

function Frase() {
  return (
    <motion.section
      className="frase"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1>
        No solo diseñamos interfaces bonitas.
        <br />
        Creamos soluciones funcionales,
        escalables y fáciles de usar para que tu
        negocio tenga una base digital sólida.
      </h1>
    </motion.section>
  );
}

export default Frase;