import { useLocation } from "react-router-dom";
import paths from "../../paths/paths";
import "./Nav.css";
import { Link } from "react-scroll";

const Navigation = (): React.ReactElement => {
  const { pathname } = useLocation();

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
              Home
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
              About
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
              Projects
            </Link>
          </li>
          <li className="navigation__link">
            <Link
              className={
                pathname === paths.contact
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
