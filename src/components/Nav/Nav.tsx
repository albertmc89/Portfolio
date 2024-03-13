import { useLocation } from "react-router-dom";
import paths from "../../paths/paths";
import "./Nav.css";
import { Link } from "react-scroll";
import home from "/img/home.png";
import about from "/img/about.png";
import projects from "/img/projects.png";
import technologies from "/img/contact.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Navigation = (): React.ReactElement => {
  const { pathname } = useLocation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);
  const [text, i18n] = useTranslation("global");

  const updateNav = () => {
    setIsDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateNav);
    return () => window.removeEventListener("resize", updateNav);
  });

  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__link">
            <Link
              className={
                pathname === paths.home
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="home"
              spy={true}
            >
              {!isDesktop ? (
                <img src={home} alt="home icon" width="24" height="24" />
              ) : (
                text("home.home")
              )}
            </Link>
          </li>
          <li className="navigation__link">
            <Link
              className={
                pathname === paths.about
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="about"
              spy={true}
            >
              {!isDesktop ? (
                <img src={about} alt="home icon" width="24" height="24" />
              ) : (
                text("about.about")
              )}
            </Link>
          </li>
          <li className="navigation__link">
            <Link
              className={
                pathname === paths.projects
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="projects"
            >
              {!isDesktop ? (
                <img src={projects} alt="home icon" width="24" height="24" />
              ) : (
                text("projects.projects")
              )}
            </Link>
          </li>
          <li className="navigation__link">
            <Link
              className={
                pathname === paths.contact
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="technologies"
            >
              {!isDesktop ? (
                <img
                  src={technologies}
                  alt="home icon"
                  width="24"
                  height="24"
                />
              ) : (
                text("technologies.technologies")
              )}
            </Link>
          </li>
        </ul>
        <div className="wrap-toggle">
          <button
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            <span className="flags">🇺🇸</span>
          </button>
          <button
            onClick={() => {
              i18n.changeLanguage("es");
            }}
          >
            <span className="flags">🇪🇸</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
