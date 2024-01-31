import {
  MotionValue,
  motion,
  spring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import "./Card.css";

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
}: CardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <article className="project">
      <motion.h2 className="project__title" style={{ y }} transition={spring}>
        {title}
      </motion.h2>
      <div className="project__image" ref={ref}>
        <ul className="carrusel">
          <li className="carrusel__imgs">
            <img
              src={img}
              alt={`project fullstack ${title}`}
              height={200}
              width={200}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img2}
              alt={`project fullstack ${title}`}
              height={200}
              width={200}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img3}
              alt={`project fullstack ${title}`}
              height={200}
              width={200}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img4}
              alt={`project fullstack ${title}`}
              height={200}
              width={200}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img5}
              alt={`project fullstack ${title}`}
              height={200}
              width={200}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img6}
              alt={`project fullstack ${title}`}
              height={200}
              width={200}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img7}
              alt={`project fullstack ${title}`}
              height={200}
              width={200}
            />
          </li>
          <li className="carrusel__imgs">
            <img
              src={img8}
              alt={`project fullstack ${title}`}
              height={200}
              width={200}
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
      <div className="projects__skills">
        <img
          src="/img/typescript.svg"
          alt="the typescript logo"
          width={30}
          height={30}
        />
        <img src="/img/react.svg" alt="the react logo" width={30} height={30} />
        <img
          src="/img/nodejs.svg"
          alt="the nodejs logo"
          width={30}
          height={30}
        />
        <img
          src="/img/mongodb.svg"
          alt="the mongodb logo"
          width={30}
          height={30}
        />
        <img
          src="/img/firebase.svg"
          alt="the firebase logo"
          width={30}
          height={30}
        />
        <img src="/img/vite.svg" alt="the vite logo" width={30} height={30} />
        <img src="/img/redux.svg" alt="the redux logo" width={30} height={30} />
        <img
          src="/img/postman.png"
          alt="the postman logo"
          width={30}
          height={30}
        />
      </div>
      <div className="live-demo-container">
        <a className="live-demo-link" href={url}>
          Live demo
        </a>
      </div>
    </article>
  );
};

export default Card;
