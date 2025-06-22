import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import OpportunityDetailPage from "./pages/OpportunityDetailPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useOpportunities } from "./hooks/useOpportunities";

import "./App.css";

function App() {
  const { data, loading, error } = useOpportunities();
  const [keyword, setKeyword] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const location = useLocation();
  const allTypes = Array.from(new Set(data.map((opp) => opp.type)));

  const filteredData = data.filter((opp) => {
    const lower = keyword.toLowerCase();
    const matchesKeyword =
      opp.title.toLowerCase().includes(lower) ||
      opp.location.toLowerCase().includes(lower);
    const matchesType = selectedType === "" || opp.type === selectedType;
    return matchesKeyword && matchesType;
  });

  return (
    <div className="app-container">
      <Header
        keyword={keyword}
        setKeyword={setKeyword}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        types={allTypes}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/opportunities"
          element={
            <OpportunitiesPage
              data={filteredData}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/opportunities/:id" element={<OpportunityDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
