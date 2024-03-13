import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "../Hero/Hero";
import Navigation from "../Nav/Nav";
import Portfolio from "../Portfolio/Portfolio";
import "./App.css";
import About from "../About/About";
import Technologies from "../Technologies/Technologies";
import Footer from "../Footer/Footer";

const App = (): React.ReactElement => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
  });

  return (
    <div className="container">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Technologies />
      <motion.div className="progress" style={{ scaleX }} />
      <Footer />
    </div>
  );
};

export default App;
