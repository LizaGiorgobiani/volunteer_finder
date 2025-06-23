import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useOpportunities } from "../hooks/useOpportunities";
import "../styles/CalendarPage.css";

const toLocalDateString = (date: Date) =>
  date.getFullYear() +
  "-" +
  String(date.getMonth() + 1).padStart(2, "0") +
  "-" +
  String(date.getDate()).padStart(2, "0");

const CalendarPage = () => {
  const { data, loading, error } = useOpportunities();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = toLocalDateString(selectedDate);

  if (loading) return <p>Loading opportunities...</p>;
  if (error) return <p>Error loading opportunities.</p>;
  if (!data) return <p>No data available.</p>;

  const matched = data.filter((opp) => {
    const oppDate = toLocalDateString(new Date(opp.date));
    return oppDate === formattedDate;
  });

  return (
    <div className="calendar-page">
      <h2>📅 Volunteer Opportunities Calendar</h2>

      <Calendar
        value={selectedDate}
        onChange={(value) => setSelectedDate(value as Date)}
        calendarType="iso8601"
      />

      <div className="calendar-results">
        <h3>Opportunities on {formattedDate}:</h3>
        {matched.length === 0 ? (
          <p>No opportunities on this date.</p>
        ) : (
          <ul>
            {matched.map((opp) => (
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
