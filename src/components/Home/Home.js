import React from 'react';
import './Home.css';
import SiteCarousel from '../SiteCarousel';
import VehicleBrowser from '../VehicleBrowser';
class Home extends React.Component {
    
    render() {
        if(this.props.vehicleData){
        return (
            <div>
                <SiteCarousel vehicleData={this.props.vehicleData} />
                <VehicleBrowser vehicleData={this.props.vehicleData}  /> 
            </div>);
        } else {
            return null;
        }
    }
}

export default Home;