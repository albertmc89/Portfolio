import { useTranslation } from "react-i18next";
import Card from "../Card/Card";
import "./Portfolio.css";

const Portfolio = (): React.ReactElement => {
  const [text, _i18n] = useTranslation("global");
  return (
    <>
      <section className="portfolio" id="projects">
        <h1 className="section__title">{text("projects.projects-title")}</h1>
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
              tool={"TypeScript"}
              tool2={"ReactJS"}
              tool3={"NodeJS"}
              tool4={"Redux"}
              tool5={"Express.js"}
              tool6={"MongoDB"}
              tool7={"Firebase"}
              description={text("description.description-players")}
              stacks={"Fullstack"}
            />
          </li>
          <li className="projects__portfolio">
            <Card
              img={"/img/ProjectNetflix1.webp"}
              img2={"/img/ProjectNetflix2.webp"}
              img3={"/img/ProjectNetflix9.webp"}
              img4={"/img/ProjectNetflix8.webp"}
              img5={"/img/ProjectNetflix5.webp"}
              img6={"/img/ProjectNetflix6.webp"}
              img7={"/img/ProjectNetflix3.webp"}
              img8={"/img/ProjectNetflix4.webp"}
              title={"'Netflix' clone WIP"}
              url="https://colnetflix-clone.netlify.app"
              tool={"TypeScript"}
              tool2={"ReactJS"}
              tool3={"NodeJS"}
              tool4={"Redux"}
              tool5={"Firebase"}
              tool6={"Axios"}
              description={text("description.description-netflix")}
              stacks={"Frontend"}
            />
          </li>
          <li className="projects__portfolio">
            <Card
              img={"/img/invest1.webp"}
              img2={"/img/invest2.webp"}
              img3={"/img/invest3.webp"}
              img4={"/img/invest4.webp"}
              img5={"/img/invest5.webp"}
              img6={"/img/invest6.webp"}
              img7={"/img/invest7.webp"}
              img8={"/img/invest8.webp"}
              title={"InvestWise"}
              url="https://investwise.netlify.app"
              tool={"TypeScript"}
              tool2={"ReactJS"}
              tool3={"NodeJS"}
              tool4={"Redux"}
              tool5={"Express.js"}
              tool6={"MongoDB"}
              tool7={"Firebase"}
              description={text("description.description-investwise")}
              stacks={"Fullstack"}
            />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Portfolio;
