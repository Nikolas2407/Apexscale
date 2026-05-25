import "./css/Footer.css";

import { motion } from "motion/react";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <motion.div
          className="footer-cta"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2>¿Listo para escalar tu negocio?</h2>

          <p>
            Convirtamos tu idea en una solución digital moderna,
            funcional y preparada para crecer.
          </p>

          <motion.a
            href="https://www.instagram.com/apexsscale?igsh=MWJ4OGc1eGtuNTN5dA=="
            target="_blank"
            rel="noopener noreferrer"
            className="footer-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >

            <FaInstagram size={20} />

            <span>Síguenos en Instagram</span>

          </motion.a>

        </motion.div>

        <div className="footer-bottom">

          <p className="footer-copy">
            Diseñado y desarrollado por <strong>ApexScale®</strong> — 2026
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;