import React from 'react';
import classnames from 'classnames';
import './BuildAndPrice.css';
import ColorPicker from '../ColorPicker/ColorPicker';
import ModelPicker from '../ModelPicker/ModelPicker';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col
} from 'reactstrap';


class BuildAndPrice extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.selectVehicle = this.selectVehicle.bind(this);
        this.selectColor = this.selectColor.bind(this);
        this.selectEngine = this.selectEngine.bind(this);
        this.selectOptions = this.selectOptions.bind(this);
        this.state = {
            activeTab: '1',
            selectedVehicle: "",
            selectedColor: 0,
            selectedEngine: 0,
            selectedOptions: []
        };
    }

    selectVehicle(eventData){
        //console.log(eventData.target.getAttribute('data-model'));
        this.setState({
            activeTab: '2',
            selectedVehicle: eventData.target.getAttribute('data-model')
        });
    }

    selectColor(eventData){
        this.setState({
            activeTab: '3',
            selectedColor: eventData.target.getAttribute('data-color')
        });
    }

    selectEngine(eventData){
        this.setState({
            activeTab: '4',
            selectedEngine: eventData.target.getAttribute('data-engine')
        })
    }

    selectOptions(eventData){
        //show modal with all the options
    }
    toggle(tab) {
        if (tab !== this.state.activeTab) {
            this.setState({ activeTab: tab });
        }
    }
    render() {
        return (
            <div className="tabPanel">
                <h3>Build and Price</h3>
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
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}>
                            Packages
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
                                <h4>Tab 3 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 4 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>

            </div>);
    }
}

export default BuildAndPrice;