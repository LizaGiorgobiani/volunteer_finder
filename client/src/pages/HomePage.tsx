import React from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <main className="home-container">
      <h2 className="home-title">Welcome to Volunteer Connect</h2>
      <p className="home-description">
        Find volunteer opportunities that fit your interests.
      </p>
    </main>
  );
};

export default HomePage;
