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
import Axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={vehicleData: null}
  }

  componentDidMount(){
    debugger;
    if(sessionStorage.getItem("vehicleData")){
        const data = JSON.parse(sessionStorage.getItem("vehicleData"));
        this.setState({vehicleData: data});
    } else {
    Axios
      .get('http://localhost:3001/vehicles/')
      .then(res => {
          //store it to session storage
          sessionStorage.setItem("vehicleData", JSON.stringify(res.data));
          this.setState({vehicleData: res.data});
        })
      //.then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
}
  render() {
    debugger;
    if(this.state.vehicleData){
    return (
      <Router>
        <div className="App">
          <div className="contentArea">
            <Route exact path='/' render={(props) => <Home {...props} vehicleData={this.state.vehicleData} />} />
            <Route path='/detail/:selectedVehicle' render={(props) =><VehicleDetail {...props} vehicleData={this.state.vehicleData} />} />
            <Route path='/find-a-dealer' component={DealerLocator} />
            <Route path='/build-and-price' render={(props)=><BuildAndPrice {...props} vehicleData={this.state.vehicleData} />} />
            <Route path='/schedule-test-flight' component={TestFlightForm} />
          </div>
          <Footer />  
        </div>
        
      </Router>);
    } else {
      return <h4> Loading Data</h4>
    }
  }
}

export default App;
