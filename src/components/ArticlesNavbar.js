import React, {useState} from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBIcon,
    MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBDropdown
} from "mdbreact";

export const ArticlesNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const githubName = `tabatintores`;

    return (
        <MDBNavbar color="blue-gradient" dark expand="md">
            <MDBNavbarBrand>
                <strong className="white-text">BLOG</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={() => setIsOpen(!isOpen)}/>
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBNavLink to="/"><MDBIcon icon="home"/> Домой</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/create"><MDBIcon icon="plus"/> Создать статью</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <MDBIcon fab icon="github"/>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu right basic className="dropdown-default">
                                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    )
};