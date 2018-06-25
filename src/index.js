import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
window.data = [
    {
      model: "Jumper J-1",
      tagline: "Commuting Convenience",
      modelYear: "2018",
      thumbnail: "/images/carousel/jumper-01-thumb.png",
      colors: [
        {name:"White Dwarf", color: "#ffffff"}, 
        {name: "Red Giant", color: "#ff0000"}],
      carouselImage: "/images/carousel/jumper-01.png",
      altText: "2018 Jumper J-1",
      caption: "2018 Jumpter J-1 XT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.",
      detailKey: "jumper",
      msrp: 36000
    }, {
      model: "Spidi GT",
      tagline: "Your Ultimate Getaway Car",
      modelYear: "2018",
      thumbnail: "/images/carousel/spidi-01-thumb.png",
      colors: [
        {name: "White Dwarf", color: "#ffffff"},
        {name: "Red Giant", color: "#ff0000"},
        {name: "Main Sequence Blue", color: "#0000ff"},
        {name: "Solar Yellow", color: "#ffff00"}],
      carouselImage: "/images/carousel/spidi-01.png",
      altText: "2018 Spidi - Your Ultimate Getaway Car",
      caption: "2018 Spidi GT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.",
      detailKey: "spidi",
      msrp: 42000
    }, {
      model: "AirBike",
      tagline: "New Perspective on Fun",
      modelYear: "2018",
      thumbnail: "/images/carousel/air-bike-01-thumb.png",
      colors: [
        {name: "White Dwarf", color: "#ffffff"},
        {name:  "Red Giant", color: "#ff0000"},
        {name: "Black Hole", color: "#000000"},
        {name: "Chameleon Purple", color: "#8A2BE2"}],
      carouselImage: "/images/carousel/air-bike-01.png",
      altText: "2018 AirBike",
      caption: "2018 AirBike",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.",
      detailKey: "air-bike",
      msrp: 18500
    }, {
      model: "Mercury",
      tagline: "Professional Grade Affordable Fleets.",
      modelYear: "2018",
      thumbnail: "/images/carousel/mercury-01-thumb.png",
      colors: [{name: "White Dwarf", color: "#ffffff"}],
      carouselImage: "/images/carousel/mercury-01.png",
      altText: "Mercury Spacefaring Commercial Transport",
      caption: "Mercury Spacefaring Commercial Transport",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.",
      detailKey: "mercury",
      msrp: 167000
    }
  ];
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
