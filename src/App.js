import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Footer from './components/Footer';
import VehicleDetail from './components/VehicleDetail';
import BuildAndPrice from './components/BuildAndPrice';
import DealerLocator from './components/DealerLocator';
import TestFlightForm from './components/TestFlightForm'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(window.data);
    return (
      <Router>
        <div className="App">
         <TopNav />
          <div className="contentArea">
            <Route exact path='/' component={Home} />
            <Route path='/detail/:selectedVehicle' component={VehicleDetail} />
            <Route path='/find-a-dealer' component={DealerLocator} />
            <Route path='/build-and-price' component={BuildAndPrice} />
            <Route path='/schedule-test-flight' component={TestFlightForm} />
          </div>
          <Footer />  
        </div>
        
      </Router>
    );
  }
}

export default App;
