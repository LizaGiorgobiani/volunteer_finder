import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="app-container">
      <Header
        keyword=""
        setKeyword={() => {}}
        selectedType=""
        setSelectedType={() => {}}
        types={[]}
      />
      <h2>Welcome to Volunteer Connect</h2>
      <p>Find volunteer opportunities that fit your interests.</p>
    </div>
  );
};

export default HomePage;
