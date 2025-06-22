import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const registeredUser = localStorage.getItem("registered-user");

    if (registeredUser && username.trim() === registeredUser) {
      login(username.trim());
      navigate("/opportunities");
    } else {
      setError("User not found. Please sign up first.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>

      {error && <p className="login-error">{error}</p>}

      <p className="login-link">
        Don’t have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
