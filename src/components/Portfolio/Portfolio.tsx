import Card from "../Card/Card";
import "./Portfolio.css";

const Portfolio = (): React.ReactElement => {
  return (
    <>
      <section className="portfolio" id="projects">
        <h1 className="section__title">My projects</h1>
        <ul className="projects">
          <li className="projects__portfolio">
            <Card
              img={"/img/proyecto1.webp"}
              img2={"/img/proyecto1B.webp"}
              img3={"/img/proyecto1C.webp"}
              img4={"/img/proyecto1D.webp"}
              title={"Fantasy Legends"}
              url="https://fantasy-legends.netlify.app"
            />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Portfolio;
