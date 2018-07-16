import React from 'react';
import classnames from 'classnames';
import './BuildAndPrice.css';
import ColorPicker from '../ColorPicker/ColorPicker';
import ModelPicker from '../ModelPicker/ModelPicker';
import EnginePicker from '../EngineSelector/EngineSelector';
import BuildAndPriceImageRotator from '../BuildAndPriceImageRotator/BuildAndPriceImageRotator';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Progress
} from 'reactstrap';


class BuildAndPrice extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.selectVehicle = this.selectVehicle.bind(this);
        this.selectColor = this.selectColor.bind(this);
        this.selectEngine = this.selectEngine.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            activeTab: '1',  //currently displayed tab (note it starts at 1 not 0)
            selectedVehicle: "jumper", //holds the key to the selected vehicle
            selectedColor: 0, //holds the selected color index
            selectedEngine: 0,  //holds the array index of the selected engine option
            modal: false, //controls the appearance of the modal
            done: false  //turns true when you have made all the selections
        };
    }

    selectVehicle(eventData){
        //console.log(eventData.target.getAttribute('data-model'));
        this.setState({
            selectedVehicle: eventData.target.getAttribute('data-model')
        });
    }

    selectColor(eventData){
        this.setState({
            selectedColor: eventData.target.getAttribute('data-color')
        });
    }

    selectEngine(eventData){
        const selectedEngine = eventData.target.getAttribute('data-engine');
        this.setState({
            selectedEngine: Number(selectedEngine), modal: true
        });
    }

    toggleModal(){
        this.setState({modal: !this.state.modal});
    }

    toggle(tab) {
        if (tab !== this.state.activeTab) {
            this.setState({ activeTab: tab });
        }
    }
    render() {
        return (
            <div>
                <BuildAndPriceImageRotator 
                  selectedVehicle={this.state.selectedVehicle} 
                  colorIndex={this.state.selectedColor} 
                  engineIndex={this.state.selectedEngine} />
                <div className="tabPanel">
                    <h3>Build and Price</h3>
                    <Progress color="primary" value="50" />
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}>
                                Model
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}>
                                Color
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}>
                                Powerplant
                            </NavLink>
                        </NavItem>
                        
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <ModelPicker selectVehicle={this.selectVehicle} />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                <ColorPicker
                                    selectColor = {this.selectColor}
                                    selectedVehicle = {this.state.selectedVehicle} />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <EnginePicker onEngineSelect = {this.selectEngine} selectedVehicle = {this.state.selectedVehicle} />
                                </Col>
                            </Row>
                        </TabPane>
                        
                    </TabContent>
                    <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Check Out Your New Ride!</ModalHeader>
                        <ModalBody>
                            Data go here
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick = {this.toggleModal}>Done!</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>);
    }
}

export default BuildAndPrice;