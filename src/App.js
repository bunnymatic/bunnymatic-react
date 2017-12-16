import React, { Component } from 'react';
import './stylesheets/_reset.scss'
import './components/navigation/_navigation.scss';
import './App.css';
import Navigation from './components/navigation/navigation';
import Main from './pages/main';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
