import About from "./components/About";
import AboutUs from "./components/AboutUs";
import Apply from "./components/Apply";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import OnlineCommunity from "./components/OnlineCommunity";
import OurFeatures from "./components/OurFeatures";
import Section from "./components/Section";
import SectionCard from "./components/SectionCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <Switch>
          <Route path="/hero">
            <Hero />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/apply">
            <Apply />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
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
            <div className="footer">
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
