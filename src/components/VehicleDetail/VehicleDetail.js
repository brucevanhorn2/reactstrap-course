import React from 'react';
import { Row, Col, Media } from 'reactstrap';

class VehicleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedVehicle: "" }
    }

    render() {
        const { selectedVehicle } = this.props.match.params;
        const selectedVehicleData = window.data.filter((vehicle) => vehicle.detailKey === selectedVehicle)[0];

        return (<div>
            <Row>
                <Col>
                    <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=image&w=600&h=400" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>This is the vehicle detail screen for {this.state.selectedVehicle}</p>
                    <p>{selectedVehicleData.caption}</p>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={{size: 6, offset:3}}>
                    <p>{selectedVehicleData.description}</p>
                </Col>
            </Row>
        </div>
        )
    }
}

export default VehicleDetail;