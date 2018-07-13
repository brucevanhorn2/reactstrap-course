import React from 'react';
import './ColorPicker.css';
class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //find the selected model
        const selectedVehicleData = window.data.filter((vehicle) => vehicle.detailKey === this.props.selectedVehicle)[0];
        console.log(selectedVehicleData);
        if (selectedVehicleData) {
            return (
                <div className="colorBox">
                    {selectedVehicleData.colors.map(
                        function (color, i) {
                            return <img key={"colorpicker-" + color[1]}
                                className="colorChip"
                                alt={color[0]}
                                onClick={this.props.selectColor}
                                data-color={i}
                                src={color[2]} />
                        }, this
                    )}
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ColorPicker;