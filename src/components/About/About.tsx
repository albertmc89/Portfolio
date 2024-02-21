/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import "./About.css";
import foto2 from "/img/foto2.webp";
import { useTranslation } from "react-i18next";

const About = () => {
  const [text, _i18n] = useTranslation("global");
  return (
    <>
      <section id="about" className="section__about">
        <h2 className="section__title">{text("about.about-title")}</h2>
        <article className="section__container">
          <div className="container__about">
            <img
              className="about__picture"
              src={foto2}
              alt=""
              width="100"
              height="100"
            />
            <p className="about__text">{text("about.about-text")}</p>
          </div>

          <ul className="education">
            <h2>{text("about.about-education")}</h2>
            <li className="education__list">
              <span>
                <strong>- ISDI CODERS</strong>
              </span>
              <p className="education__role">
                <i>{text("about.about-role1")}</i>
              </p>
              <span className="education__range">
                <i>2023</i>
              </span>
            </li>
            <li className="education__list">
              <span>
                <strong>- Universitat de Barcelona</strong>
              </span>
              <p className="education__role">
                <i>{text("about.about-role2")}</i>
              </p>
              <span className="education__range">
                <i>2009-2014</i>
              </span>
            </li>
          </ul>
        </article>
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
