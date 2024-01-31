/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="about" className="section__about">
        <h2 className="section__title">About me</h2>
        <p className="about__text">
          I am thrilled to immerse myself in the dynamic realm of programming!
          Fueled by an unwavering passion for technology and a fervent
          commitment to learning and innovation, I am eager to contribute my
          skills to a collaborative team. As a dedicated problem solver, I
          relish the prospect of tackling intricate challenges and presenting
          inventive solutions. My steadfast dedication to continuous learning
          and staying abreast of the latest industry trends positions me as a
          valuable asset for your organization. I am prepared to channel my
          enthusiasm, adaptability, and determination to propel a team towards
          success in the ever-evolving field of programming. Beyond my technical
          abilities, I represent an autonomous actively seeking an opportunity
          to support and learn simultaneously. Although I am open to employment,
          I believe that the internship model within a reputable company would
          be particularly intriguing. I aspire to establish a connection with a
          company interested in someone who pursues programming not out of
          necessity, but out of a genuine passion for the craft, aiming to
          immerse oneself in the world of programming. It's important to note
          that economic ambition is not a priority for me. I am motivated by the
          love of programming and the desire to continually improve my skills.
          While I am interested in employment, my primary focus is on
          contributing to a team that shares my passion for technology.
          Considering my autonomous status, I am flexible regarding the terms of
          employment. Whether part-time or full-time, I believe that my
          autonomous background can provide flexibility in employment
          arrangements. I am enthusiastic about the prospect of building a
          mutually beneficial relationship, where I can contribute to your team
          goals while continuing my journey of exploration and growth in the
          programming field.
        </p>
        <div className="section__social-media">
          <NavLink to={"https://www.instagram.com/albertmc89/"}>
            <img
              className="instagram"
              src="/img/instagram.svg"
              alt="My instagram profile"
              width={45}
              height={45}
            />
          </NavLink>
          <NavLink to={"https://twitter.com/AColDev89"}>
            <img
              className="twitter"
              src="/img/twitter.svg"
              alt="My twitter profile"
              width={45}
              height={45}
            />
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default About;
