import React, { Component } from 'react';
import './Menu.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import HomeDashboard from './HomeDashboard';
import College from './College';
import Enterprise from './Enterprise';
import AboutUs from './AboutUs';
import ContactInfo from './ContactInfo';
import CenterInfo from './CenterInfo';
import Career from './Career';
import SignIn from './SignIn';

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

const navbar = {
    backgroundColor: '#F16E10',
    lineheight: 1,
};
export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Router>
                <div>
                    <Navbar color="blue" className="menustyle" light expand="md">
                        <NavbarBrand href="/">Me</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse className="menustyle" isOpen={this.state.isOpen} navbar>
                            <Nav className="menustyle" navbar>
                                <NavItem>
                                    <NavLink href="/College">College</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/Enterprise">Enterprise</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/AboutUs">About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/Career">Careers</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Contact Us
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <a href="/ContactInfo">Contact Information</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a href="/CenterInfo">Center Information</a>
                                </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/SignIn">Sign In/Register</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>                    
                </div>
                <Route path="/" exact strict component={HomeDashboard} />
                <Route path="/Home" exact strict component={HomeDashboard} />
                <Route path="/College" exact strict component={College} />
                <Route path="/Enterprise" exact strict component={Enterprise} />
                <Route path="/AboutUs" exact strict component={AboutUs} />
                <Route path="/ContactInfo" exact strict component={ContactInfo} />
                <Route path="/Career" exact strict component={Career} />
                <Route path="/CenterInfo" exact strict component={CenterInfo} />
                <Route path="/SignIn" exact strict component={SignIn} />
            </Router>
        );
    }
}