import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignupPage.css";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim().length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    // Save to localStorage
    const userData = { username, password };
    localStorage.setItem("registered-user", JSON.stringify(userData));
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
        <input
          className="signup-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
        <input
          className="signup-input"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="Confirm password"
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
