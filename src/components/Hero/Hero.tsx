import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-container__pic">
        <img
          className="hero-container__image"
          src="./img/profile-pic.webp"
          alt="Albert Colubi profile pic"
        />
      </div>
      <div className="section__text">
        <p className="section__subtext">Hi! 👋, Im</p>
        <h1 className="section__title">Albert Colubi</h1>
        <p className="section__role">Full-Stack Developer</p>
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
              width={40}
              height={40}
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
