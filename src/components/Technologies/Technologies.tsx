import "./Technologies.css";
import { useTranslation } from "react-i18next";
import react from "../../../public/img/react.svg";
import typescript from "../../../public/img/typescript.svg";
import sass from "../../../public/img/sass.svg";
import html from "../../../public/img/html.svg";
import js from "../../../public/img/js.svg";
import css from "../../../public/img/css.svg";
import figma from "../../../public/img/figma.svg";
import node from "../../../public/img/nodejs.svg";
import mongodb from "../../../public/img/mongodb.svg";
import express from "../../../public/img/express.svg";
import firebase from "../../../public/img/firebase.svg";
import postman from "../../../public/img/postman.png";
import mysql from "../../../public/img/mysql.svg";
import next from "../../../public/img/next.svg";
import github from "../../../public/img/github.svg";
import git from "../../../public/img/git.svg";
import vite from "../../../public/img/vite.svg";
import sonar from "../../../public/img/sonar.svg";
import eslint from "../../../public/img/eslint.svg";
import redux from "../../../public/img/redux.svg";
import reactrouter from "../../../public/img/reactrouter.svg";
import axios from "../../../public/img/axios.svg";
import jest from "../../../public/img/jest.svg";

const Contact = () => {
  const [text, _i18n] = useTranslation("global");

  return (
    <section className="technologies" id="technologies">
      <h2 className="section__title">
        {text("technologies.technologies-title")}
      </h2>
      <article className="technologies__grid">
        <div className="tg-container">
          <h2 className="frontend__title">FRONTEND</h2>
          <div className="frontend">
            <div className="frontend__tg">
              <img src={html} alt="html svg logo" width="45" height="45" />
              <h3>HTMl</h3>
            </div>
            <div className="frontend__tg">
              <img src={css} alt="Css svg logo" width="45" height="45" />
              <h3>CSS</h3>
            </div>
            <div className="frontend__tg">
              <img src={js} alt="Javascript svg logo" width="45" height="45" />
              <h3>JavaScript</h3>
            </div>
            <div className="frontend__tg">
              <img
                src={typescript}
                alt="Typescript svg logo"
                width="45"
                height="45"
              />
              <h3>TypeScript</h3>
            </div>
            <div className="frontend__tg">
              <img src={react} alt="React svg logo" width="45" height="45" />
              <h3>React</h3>
            </div>
            <div className="frontend__tg">
              <img src={redux} alt="React svg logo" width="45" height="45" />
              <h3>Redux</h3>
            </div>
            <div className="frontend__tg">
              <img src={figma} alt="Figma svg logo" width="45" height="45" />
              <h3>Figma</h3>
            </div>
            <div className="frontend__tg">
              <img src={sass} alt="Sass logo" width="45" height="45" />
              <h3>SASS</h3>
            </div>
          </div>
        </div>
        <div className="tg-container">
          <h2 className="backend__title">BACKEND</h2>
          <div className="frontend">
            <div className="frontend__tg">
              <img src={node} alt="Node svg logo" width="45" height="45" />
              <h3>NodeJS</h3>
            </div>
            <div className="frontend__tg">
              <img
                src={mongodb}
                alt="MongoDB svg logo"
                width="45"
                height="45"
              />
              <h3>MongoDB</h3>
            </div>
            <div className="frontend__tg">
              <img
                src={express}
                alt="Express svg logo"
                width="45"
                height="45"
              />
              <h3>Express</h3>
            </div>
            <div className="frontend__tg">
              <img
                src={firebase}
                alt="Firebase svg logo"
                width="45"
                height="45"
              />
              <h3>Firebase</h3>
            </div>
          </div>
        </div>
        <div className="tg-container">
          <h2 className="tools__title">TOOLS</h2>
          <div className="frontend">
            <div className="frontend__tg">
              <img
                src={postman}
                alt="Postman svg logo"
                width="45"
                height="45"
              />
              <h3>Postman</h3>
            </div>
            <div className="frontend__tg">
              <img src={github} alt="GitHub svg logo" width="45" height="45" />
              <h3>GitHub</h3>
            </div>
            <div className="frontend__tg">
              <img src={git} alt="Git svg logo" width="45" height="45" />
              <h3>Git</h3>
            </div>
            <div className="frontend__tg">
              <img src={vite} alt="Vite svg logo" width="45" height="45" />
              <h3>Vite</h3>
            </div>
            <div className="frontend__tg">
              <img
                src={sonar}
                alt="SonarCloud svg logo"
                width="45"
                height="45"
              />
              <h3>SonarCloud</h3>
            </div>
            <div className="frontend__tg">
              <img src={eslint} alt="Eslint svg logo" width="45" height="45" />
              <h3>ESlint</h3>
            </div>
            <div className="frontend__tg">
              <img
                src={reactrouter}
                alt="React-router-dom svg logo"
                width="45"
                height="45"
              />
              <h3>React-route-domr</h3>
            </div>
            <div className="frontend__tg">
              <img src={axios} alt="Axios svg logo" width="45" height="45" />
              <h3>Axios</h3>
            </div>
            <div className="frontend__tg">
              <img src={jest} alt="Jest svg logo" width="45" height="45" />
              <h3>Jest</h3>
            </div>
          </div>
        </div>
        <div className="tg-container">
          <h2 className="learn__title">LEARNING</h2>
          <div className="frontend">
            <div className="frontend__tg">
              <img src={next} alt="Next svg logo" width="45" height="45" />
              <h3>NextJS</h3>
            </div>
            <div className="frontend__tg">
              <img src={mysql} alt="MySQL svg logo" width="45" height="45" />
              <h3>MySQL</h3>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
