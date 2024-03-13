import {
  MotionValue,
  motion,
  spring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import "./Card.css";
import link from "/img/link.png";
import { useTranslation } from "react-i18next";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface CardProps {
  img: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
  img6?: string;
  img7?: string;
  img8?: string;
  title: string;
  url: string;
  tool: string;
  tool2?: string;
  tool3?: string;
  tool4?: string;
  tool5?: string;
  tool6?: string;
  tool7?: string;
  tool8?: string;
  description: string;
  stacks: string;
}

const Card = ({
  img,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  title,
  url,
  tool,
  tool2,
  tool3,
  tool4,
  tool5,
  tool6,
  description,
  stacks,
}: CardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);
  const [text, _i18n] = useTranslation("global");

  return (
    <article className="project">
      <motion.h2 className="project__title" style={{ y }} transition={spring}>
        {title}
      </motion.h2>
      <div className="project__image" ref={ref}>
        <span className="project__stacks">{stacks}</span>
        <ul className="carrusel">
          <li className="carrusel__imgs">
            <img
              src={img}
              alt={`project fullstack ${title}`}
              height={200}
              width={240}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img2}
              alt={`project fullstack ${title}`}
              height={200}
              width={240}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img3}
              alt={`project fullstack ${title}`}
              height={200}
              width={240}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img4}
              alt={`project fullstack ${title}`}
              height={200}
              width={240}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img5}
              alt={`project fullstack ${title}`}
              height={200}
              width={240}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img6}
              alt={`project fullstack ${title}`}
              height={200}
              width={240}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img7}
              alt={`project fullstack ${title}`}
              height={200}
              width={240}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img8}
              alt={`project fullstack ${title}`}
              height={200}
              width={240}
            />
          </li>
        </ul>
        <img
          src="/img/scroll.png"
          alt="the scroll icon"
          width={30}
          height={30}
        />
      </div>
      <div className="projects__description">
        <p className="projects__description">{description}</p>
      </div>
      <ul className="projects__skills">
        <li className="project__tool">{tool}</li>
        <li className="project__tool">{tool2}</li>
        <li className="project__tool">{tool3}</li>
        <li className="project__tool">{tool4}</li>
        <li className="project__tool">{tool5}</li>
        <li className="project__tool">{tool6}</li>
      </ul>
      <div className="live-demo-container">
        <a href={url}>{text("projects.projects-demo")}</a>
        <img src={link} alt="link to the site" width="18" height="18" />
      </div>
    </article>
  );
};

export default Card;
