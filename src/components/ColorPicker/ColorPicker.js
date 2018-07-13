import React from 'react';
import './ColorPicker.css';
class ColorPicker extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        //find the selected model
        //const selectedVehicleData = window.data.filter((vehicle) => vehicle.detailKey === this.props.selectedVehicle)[0];
        return(
            <div>
                <img className="colorChip" src="/images/thumbnails/placeholder96.png" />
                <img className="colorChip" src="/images/thumbnails/placeholder96.png" />
                <img className="colorChip" src="/images/thumbnails/placeholder96.png" />
                <img className="colorChip" src="/images/thumbnails/placeholder96.png" />
                <img className="colorChip" src="/images/thumbnails/placeholder96.png" />
            </div>
        );
    }
}

export default ColorPicker;