import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./navBar.css"
import SearchBox from "./SearchBox";
import Image from "rc-image";
import logo from "../../assets/logo2.png"

export default function NavBar({searchHandler}){
    const [q, setQuery] = useState('batman');
        return[
                     
                <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
                    
                        <Navbar.Brand>
                            <NavLink className="barra" to="/" ><Image src={logo} width="70px" height="70px"/></NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" >°°°</Navbar.Toggle>
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
                            {/* <Form className="d-flex">
                                <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>                                              */}

                            <SearchBox searchHandler={searchHandler}/>

                        </Navbar.Collapse>
                    
                </Navbar>
          
        ]
    
}