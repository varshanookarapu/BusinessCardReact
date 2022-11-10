import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import MainContent from "./components/Maincontent";
import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Info />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
