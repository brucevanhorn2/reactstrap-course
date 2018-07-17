import React from 'react';
import './ColorPicker.css';
import classnames from 'classnames';
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
                <table>
                    <tbody>
                    <tr>
                    {selectedVehicleData.colors.map(
                        function (color, i) {
                            return <td key={"colorpicker-" + color[1]}>
                            <img className={this.props.selectedColor === i ? 'colorBox selected' : 'colorBox'}
                                alt={color[0]}
                                onClick={this.props.selectColor}
                                data-color={i}
                                data-color-name={color[0]}
                                src={color[1]} /><br/>
                                <span>{color[0]}</span>
                            </td>
                        }, this
                    )}
                    </tr>
                    </tbody>
                    </table>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ColorPicker;