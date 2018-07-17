import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
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
    this.state={vehicleData: {}}
  }

  componentDidMount(){
    Axios
      .get('http://localhost:3001/vehicles/')
      //.then(res => this.setState({vehicleData: res.data}))
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
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
