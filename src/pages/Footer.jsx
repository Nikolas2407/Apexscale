import "./css/Footer.css";

import { motion } from "motion/react";

import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";

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

          {/* SOCIAL BUTTONS */}

          <div className="footer-socials">

            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/apexsscale?igsh=MWJ4OGc1eGtuNTN5dA=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn instagram"
            >
              <FaInstagram size={22} />
            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/573112807065"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn whatsapp"
            >
              <FaWhatsapp size={22} />
            </a>

            {/* GMAIL */}

            <a
              href="mailto: apexsscale.com"
              className="social-btn gmail"
            >
              <FaEnvelope size={20} />
            </a>

          </div>

        </motion.div>

        {/* FOOTER BOTTOM */}

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