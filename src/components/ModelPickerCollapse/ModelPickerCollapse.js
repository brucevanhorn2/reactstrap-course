import React from 'react';
import './ModelPickerCollapse.css';
import Holder from 'react-holder';
import {
    Collapse,
    Media,
    Button,
    Card,
    CardBody,
    Row,
    Col
} from 'reactstrap';
class ModelPickerCollapse extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (<div className="clickableMedia" onClick={ this.toggle }>

            <Media>
                <Media left href="#">
                    <Media className="vehicleImage" src="/images/thumbnails/placeholder96.png" alt="Generic placeholder image" />
                </Media>
                <Media body className="vehicleData">
                    <Media heading className="vehicleTitle">
                        Media heading
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
            </Media>
            <Collapse isOpen={this.state.collapse}>
                <Card>
                    <CardBody>
                        Anim pariatur cliche reprehenderit,
                         enim eiusmod high life accusamus terry richardson ad squid. Nihil
                         anim keffiyeh helvetica, craft beer labore wes anderson cred
                         nesciunt sapiente ea proident.
            </CardBody>
                </Card>
            </Collapse>
        </div>);
    }
}

export default ModelPickerCollapse;