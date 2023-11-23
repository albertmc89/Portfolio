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
  title: string;
}

const Card = ({ img, title }: CardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <article className="project">
      <motion.h2 className="project__title" style={{ y }} transition={spring}>
        {title}
      </motion.h2>
      <div className="project__image" ref={ref}>
        <img
          src={img}
          alt={`project fullstack ${title}`}
          height={200}
          width={200}
        />
      </div>
      <span className="skills__title">STACK</span>
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
    </article>
  );
};

export default Card;
