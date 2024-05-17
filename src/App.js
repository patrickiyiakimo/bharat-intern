import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import SectionCard from "./components/SectionCard";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="section">
        <Section />
      </div>
      <div className="sectioncard">
        <SectionCard />
      </div>
    </div>
  );
}

export default App;
