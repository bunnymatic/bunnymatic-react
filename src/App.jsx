import React, { Component } from "react";
import "./App.scss";
import Main from "./pages/main";
import Navigation from "./components/navigation/navigation";

const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
