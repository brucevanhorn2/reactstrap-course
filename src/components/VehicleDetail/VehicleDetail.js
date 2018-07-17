import React from 'react';
import './VehicleDetail.css';
import Axios from 'axios';
import { Row, Col, Media } from 'reactstrap';

class VehicleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { vehicleData: {}, selectedVehicle: "" }
    }

    componentDidMount(){
        Axios
          .get('http://localhost:3001/vehicles/')
          .then(res => this.setState({vehicleData: res.data}))
          //.then(res => console.log(res.data))
          .catch(err => console.log(err));
      }

    render() {
        const { selectedVehicle } = this.props.match.params;
        const selectedVehicleData = window.data.filter((vehicle) => vehicle.detailKey === selectedVehicle)[0];
        return (<div>
            <Row>
                <Col>
                    <img className="detailImage" src={selectedVehicleData.thumbnail} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1> {selectedVehicleData.modelYear} {selectedVehicleData.model}</h1>
                    <h2>{selectedVehicleData.tagline}</h2>
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