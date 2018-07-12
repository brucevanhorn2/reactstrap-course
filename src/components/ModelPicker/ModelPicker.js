import React from 'react';
import './ModelPicker.css'
import ModelPickerCollapse from '../ModelPickerCollapse/ModelPickerCollapse';
import {
    Collapse,
    Button,
    Card,
    CardBody,
    Row,
    Col
} from 'reactstrap';
class ModelPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm="12">
                        <ModelPickerCollapse />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ModelPicker;