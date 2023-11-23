import { NavLink } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="about" className="section__about">
        <h2 className="about__title">About me</h2>
        <p className="about__text">
          I am thrilled to dive headfirst into the exciting world of
          programming! With a burning passion for technology and a strong desire
          to learn and innovate, I am eager to contribute my skills to a team.
          As a dedicated problem solver, I am excited about the opportunity to
          tackle complex challenges and bring creative solutions to the table.
          My commitment to continuous learning and staying up-to-date with the
          latest industry trends makes me a valuable asset for your
          organization. I am ready to bring my enthusiasm, adaptability, and
          determination to help a team succeed in this ever-evolving field of
          programming.
        </p>
        <NavLink to={"https://www.instagram.com/"}>
          <img
            className="instagram"
            src="/img/instagram.svg"
            alt="My instagram profile"
            width={45}
            height={45}
          />
        </NavLink>
      </section>
    </>
  );
};

export default About;
