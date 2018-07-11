import React from 'react';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    ListGroup,
    ListGroupItem,
    Badge,
    Table,
    Button,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

class DealerLocator extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = { searchTerm: "", resultsToggle: false }
        this.onClearClicked = this.onClearClicked.bind(this);
        this.onListClick = this.onListClick.bind(this);
        this.stubData = [
            {
                dealershipName: 'Slick Willy\'s Flying Cars',
                address: '555 Nearby St.  Ada, Oklahoma 74820',
                phone: '1-800-fly-cars'
            },
            {
                dealershipName: 'Dewey, Cheatham, &amp; Howe Auto Sales',
                address: '123 Test St. Dallas Texas, 75001',
                phone: '1-800-pay-here'
            },
            {
                dealershipName: 'Ima Crooke Flying Car Sales',
                address: '234 Booyah Ln. San Mateo California, 75001',
                phone: '1-888-fak-enum'
            },

        ]
    }
    onClearClicked(eventData){
        eventData.preventDefault();
        this.setState({searchTerm: ''});
    }

    onListClick(eventData){
        eventData.preventDefault();
        //console.log(eventData.target.text);
        const stateClicked = eventData.target.text.split(" ")[0];
        this.setState({searchTerm: stateClicked});
    }
    handleInputChange(eventData) {
        //console.log("You typed in " + eventData.target.value);
        this.setState({ searchTerm: eventData.target.value });
    }

    render() {
        const filteredStubData = this.stubData.filter(d => d.address.includes(this.state.searchTerm));
        let searchBar = <div><h1>Over 100 Authorized Dealers Nationwide</h1>
            <Row>
                <Col sm={12} md={{ size: 6, offset: 3 }}>
                    <Form>
                        <FormGroup>
                            <InputGroup>
                                <Input onChange={this.handleInputChange} 
                                       type="text" 
                                       value={this.state.searchTerm} 
                                       name="user_address" 
                                       placeholder="We're probably nearby.  What state are you in?" />
                                <InputGroupAddon addonType="append">
                                    <Button onClick={this.onClearClicked}>X</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </div>;

        if (this.state.searchTerm.length < 4) {
            //console.log(filteredStubData);
            return (
                <div>
                    {searchBar}
                    <Row>
                        <Col sm="12" md={{ size: 10, offset: 1 }}>
                            <ListGroup>
                                <ListGroupItem tag="a" href="#" onClick={this.onListClick} className="justify-content-between">Alabama <Badge pill>14</Badge></ListGroupItem>
                                <ListGroupItem tag="a" href="#" onClick={this.onListClick} className="justify-content-between">Arkansas <Badge pill>12</Badge></ListGroupItem>
                                <ListGroupItem tag="a" href="#" onClick={this.onListClick} className="justify-content-between">California <Badge pill>31</Badge></ListGroupItem>
                                <ListGroupItem tag="a" href="#" onClick={this.onListClick} className="justify-content-between">Florida <Badge pill>12</Badge></ListGroupItem>
                                <ListGroupItem tag="a" href="#" onClick={this.onListClick} className="justify-content-between">Georgia <Badge pill>12</Badge></ListGroupItem>
                                <ListGroupItem tag="a" href="#" onClick={this.onListClick} className="justify-content-between">Louisiana <Badge pill>11</Badge></ListGroupItem>
                                <ListGroupItem tag="a" href="#" onClick={this.onListClick} className="justify-content-between">Oklahoma <Badge pill>19</Badge></ListGroupItem>
                                <ListGroupItem tag="a" href="#" onClick={this.onListClick} className="justify-content-between">Texas <Badge pill>70</Badge></ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return (
                <div>
                    {searchBar}
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
                                    {filteredStubData.map(function (item, i) {
                                        return (<tr key={item.phone}>
                                            <td>{String(i)}</td>
                                            <td>{item.dealershipName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phone}</td>
                                        </tr>);
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}
export default DealerLocator;