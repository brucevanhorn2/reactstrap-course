import React from 'react';
import {
    Row,
    Col,
    Media,
    Form,
    FormGroup,
    Input,
    ListGroup,
    ListGroupItem,
    Badge,
    Table
} from 'reactstrap';

class DealerLocator extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = { searchTerm: "" }
    }

    handleInputChange(eventData) {
        //console.log("You typed in " + eventData.target.value);
        this.setState({ searchTerm: eventData.target.value });
    }

    render() {
        return (
            <div>
                <h1>Over 100 Authorized Dealers Nationwide</h1>
                <Row>
                    <Col sm={12} md={{ size: 6, offset: 3 }}>
                        <Form>
                            <FormGroup>
                                <Input onChange={this.handleInputChange} type="text" name="user_address" placeholder="We're probably nearby.  Type your address." />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <ListGroup>
                            <ListGroupItem className="justify-content-between">Alabama <Badge pill>14</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Arkansas <Badge pill>12</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">California <Badge pill>31</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Florida <Badge pill>12</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Georgia <Badge pill>12</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Louisiana <Badge pill>11</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Oklahoma <Badge pill>19</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Texas <Badge pill>400</Badge></ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Dealership</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Slick Willy's Flying Cars</td>
                                    <td>555 Nearby St. YourState, 75001</td>
                                    <td>1-800-fly-cars</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Dewey, Cheatham, &amp; Howe Auto Sales</td>
                                    <td>123 Test St.  YourState, 75001</td>
                                    <td>1-800-pay-here</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Ima Crooke Flying Car Sales</td>
                                    <td>234 Booyah Ln. YourState, 75001</td>
                                    <td>1-888-fak-enum</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DealerLocator;