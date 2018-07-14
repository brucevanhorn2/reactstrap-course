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
    thumbnail: "/images/thumbnails/jumper/jumper-red-thumbnails00.png",
    colors: [
      [
        "White Dwarf",
        "/images/thumbnails/jumper/jumper-white-thumbnails10.png",
        "#ffffff"
      ],
      [
        "Red Giant",
        "/images/thumbnails/jumper/jumper-red-thumbnails10.png",
        "#b22222"
      ]
    ],
    carouselImage: "/images/carousel/jumper-01.png",
    altText: "2018 Jumper J-1",
    caption: "2018 Jumper J-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.",
    detailKey: "jumper",
    msrp: 36000,
    options: {
      engines: [
        {
          name: "Model A",
          image: "/images/thumbnails/model-a.png",
          cost: 0,
          nmpg: 75,
          thrust: "245 kN",
          topspeed: 20
        },
        {
          name: "Model S",
          image: "/images/thumbnails/model-s.png",
          cost: 2250,
          nmpg: 55,
          thrust: "545 kN",
          topspeed: 60
        }
      ],
      avionics: [
        {
          name: "Autopilot",
          image: "/images/thumbnails/autopilot.png",
          description: "lorem ipsum dolare",
          cost: 995
        },
        {
          name: "IFR Package",
          image: "/images/thumbnails/ifr.png",
          description: "lorem ipsum dolare",
          cost: 1995
        },
        {
          name: "Cargo Organizer",
          image: "/images/thumbnails/cargo-organizer.png",
          description: "lorem ipsum dolare",
          cost: 45
        },
        {
          name: "Convenience Features",
          image: "/images/thumbnails/convenience.png",
          description: "lorem ipsum dolare",
          cost: 55
        }
      ]
    }
  },
  {
    model: "Spidi GT",
    tagline: "Your Ultimate Getaway Car",
    modelYear: "2018",
    thumbnail: "/images/thumbnails/spidi/spidi-blue-thumbnails00.png",
    colors: [
      [
        "Red Giant",
        "/images/thumbnails/spidi/spidi-red-thumbnails10.png",
        "#b22222"
      ],
      [
        "Main Sequence Blue",
        "/images/thumbnails/spidi/spidi-blue-thumbnails10.png",
        "#000080"
      ],
      [
        "Solar Yellow",
        "/images/thumbnails/spidi/spidi-yellow-thumbnails10.png",
        "#ffd700"
      ]
    ],
    carouselImage: "/images/carousel/spidi-01.png",
    altText: "2018 Spidi - Your Ultimate Getaway Car",
    caption: "2018 Spidi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.",
    detailKey: "spidi",
    msrp: 42000,
    options: {
      engines: [
        {
          name: "Model A",
          image: "/images/thumbnails/model-a.png",
          cost: 0,
          nmpg: 75,
          thrust: "245 kN",
          topspeed: 20
        },
        {
          name: "Model S",
          image: "/images/thumbnails/model-s.png",
          cost: 2250,
          nmpg: 55,
          thrust: "545 kN",
          topspeed: 60
        }
      ],
      avionics: [
        {
          name: "Autopilot",
          image: "/images/thumbnails/autopilot.png",
          description: "lorem ipsum dolare",
          cost: 995
        },
        {
          name: "IFR Package",
          image: "/images/thumbnails/ifr.png",
          description: "lorem ipsum dolare",
          cost: 1995
        },
        {
          name: "Cargo Organizer",
          image: "/images/thumbnails/cargo-organizer.png",
          description: "lorem ipsum dolare",
          cost: 45
        },
        {
          name: "Convenience Features",
          image: "/images/thumbnails/convenience.png",
          description: "lorem ipsum dolare",
          cost: 55
        }
      ]
    }
  },
  {
    model: "AirBike",
    tagline: "New Perspective on Fun",
    modelYear: "2018",
    thumbnail: "/images/thumbnails/air-bike/air-bike-purple-thumbnails00.png",
    //black blue purple red gold
    colors: [
      [
        "Nebula Purple",
        "/images/thumbnails/air-bike/air-bike-purple-thumbnails10.png",
        "#6600cc"
      ],
      [
        "Red Giant",
        "/images/thumbnails/air-bike/air-bike-red-thumbnails10.png",
        "#b22222"
      ],
      [
        "Black Hole",
        "/images/thumbnails/air-bike/air-bike-black-thumbnails10.png",
        "#000000"
      ],
      [
        "Solar Yellow",
        "/images/thumbnails/air-bike/air-bike-yellow-thumbnails10.png",
        "#ffcc00"
      ]
    ],
    carouselImage: "/images/carousel/air-bike-01.png",
    altText: "2018 AirBike",
    caption: "2018 AirBike",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.",
    detailKey: "air-bike",
    msrp: 18500,
    options: {
      engines: [
        {
          name: "Model A",
          image: "/images/thumbnails/model-a.png",
          cost: 0,
          nmpg: 75,
          thrust: "245 kN",
          topspeed: 20
        },
        {
          name: "Model S",
          image: "/images/thumbnails/model-s.png",
          cost: 2250,
          nmpg: 55,
          thrust: "545 kN",
          topspeed: 60
        }
      ],
      avionics: [
        {
          name: "Autopilot",
          image: "/images/thumbnails/autopilot.png",
          description: "lorem ipsum dolare",
          cost: 995
        },
        {
          name: "IFR Package",
          image: "/images/thumbnails/ifr.png",
          description: "lorem ipsum dolare",
          cost: 1995
        },
        {
          name: "Convenience Features",
          image: "/images/thumbnails/convenience.png",
          description: "lorem ipsum dolare",
          cost: 55
        }
      ]
    }
  },
  {
    model: "Mercury",
    tagline: "Professional Grade Affordable Fleets.",
    modelYear: "2018",
    thumbnail: "/images/thumbnails/mercury/mercury-white-thumbnails00.png",
    colors: [
      [
        "White Dwarf",
        "/images/thumbnails/mercury-white.png",
        "#ffffff"
      ]
    ],
    carouselImage: "/images/carousel/mercury-01.png",
    altText: "Mercury Spacefaring Commercial Transport",
    caption: "Mercury Spacefaring Commercial Transport",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.",
    detailKey: "mercury",
    msrp: 167000,
    options: {
      engines: [
        {
          name: "Model A",
          image: "/images/thumbnails/model-a.png",
          cost: 0,
          nmpg: 75,
          thrust: "245 kN",
          topspeed: 20
        },
        {
          name: "Model S",
          image: "/images/thumbnails/model-s.png",
          cost: 2250,
          nmpg: 55,
          thrust: "545 kN",
          topspeed: 60
        }
      ],
      avionics: [
        {
          name: "Autopilot",
          image: "/images/thumbnails/autopilot.png",
          description: "lorem ipsum dolare",
          cost: 995
        },
        {
          name: "IFR Package",
          image: "/images/thumbnails/ifr.png",
          description: "lorem ipsum dolare",
          cost: 1995
        },
        {
          name: "Cargo Organizer",
          image: "/images/thumbnails/cargo-organizer.png",
          description: "lorem ipsum dolare",
          cost: 45
        },
        {
          name: "Convenience Features",
          image: "/images/thumbnails/convenience.png",
          description: "lorem ipsum dolare",
          cost: 55
        },
        {
          name: "Long Range Fuel Tanks",
          image: "/images/thumbnails/fuel-tanks.png",
          description: "lorem ipsum dolare",
          cost: 3500
        },
        {
          name: "Concealed Hold",
          image: "/images/thumbnails/concealed-hold.png",
          description: "lorem ipsum dolare",
          cost: 6000
        }
      ]
    }
  }
];
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
