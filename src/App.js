import About from "./components/About";
import Hero from "./components/Hero";
import Main from "./components/Main";
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
      <div className="about">
        <About />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
