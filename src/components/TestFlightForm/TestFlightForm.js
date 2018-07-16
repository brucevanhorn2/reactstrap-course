import React from 'react';
import './TestFlightForm.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class TestFlightForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(<div>
            <Card>
        <CardBody>
          <CardTitle>Schedule a Test Flight</CardTitle>
          <CardSubtitle>No Pilot's License Required!</CardSubtitle>
          <CardText>Fill out the form fields below to schedule a test flight.</CardText>
          
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input placeholder="username" />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Check it out" />
            </InputGroup>
            <br />
            <InputGroup>
              <Input placeholder="username" />
              <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>$</InputGroupText>
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Dolla dolla billz yo!" />
              <InputGroupAddon addonType="append">
                <InputGroupText>$</InputGroupText>
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">$</InputGroupAddon>
              <Input placeholder="Amount" type="number" step="1" />
              <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
            <Button>Button</Button>
        </CardBody>
      </Card>
          </div>);
    }
}

export default TestFlightForm;