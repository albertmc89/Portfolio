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
              img5={"/img/proyecto1E.webp"}
              img6={"/img/proyecto1F.webp"}
              img7={"/img/proyecto1G.webp"}
              img8={"/img/proyecto1H.webp"}
              title={"Fantasy Legends"}
              url="https://fantasy-legends.netlify.app"
            />
          </li>
          <li className="projects__portfolio">
            <Card
              img={"/img/ProjectNetflix1.webp"}
              img2={"/img/ProjectNetflix2.webp"}
              img3={"/img/ProjectNetflix3.webp"}
              img4={"/img/ProjectNetflix4.webp"}
              img5={"/img/ProjectNetflix5.webp"}
              img6={"/img/ProjectNetflix6.webp"}
              img7={"/img/ProjectNetflix7.webp"}
              img8={"/img/ProjectNetflix7.webp"}
              title={"Netflix clone WIP"}
              url="https://colnetflix-clone.netlify.app"
            />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Portfolio;
