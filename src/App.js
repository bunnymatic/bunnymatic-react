import React, { Component } from 'react';
import './App.scss';
import Navigation from './components/navigation/navigation';
import Main from './pages/main';
import ComingSoon from './components/coming_soon/ComingSoon';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <ComingSoon />
      </div>
    );
  }
}

export default App;
