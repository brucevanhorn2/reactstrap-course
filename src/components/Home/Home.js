import React from 'react';
import Axios from 'axios';
import './Home.css';
import SiteCarousel from '../SiteCarousel';
import VehicleBrowser from '../VehicleBrowser';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={vehicleData: null}
    }

    componentDidMount(){
        Axios
          .get('http://localhost:3001/vehicles/')
          .then(res => this.setState({vehicleData: res.data}))
          //.then(res => console.log(res.data))
          .catch(err => console.log(err));
      }

    render() {
        if(this.state.vehicleData){
        return (
            <div>
                <SiteCarousel vehicleData={this.state.vehicleData} />
                <VehicleBrowser vehicleData={this.state.vehicleData}  /> 
            </div>);
        } else {
            return null;
        }
    }
}

export default Home;