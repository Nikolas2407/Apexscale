import "./css/Proceso.css";

import { motion } from "motion/react";

import proceso from "../assets/proceso.jpg";

function Proceso() {
  return (
    <section className="proceso">

      <motion.div
        className="proceso-img"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={'https://images.unsplash.com/photo-1603975711481-18b7aaca4caa?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Proceso de desarrollo" />
      </motion.div>

      <motion.div
        className="proceso-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2>Nuestro proceso</h2>

        <div className="pasos">

          <div className="paso">
            <span>1.</span>
            <div>
              <h3>Analizamos tu idea</h3>
              <p>
                Entendemos tu negocio, tus objetivos
                y tus necesidades.
              </p>
            </div>
          </div>

          <div className="paso">
            <span>2.</span>
            <div>
              <h3>Diseñamos la solución</h3>
              <p>
                Creamos una estructura clara,
                moderna y funcional.
              </p>
            </div>
          </div>

          <div className="paso">
            <span>3.</span>
            <div>
              <h3>Desarrollamos el producto</h3>
              <p>
                Construimos la solución usando
                tecnología actual.
              </p>
            </div>
          </div>

          <div className="paso">
            <span>4.</span>
            <div>
              <h3>Lanzamos y mejoramos</h3>
              <p>
                Publicamos, revisamos y optimizamos.
              </p>
            </div>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Proceso;