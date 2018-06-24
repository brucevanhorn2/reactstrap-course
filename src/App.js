import React, { Component } from 'react';
import './App.css';
import SiteCarousel from './components/SiteCarousel';
import TopNav from './components/TopNav';
import VehicleBrowser from './components/VehicleBrowser';

class App extends Component {

  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div className="App">
        <TopNav />
        <SiteCarousel />
        <VehicleBrowser />
      </div>
    );
  }
}

export default App;
