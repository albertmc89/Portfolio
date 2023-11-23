import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src="/img/email.png" alt="Email icon" width={30} height={30} />
          <a href="albertmc89@gmail.com">albertmc89@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
