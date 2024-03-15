import React from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/App.css";
import Homepage from "./Homepage";

const App: React.FC = () => {
  return (
    <section className="app-section">
      <header className="header">
        <h1 className="title">Love's Stash</h1>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </section>
  );
};

export default App;
