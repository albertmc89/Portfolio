import { NavLink, useLocation } from "react-router-dom";
import paths from "../../paths/paths";
import "./Nav.css";

const Navigation = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="navigation">
        <div className="logo">Albert Colubi</div>
        <ul className="navigation__list">
          <li className="navigation__link">
            <NavLink
              className={
                pathname === paths.about
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              className={
                pathname === paths.experience
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="/experience"
            >
              Experience
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              className={
                pathname === paths.projects
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              className={
                pathname === paths.contact
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
