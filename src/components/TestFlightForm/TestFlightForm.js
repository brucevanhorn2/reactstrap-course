import React from 'react';
import Axios from 'axios';
import './TestFlightForm.css';
import { Alert, InputGroup, InputGroupAddon, InputGroupText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class TestFlightForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {showSuccess: false, showDanger: false}
    }

    handleInputChange(eventData){
      const target = eventData.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({[name]: value});
    }

    onSubmit(eventData){
      eventData.preventDefault();
      Axios.post('http://localhost:3001/mailingList', {
        customerName: this.state.customerName,
        email: this.state.email,
        budget: this.state.budget,
        phone: this.state.phone
      }).then((res) => {
        this.setState({showSuccess: true, showDanger: false});
      }).catch((err)=>{
        this.setState({showSuccess: false, showDanger: true});
      });
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
                <Input type="text" onChange={this.handleInputChange} name="customerName" id="customerName" placeholder="What is your name?" />
            </FormGroup>
            <br />
            <FormGroup>
                <Input type="text" onChange={this.handleInputChange}  name="phone" id="phone" placeholder="What is your contact number?" />
            </FormGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input onChange={this.handleInputChange} name="email" placeholder="What is your email address?" />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <Input onChange={this.handleInputChange} name="budget" placeholder="Do you have a budget you need to stay under?" />
            </InputGroup>
          </Form>
          
            <br />
            
            <Button onClick={this.onSubmit}>Submit</Button>
            <Alert color={"success"} isOpen={this.state.showSuccess}>Your data were saved.  Your test flight awaits!</Alert>
            <Alert color={"danger"} isOpen={this.state.showDanger}>Something went horribly wrong. </Alert>
        </CardBody>
      </Card>
          </div>);
    }
}

export default TestFlightForm;