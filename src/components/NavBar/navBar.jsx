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

export default function NavBar({searchHandler}){
    const [q, setQuery] = useState('batman');
        return[
            // <div className="d-flex flex-column" id="content-wrapper">
            //         <div id="content">
            //             <nav className="navbar navbar-light navbar-expand-lg bg-white shadow mb-4 topbar static-top">
            //                 <div className="container-fluid">
            //                     <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button">
            //                         <i className="fas fa-bars"></i>
            //                     </button>
            //                     <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
            //                         <div className="input-group">
            //                             <input className="bg-light form-control d-lg-flex border-0 small" type="text" data-aos="fade" placeholder="Search for ..."/>
            //                             <button className="btn btn-primary py-0" type="button">
            //                                 <i className="fas fa-search"></i>
            //                             </button>
            //                             <a href="/about">Acerca de</a>
            //                             <a href="/home">Home</a>
            //                             <a href="/contact">Contactanos</a>
            //                         </div>
            //                     </form>                               
            //                 </div>
            //             </nav>     
            //             <nav class="navbar navbar-expand-lg navbar-light bg-light">
            //             <div class="container-fluid">
            //                 <a class="navbar-brand" href="#">Navbar</a>
            //                 <input className="bg-light form-control d-lg-flex border-0 small" type="text" data-aos="fade" placeholder="Search for ..."/>
            //                             <button className="btn btn-primary py-0" type="button">
            //                                 <i className="fas fa-search"></i>
            //                             </button>
            //                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            //                 <span class="navbar-toggler-icon"></span>
            //                 </button>
            //                 <navBar/>
            //                 <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            //                 <div class="navbar-nav">
            //                     <a class="nav-link active" aria-current="page" href="#">Home</a>
            //                     <a class="nav-link" href="#">Features</a>
            //                     <a class="nav-link" href="#">Pricing</a>
            //                     <a class="nav-link disabled">Disabled</a>
            //                 </div>
            //                 </div>
            //             </div>
            //             </nav>                   
            //         </div>  
            //     </div>     

                
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