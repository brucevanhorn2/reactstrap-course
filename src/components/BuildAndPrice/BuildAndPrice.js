import React from 'react';
import classnames from 'classnames';
import './BuildAndPrice.css';
import ColorPicker from '../ColorPicker/ColorPicker';
import ModelPicker from '../ModelPicker/ModelPicker';
import EnginePicker from '../EngineSelector/EngineSelector';
import TestFlightForm from '../TestFlightForm/TestFlightForm';
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
        this.determineProgress = this.determineProgress.bind(this);
        this.state = {
            activeTab: '1',  //currently displayed tab (note it starts at 1 not 0)
            selectedVehicle: "jumper", //holds the key to the selected vehicle
            userHasSelectedVehicle: false,
            selectedColor: 0, //holds the selected color index
            userHasSelectedColor: false,
            selectedEngine: 0,  //holds the array index of the selected engine option
            userHasSelectedEngine: false,
            modal: false, //controls the appearance of the modal
            done: false  //turns true when you have made all the selections
        };
    }

    determineProgress(){
        let numberStepsCompleted = 0;
        if(this.state.userHasSelectedVehicle){
            numberStepsCompleted++;
        }

        if(this.state.userHasSelectedColor){
            numberStepsCompleted++;
        }

        if(this.state.userHasSelectedEngine){
            numberStepsCompleted++
        }

        const percentComplete = Math.ceil((numberStepsCompleted / 3) * 100);
        return percentComplete;
    }

    selectVehicle(eventData){
        //console.log(eventData.target.getAttribute('data-model'));
        const selected = eventData.target.getAttribute('data-model');
        this.setState({
            activeTab: '2',
            userHasSelectedVehicle: true,
            selectedVehicle: selected
        });
    }

    selectColor(eventData){
        const selected = eventData.target.getAttribute('data-color');
        this.setState({
            activeTab: '3',
            userHasSelectedColor: true,
            selectedColor: Number(selected)
        });
    }

    selectEngine(eventData){
        const selected = eventData.target.getAttribute('data-engine');
        this.setState({
            userHasSelectedEngine: true,
            selectedEngine: Number(selected), modal: true
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
                    <Progress className="buildAndPriceProgress" color="primary" value={this.determineProgress()} />
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
                                    <ModelPicker 
                                    selectedVehicle = {this.state.selectedVehicle}
                                    selectedColor = {this.state.selectedColor}
                                    selectedEngine = {this.state.selectedEngine}
                                    selectVehicle={this.selectVehicle} />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                <ColorPicker
                                    selectColor = {this.selectColor}
                                    selectedVehicle = {this.state.selectedVehicle}
                                    selectedColor = {this.state.selectedColor}
                                    selectedEngine = {this.state.selectedEngine} />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <EnginePicker 
                                      onEngineSelect = {this.selectEngine}
                                      selectedVehicle = {this.state.selectedVehicle}
                                      selectedColor = {this.state.selectedColor}
                                      selectedEngine = {this.state.selectedEngine}
                                     />
                                </Col>
                            </Row>
                        </TabPane>
                        
                    </TabContent>
                    <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Schedule a Test Flight!</ModalHeader>
                        <ModalBody>
                            <TestFlightForm />
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