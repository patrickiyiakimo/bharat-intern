import About from "./components/About";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import OnlineCommunity from "./components/OnlineCommunity";
import OurFeatures from "./components/OurFeatures";
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
      <div className="features">
        <OurFeatures />
      </div>
      <div className="onlinecommunity">
        <OnlineCommunity />
      </div>
    </div>
  );
}

export default App;
