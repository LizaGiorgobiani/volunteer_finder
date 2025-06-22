import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignupPage.css";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim().length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }

    localStorage.setItem("registered-user", username);
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create an Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          className="signup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Choose a username"
          required
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      {error && <p className="signup-error">{error}</p>}
    </div>
  );
};

export default SignupPage;
