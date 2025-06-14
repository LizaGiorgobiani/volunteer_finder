import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="app-container about-container">
      <h2>About Volunteer Connect</h2>
      <p className="about-intro">
        This platform helps people find volunteer opportunities in their area.
      </p>

      <section className="about-section">
        <h3>🌟 Our Mission</h3>
        <p>
          Volunteer Connect is dedicated to making it easier for individuals to
          give back to their communities. Whether you're passionate about the
          environment, education, or helping others in need, we connect you with
          meaningful causes.
        </p>
      </section>

      <section className="about-section">
        <h3>🤝 Why We Exist</h3>
        <p>
          We noticed how hard it can be to discover local volunteering events.
          Our platform simplifies this process by providing a centralized list
          of opportunities, empowering people to act.
        </p>
      </section>

      <section className="about-section">
        <h3>💡 Our Values</h3>
        <ul className="about-values">
          <li>Inclusivity – Everyone deserves to make an impact.</li>
          <li>
            Transparency – Open and clear information about all opportunities.
          </li>
          <li>Community – Building stronger neighborhoods together.</li>
          <li>Passion – Doing what matters most with heart and purpose.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
