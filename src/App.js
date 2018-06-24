import React, { Component } from 'react';
import './App.css';
import SiteCarousel from './components/SiteCarousel';
import TopNav from './components/TopNav';

class App extends Component {

  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div className="App">
        <TopNav />
        <SiteCarousel />
      </div>
    );
  }
}

export default App;
