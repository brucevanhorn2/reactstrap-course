import React from 'react';
import Numeral from "numeral";
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, NavLink
} from 'reactstrap';

class VehicleBrowser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const VehicleSelections = window.data.map((item) => {
            return <Col key={item.detailKey}  md={ Math.ceil(12 / window.data.length) }>
                <Card className={'VehicleBrowser'}>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{item.year} {item.model}</CardTitle>
                        <CardSubtitle>{item.taglline}</CardSubtitle>
                        <CardText>Starting at ${item.msrp}</CardText>
                        <NavLink href={"/detail/" + item.detailKey}>Details</NavLink>
                        <NavLink href="/build-and-price">Build & Price</NavLink>
                        <NavLink href="/find-a-dealer">Dealers Near You</NavLink>
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