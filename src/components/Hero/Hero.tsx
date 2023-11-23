import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./Hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
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
          <p className="section__subtext">Hi! 👋, Im</p>
          <h1 className="section__title">
            <Typewriter
              words={["Albert Colubi"]}
              typeSpeed={480}
              deleteSpeed={180}
              loop={1}
            />
          </h1>
          <p className="section__role">Full-Stack Developer</p>
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
              ]}
              cursor
              cursorStyle="_"
              typeSpeed={180}
              deleteSpeed={180}
              loop
            />
          </span>
          <div className="button-container">
            <Button className="button--solid">Download CV</Button>
            <NavLink className="button--opacity" to={"/contact"}>
              Contact info
            </NavLink>
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
