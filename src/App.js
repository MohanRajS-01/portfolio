import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import ChatBot from "./components/ChatBot"; // Make sure ChatBot.js exists in components
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        {/* ChatBot floats globally */}
        <ChatBot />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
