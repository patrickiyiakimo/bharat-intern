import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

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
    </div>
  );
}

export default App;
