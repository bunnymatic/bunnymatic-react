import React, { Component } from 'react';
import './App.scss';
import Navigation from './components/navigation/navigation';
import Main from './pages/main';
import ComingSoon from './components/coming_soon/ComingSoon';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <ComingSoon />
        <Footer />
      </div>
    );
  }
}

export default App;
