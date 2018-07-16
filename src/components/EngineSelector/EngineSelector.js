import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class EngineSelector extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {dropDownOpen: false};
    }

    toggle(){
        this.setState(prevState => ({
            dropDownOpen: !prevState.dropDownOpen
        }));
    }

    render(){
        const selectedVehicleData = window.data.filter((vehicle) => vehicle.detailKey === this.props.selectedVehicle)[0];
        console.log(selectedVehicleData);
        if (selectedVehicleData) {

            return (
                <div>
                    <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Select a Powerplant
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Engine A</DropdownItem>
                            <DropdownItem disabled>Engine B</DropdownItem>
                            <DropdownItem separator></DropdownItem>
                            <DropdownItem header>Engine C</DropdownItem>
                            <DropdownItem>Engine D</DropdownItem>
                            <DropdownItem>Engine E</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default EngineSelector;