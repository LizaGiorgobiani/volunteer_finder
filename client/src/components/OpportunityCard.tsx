import { Link } from "react-router-dom";
import type { Opportunity } from "../types/Opportunity";
import "../styles/OpportunityCard.css";

type Props = {
  opportunity: Opportunity;
};

const OpportunityCard: React.FC<Props> = ({ opportunity }) => {
  return (
    <Link
      to={`/opportunities/${opportunity.id}`}
      className="no-underline text-black"
    >
      <div className="opportunity-card border rounded p-4 shadow-sm hover:bg-gray-100 cursor-pointer transition">
        <h2 className="text-xl font-semibold">{opportunity.title}</h2>
        <p className="text-gray-600">{opportunity.description}</p>
        <div className="mt-2 text-sm text-gray-500">
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
      </div>
    </Link>
  );
};

export default OpportunityCard;
