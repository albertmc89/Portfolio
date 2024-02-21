import { motion } from "framer-motion";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [text, _i18n] = useTranslation("global");

  return (
    <section className="contact" id="contact">
      <h2 className="section__title">{text("contact.contact-title")}</h2>
      <motion.div
        className="contact-info-upper-container"
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
          borderRadius: ["0px", "40px", "40px", "0px", "0px"],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <div className="contact-info-container">
          <img src="/img/email.png" alt="Email icon" width={30} height={30} />
          <a href="mailto:albertmc89@gmail.com">albertmc89@gmail.com</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
