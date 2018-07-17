import React from 'react';
import './ModelPickerCollapse.css';
import {
    Collapse,
    Media,
    Button,
    Card,
    CardBody,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Numeral from 'numeral';

class ModelPickerCollapse extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        const vehicle = this.props.selectedVehicle;
        return (<div className="clickableMedia">
            <div className="vehicleSummary" key={"model-picker-" + vehicle.detailKey}>
                <Media>
                    <Media left href="#">
                        <Media className="vehicleImage" src={vehicle.thumbnail} alt="Generic placeholder image" />
                    </Media>
                    <Media body className="vehicleData">
                        <Media heading className="vehicleTitle">
                            {vehicle.model}
                        </Media>
                        <div>
                            {vehicle.tagline} <br /><br />
                            <span>Starting at {Numeral(vehicle.msrp).format('$0,0')}</span><br />
                            <span>{Numeral((vehicle.msrp) / 48).format('$0,0')} per month for 48 months</span><br />
                            <span><i className="fas fa-gas-pump"></i> {vehicle.options.engines[0].nmpg} NMPG</span>
                        </div>
                        <Nav>
                            <NavItem>
                                <NavLink onClick={this.toggle}>{this.state.collapse ? "See Less": "See More"}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink data-model={vehicle.detailKey} data-color-name={vehicle.colors[0][0]} data-msrp={vehicle.msrp} onClick={this.props.selectVehicle}>Select</NavLink>
                            </NavItem>
                        </Nav>
                    </Media>
                </Media>
                <Collapse key={"model-picker-show" + vehicle.detailKey}  isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            {vehicle.description}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>
        );
    }
}

export default ModelPickerCollapse;