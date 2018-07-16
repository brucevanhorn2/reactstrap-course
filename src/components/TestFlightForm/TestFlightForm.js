import React from 'react';
import './TestFlightForm.css';
import { InputGroup, InputGroupAddon, InputGroupText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
          <Form>
            <FormGroup>
                <Input type="text" name="customerName" id="customerName" placeholder="What is your name?" />
            </FormGroup>
            <br />
            <FormGroup>
                <Input type="text" name="phone" id="phone" placeholder="What is your contact number?" />
            </FormGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input placeholder="What is your email address?" />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Do you have a budget you need to stay under?" />
            </InputGroup>
          </Form>
          <FormGroup tag="fieldset">
          <legend>How did you hear about us?</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Television
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Saw a Flying Car and Googled It
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Read about it on a bathroom wall
            </Label>
          </FormGroup>
        </FormGroup>
            <br />
            
            <Button>Submit</Button>
        </CardBody>
      </Card>
          </div>);
    }
}

export default TestFlightForm;