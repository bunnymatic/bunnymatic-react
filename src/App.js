import React, { Component } from "react";
import "./App.scss";
import Main from "./pages/main";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Main />
      </div>
    );
  }
}

export default App;
