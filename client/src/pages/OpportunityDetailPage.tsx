import { useParams } from "react-router-dom";
import { useState } from "react";
import { useOpportunities } from "../hooks/useOpportunities";
import "../styles/OpportunityDetail.css"; // Assuming you have a CSS file for styling

const OpportunityDetailPage = () => {
  const { id } = useParams();
  const { data } = useOpportunities();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const opportunity = data.find((opp) => String(opp.id) === id);

  if (!opportunity) return <p>Opportunity not found.</p>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Here you could also send the email to a backend if needed
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="opportunity-detail-container">
      <div className="opportunity-info">
        <h2>{opportunity.title}</h2>
        <p>{opportunity.description}</p>
        <p>
          <strong>Date:</strong> {opportunity.date}
        </p>
        <p>
          <strong>Location:</strong> {opportunity.location}
        </p>
        <p>
          <strong>Type:</strong> {opportunity.type}
        </p>
      </div>

      <div className="register-box">
        <h3>📩 Register for This Opportunity</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        {submitted && <p className="success-msg">✅ Thanks for registering!</p>}
      </div>
    </div>
  );
};

export default OpportunityDetailPage;
