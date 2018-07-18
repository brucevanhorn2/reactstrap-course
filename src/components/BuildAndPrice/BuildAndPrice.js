import React from 'react';
import classnames from 'classnames';
import './BuildAndPrice.css';
import ColorPicker from '../ColorPicker/ColorPicker';
import ModelPicker from '../ModelPicker/ModelPicker';
import EnginePicker from '../EngineSelector/EngineSelector';
import TestFlightForm from '../TestFlightForm/TestFlightForm';
import BuildAndPriceImageRotator from '../BuildAndPriceImageRotator/BuildAndPriceImageRotator';
import Numeral from 'numeral';
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
        this.computePrice = this.computePrice.bind(this);
        this.state = {
            activeTab: '1',  //currently displayed tab (note it starts at 1 not 0)
            selectedVehicle: "jumper", //holds the key to the selected vehicle
            userHasSelectedVehicle: false,
            selectedColor: 0, //holds the selected color index
            selectedColorName: 'White Dwarf',
            userHasSelectedColor: false,
            selectedEngine: 0,  //holds the array index of the selected engine option
            selectedEngineName: "Alpha Centauri Mark II",
            userHasSelectedEngine: false,
            modal: false, //controls the appearance of the modal
            done: false,  //turns true when you have made all the selections
            engineCost: 0,
            msrp: 36000
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
        const msrp = eventData.target.getAttribute('data-msrp');
        this.setState({
            activeTab: '2',
            msrp: msrp,
            userHasSelectedVehicle: true,
            selectedVehicle: selected
        });
    }

    selectColor(eventData){
        const selected = eventData.target.getAttribute('data-color');
        const selectedColorName = eventData.target.getAttribute('data-color-name')
        this.setState({
            activeTab: '3',
            userHasSelectedColor: true,
            selectedColor: Number(selected),
            selectedColorName: selectedColorName
        });
    }

    selectEngine(eventData){
        const selected = eventData.target.getAttribute('data-engine');
        const engineCost = eventData.target.getAttribute('data-engine-cost');
        const engineName = eventData.target.getAttribute('data-engine-name');
        this.setState({
            userHasSelectedEngine: true,
            selectedEngine: Number(selected), modal: true,
            selectedEngineName: engineName,
            engineCost: engineCost
        });
    }

    toggleModal(){
        this.setState({modal: !this.state.modal});
    }

    computePrice(){
        return Number(this.state.msrp) + Number(this.state.engineCost);
    }

    toggle(tab) {
        if (tab !== this.state.activeTab) {
            this.setState({ activeTab: tab });
        }
    }
    render() {
        return (
            <div>
                <h3>Build and Price</h3>
                <BuildAndPriceImageRotator 
                  vehicleData = {this.props.vehicleData}
                  selectedVehicle={this.state.selectedVehicle} 
                  colorIndex={this.state.selectedColor}
                  colorName = {this.state.selectedColorName}
                  cost={this.computePrice()}
                  engineIndex={this.state.selectedEngine} />
                  <h4>Color: {this.state.selectedColorName}</h4>
                  <h5>Engine: {this.state.selectedEngineName}</h5>
                  <h5>Price as configured: {Numeral(this.computePrice()).format('$0,0.00')}</h5>
                <div className="tabPanel">
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
                                    vehicleData = {this.props.vehicleData}
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
                                    vehicleData = {this.props.vehicleData}
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
                                      vehicleData = {this.props.vehicleData}
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