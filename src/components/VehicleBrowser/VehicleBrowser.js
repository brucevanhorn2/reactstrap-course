import React from 'react';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class VehicleBrowser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const VehicleSelections = this.props.data.map((item) => {
            return <Col md={ Math.ceil(12 / this.props.data.length) }>
                <Card className={'VehicleBrowser'}>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{item.year} {item.model}</CardTitle>
                        <CardSubtitle>{item.taglline}</CardSubtitle>
                        <CardText>{item.description}</CardText>
                        <Button>Details</Button>
                        <Button>Build & Price</Button>
                        <Button>Vehicles Near You</Button>
                    </CardBody>
                </Card>
            </Col>
        });
        return (
            <div>
                <Container>
                    <Row>
                        {VehicleSelections}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default VehicleBrowser;