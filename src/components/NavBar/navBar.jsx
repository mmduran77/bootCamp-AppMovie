import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl";
import { Button } from "react-bootstrap";
import "./navBar.css"

export default function NavBar(){
        return[
            <Container >               
                <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <NavLink className="barra" to="/" >Full Pelis</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"> 
                                <Nav.Link >
                                    <NavLink className="barra" to="/home">Home</NavLink>
                                </Nav.Link>
                                
                                <Nav.Link to="/About">
                                    <NavLink className="barra" to="/about">About</NavLink>
                                </Nav.Link>
                                
                                <Nav.Link to="/Form">
                                    <NavLink to="/contact" className="barra">Contact </NavLink>
                                </Nav.Link>                          
                            </Nav>       
                            <Form className="d-flex">
                                <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>                 
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        ]
    
}