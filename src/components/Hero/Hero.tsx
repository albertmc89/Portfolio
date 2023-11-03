import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-container__pic">
        <img
          className="hero-container__image"
          src="./img/profile-pic.webp"
          alt="Albert Colubi profile pic"
        />
      </div>
      <div className="section__text">
        <p className="section__subtext">Hi! 👋, Im</p>
        <h1 className="section__title">Albert Colubi</h1>
        <p className="section__role">Full-Stack Developer</p>
        <div>
          <button>Download CV</button>
          <button>Contact info</button>
        </div>
        <div className="social-container">
          <img
            src="/img/github.svg"
            alt="the github black and white logo"
            width={40}
            height={40}
          />
          <img
            className="linkedin"
            src="/img/linkedin.svg"
            alt="My linkedin profile"
            width={40}
            height={40}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
