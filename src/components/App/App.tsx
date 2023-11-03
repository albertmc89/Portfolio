import Hero from "../Hero/Hero";
import Navigation from "../Nav/Nav";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Navigation />
      <Hero />
    </div>
  );
};

export default App;
