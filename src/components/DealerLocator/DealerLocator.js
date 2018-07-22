import React from 'react';
import Axios from 'axios';
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
        this.state = { searchTerm: "", resultsToggle: false, dealerships: null }
        this.onClearClicked = this.onClearClicked.bind(this);
        this.onListClick = this.onListClick.bind(this);

    }

    componentDidMount() {
            Axios
                .get('http://localhost:3001/dealerships/')
                .then(res => {
                    //store it to session storage
                   
                    let stateCounter = res.data.reduce(
                        function (dealerStateCount, dealer) {
                            dealerStateCount[dealer.state] = (dealerStateCount[dealer.state] || 0) + 1;
                            return dealerStateCount;
                        }, this
                    );
                    this.setState({ dealerships: res.data, stateCounter: stateCounter });
                })
                .catch(err => console.log(err));
    }

    onClearClicked(eventData) {
        eventData.preventDefault();
        this.setState({ searchTerm: '' });
    }

    onListClick(eventData) {
        eventData.preventDefault();
        //console.log(eventData.target.text);
        const stateClicked = eventData.target.text.split(" ")[0];
        this.setState({ searchTerm: stateClicked });
    }

    handleInputChange(eventData) {
        //console.log("You typed in " + eventData.target.value);
        this.setState({ searchTerm: eventData.target.value });
    }

    render() {
        if (this.state.dealerships) {
            const filteredStubData = this.state.dealerships.filter(d => d.state.includes(this.state.searchTerm));

            let searchBar = <div><h1>Over {this.state.dealerships.length} Authorized Dealers Nationwide</h1>
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
                let stateCounterMarkup = null;
                if(this.state.stateCounter){
                    stateCounterMarkup = <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <ListGroup>
                            {Object.keys(this.state.stateCounter).sort().map(function (key, i) {
                                if (typeof this.state.stateCounter[key] === 'number') {
                                    return (<ListGroupItem tag="a" href="#" key={key + i} onClick = {this.onListClick} className='justify-content-between'>
                                        {key} <Badge pill>{this.state.stateCounter[key]}</Badge>
                                        </ListGroupItem>)
                                    }
                                }, this)
                            }
                        </ListGroup>
                    </Col>
                </Row>
                }
                return (
                    <div>
                        {searchBar}
                        {stateCounterMarkup}
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
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Zip</th>
                                            <th>Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredStubData.map(function (item, i) {
                                            return (<tr key={item.phone}>
                                                <td>{String(i)}</td>
                                                <td>{item.dealershipName}</td>
                                                <td>{item.address}</td>
                                                <td>{item.city}</td>
                                                <td>{item.state}</td>
                                                <td>{item.zip}</td>
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
        } else {
            return null;
        }
    }
}
export default DealerLocator;