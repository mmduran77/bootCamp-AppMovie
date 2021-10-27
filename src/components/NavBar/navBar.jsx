import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./navBar.css"
import SearchBox from "./SearchBox";
import Image from "rc-image";
import logo from "../../assets/logo2.png"
import "../../assets/css/styles.min.css"
import "../../assets/bootstrap/css/bootstrap.min.css"
import "../../assets/css/Contact-Form-Clean.css"
import './navBar.css'

export default function NavBar({searchHandler}){
    const [q, setQuery] = useState('batman');
        return[
            
                
                <Navbar  className="navbar navbar-expand-lg navbar-light bg-light" collapseOnSelect expand="lg" >
                    
                    <Navbar.Brand>
                            <NavLink className="barra" to="/" ><Image src={logo} width="70px" height="70px"/><h6 className="text-primary p-1"> FullPelis</h6></NavLink>
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
                            

                            <SearchBox searchHandler={searchHandler}/>

                        </Navbar.Collapse>
                    
                </Navbar>
          
        ]
    
}