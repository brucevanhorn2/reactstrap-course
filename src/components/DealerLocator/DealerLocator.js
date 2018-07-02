import React from 'react';
import { Row, Col, Media, Form, FormGroup, Label, Input } from 'reactstrap';

class DealerLocator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Over 500 Authorized Dealers Worldwide</h1>
                <Row>
                    <Col sm={12} md={{size: 6, offset: 3}}>
                        <Form>
                            <FormGroup>
                                <Input type="text" name="user_address" placeholder="We're probably nearby.  Type your address." />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DealerLocator;