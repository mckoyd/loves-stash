import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Homepage from "./Homepage";

import "../styles/App.css";

const App: React.FC = () => {
  return (
    <section className="app-section">
      <header className="header">
        <h1 className="title">Love's Stash</h1>
        <Logo className="logo" />
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </section>
  );
};

export default App;
