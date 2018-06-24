import React, { Component } from 'react';
import './App.css';
import SiteCarousel from './components/SiteCarousel';
import TopNav from './components/TopNav';
import VehicleBrowser from './components/VehicleBrowser';

const VehicleData = [
  {
    model:  "Jumper J-1",
    modelYear: "2018",
    colors: ['White Dwarf', 'Red Giant'],
    carouselImage: '/images/carousel/jumper-01.png',
    altText: '2018 Jumper J-1',
    caption: '2018 Jumper J-1',
    description: '',
    detailUrl: '/jumper/',
    msrp: 36000
  },{
    model:  "Spidi GT",
    modelYear: "2018",
    colors: ['White Dwarf', 'Red Giant', 'Blue Nebula', 'Solar Yellow'],
    carouselImage: '/images/carousel/spidi-01.png',
    altText: '2018 Spidi - Your Ultimate Getaway Car',
    caption: '2018 Spidi',
    description: '',
    detailUrl: '/spidi/',
    msrp: 42000
  },{
    model:  "AirBike",
    modelYear: "2018",
    colors: ['White Dwarf', 'Red Giant', 'Black Hole'],
    carouselImage: '/images/carousel/air-bike-01.png',
    altText: '2018 AirBike',
    caption: '2018 AirBike',
    description: '',
    detailUrl: '/airbike/',
    msrp: 18500
  },{
    model:  "Mercury",
    modelYear: "2018",
    colors: ['White Dwarf'],
    carouselImage: '/images/carousel/mercury-01.png',
    altText: 'Mercury Spacefaring Commercial Transport',
    caption: 'Mercurty Spacefaring Commercial Transport',
    description: '',
    detailUrl: '/mercury/',
    msrp: 167000
  }
]
class App extends Component {

  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div className="App">
        <TopNav data={VehicleData} />
        <SiteCarousel data={VehicleData} />
        <VehicleBrowser data={VehicleData} />
      </div>
    );
  }
}

export default App;
