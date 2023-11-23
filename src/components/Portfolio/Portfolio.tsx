import Card from "../Card/Card";
import "./Portfolio.css";

const Portfolio = (): React.ReactElement => {
  return (
    <>
      <section className="portfolio" id="projects">
        <h1 className="projects-title">My projects</h1>
        <ul className="projects">
          <li className="projects__portfolio">
            <Card img={"/img/proyecto1.webp"} title={"Fantasy Legends"} />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Portfolio;
