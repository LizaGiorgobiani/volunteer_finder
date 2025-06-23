import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useOpportunities } from "../hooks/useOpportunities";
import "../styles/CalendarPage.css";

const CalendarPage = () => {
  const { data } = useOpportunities();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const formattedSelected = selectedDate.toISOString().split("T")[0];

  const matchedOpportunities = data.filter(
    (opp) => opp.date === formattedSelected
  );

  return (
    <div className="calendar-page">
      <h2>📅 Volunteer Opportunities Calendar</h2>
      <Calendar
        onChange={(value) => {
          if (value instanceof Date) setSelectedDate(value);
        }}
        value={selectedDate}
      />
      <div className="calendar-results">
        <h3>Opportunities on {formattedSelected}:</h3>
        {matchedOpportunities.length === 0 ? (
          <p>No opportunities on this date.</p>
        ) : (
          <ul>
            {matchedOpportunities.map((opp) => (
              <li key={opp.id}>
                <strong>{opp.title}</strong> – {opp.location}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
