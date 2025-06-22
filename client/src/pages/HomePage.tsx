import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main className="home-container">
      {/* Welcome Section */}
      <h2 className="home-title">Welcome to Volunteer Connect</h2>
      <p className="home-description">
        Find volunteer opportunities that fit your interests.
      </p>

      {/* Stats */}
      <section className="stats">
        <div className="stat-box">
          <h3>🌍 15+</h3>
          <p>Active Locations</p>
        </div>
        <div className="stat-box">
          <h3>📌 40+</h3>
          <p>Volunteer Opportunities</p>
        </div>
        <div className="stat-box">
          <h3>🤝 200+</h3>
          <p>Volunteers Registered</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h3>Ready to make a difference?</h3>
        <Link to="/opportunities" className="cta-button">
          Browse Opportunities
        </Link>
      </section>

      {/* Quote Banner */}
      <section className="quote-banner">
        <blockquote>
          “The best way to find yourself is to lose yourself in the service of
          others.”
          <span>– Mahatma Gandhi</span>
        </blockquote>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3>💬 What Our Volunteers Say</h3>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"Volunteering with Volunteer Connect changed my life!"</p>
            <span>— Sarah, Student</span>
          </div>
          <div className="testimonial">
            <p>"Easy to use and helped me find causes I care about."</p>
            <span>— Mike, Developer</span>
          </div>
          <div className="testimonial">
            <p>"Highly recommend it to anyone looking to make a difference."</p>
            <span>— Lina, Teacher</span>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events">
        <h3>📅 Upcoming Events</h3>
        <ul>
          <li>
            <strong>July 15:</strong> Tree Planting Drive – Central Park
          </li>
          <li>
            <strong>July 20:</strong> Animal Shelter Support – Greenhill Shelter
          </li>
          <li>
            <strong>August 5:</strong> Community Food Bank – City Hall
          </li>
        </ul>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <h3>📧 Stay Updated</h3>
        <p>
          Subscribe to our newsletter for the latest opportunities and events.
        </p>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {subscribed && (
          <p className="success-msg">✅ Subscribed successfully!</p>
        )}
      </section>
    </main>
  );
};

export default HomePage;
