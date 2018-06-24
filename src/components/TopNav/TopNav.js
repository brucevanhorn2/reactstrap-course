import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      activeIndex: 0
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const VehicleSelections = this.props.data.map((item) => {
      return <DropdownItem tag="a" href={ item.detailUrl }>
        { item.model }
        </DropdownItem>
    });

    return (<Navbar color="light" light expand="md">
      <NavbarBrand className="Branding" href="/">flying car dealership</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <i class="fas fa-space-shuttle"></i> Select a Vehicle
              </DropdownToggle>
            <DropdownMenu>
              {VehicleSelections}
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/find-a-dealer/"><i class="fas fa-map-marker-alt"></i> Find a Dealer</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/build-and-price/"><i class="fas fa-cogs"></i> Build & Price</NavLink>
          </NavItem>

        </Nav>
      </Collapse>
    </Navbar>);
  }
}

export default TopNav;