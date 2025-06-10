import { useParams } from "react-router-dom";
import { useOpportunities } from "../hooks/useOpportunities";

const OpportunityDetailPage = () => {
  const { id } = useParams();
  const { data } = useOpportunities();

  const opportunity = data.find((opp) => opp.id === id);

  if (!opportunity) return <p>Opportunity not found.</p>;

  return (
    <div className="app-container">
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
  );
};

export default OpportunityDetailPage;
