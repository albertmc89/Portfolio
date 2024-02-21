import { NavLink } from "react-router-dom";
import "./Hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import resume from "../../../public/albertCV.pdf";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [text, _i18n] = useTranslation("global");
  return (
    <>
      <motion.section
        id="home"
        className="hero-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={"visible"}
        viewport={{ once: false }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="hero-container__pic">
          <img
            className="hero-container__image"
            src="./img/profile-pic.webp"
            alt="Albert Colubi profile pic"
          />
        </div>
        <div className="section__text">
          <p className="section__subtext">{text("home.home-title")}</p>
          <h1 className="section__title">
            <Typewriter
              words={["Albert Colubi"]}
              typeSpeed={480}
              deleteSpeed={180}
              loop={1}
            />
          </h1>
          <p className="section__role">{text("home.home-role")}</p>
          <span className="section__skills">
            <Typewriter
              words={[
                "Javascript - TypeScript",
                "CSS",
                "React",
                "Redux Toolkit",
                "Express",
                "NodeJS",
                "Testing",
                "MongoDB",
                "Git",
                "Postman",
                "Supertest",
                "Jest",
                "Vite",
              ]}
              cursor
              cursorStyle="_"
              typeSpeed={180}
              deleteSpeed={180}
              loop
            />
          </span>
          <div className="button-container">
            <a className="button--solid" href={resume} download="AlbertCV">
              {text("home.home-download")}
            </a>
            <Link className="button--opacity" to="contact">
              {text("home.home-contact")}
            </Link>
          </div>
          <div className="social-container">
            <NavLink to={"https://github.com/albertmc89"}>
              <img
                src="/img/github.svg"
                alt="the github black and white logo"
                width={40}
                height={40}
              />
            </NavLink>
            <NavLink
              to={"https://www.linkedin.com/in/albert-colubi-moyano-8380a9281/"}
            >
              <img
                className="linkedin"
                src="/img/linkedin.svg"
                alt="My linkedin profile"
                width={45}
                height={45}
              />
            </NavLink>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
