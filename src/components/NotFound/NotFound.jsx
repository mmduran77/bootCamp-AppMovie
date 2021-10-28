import React from "react";
import "../../assets/css/styles.min.css"
import "../../assets/bootstrap/css/bootstrap.min.css"
import "../../assets/css/Contact-Form-Clean.css"
import imagen from '../../assets/error404.png'

const notFound = () => {
    return (
        <body id="page-top">
            <div id="wrapper">
                <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                    <div className="container-fluid d-flex flex-column p-0">
                        <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/">
                        <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink"></i></div>
                        <div className="sidebar-brand-text mx-3"><span>Fullpelis</span></div>
                        </a>
                        <hr className="sidebar-divider my-0"/>
                        <ul className="navbar-nav text-light" id="accordionSidebar">
                            <li className="nav-item"><a className="nav-link" href="/about"><i className="fas fa-user"></i><span>About</span></a></li>

                            <li className="nav-item"><a className="nav-link" href="register.html"><i className="fas fa-user-circle"></i><span>Register</span></a></li>

                            <li className="nav-item"><a className="nav-link active" href="/notfound"><i className="fas fa-exclamation-circle"></i><span>Page Not Found</span></a></li>

                            <li className="nav-item"><a className="nav-link" href="/contact"><i className="fas fa-window-maximize"></i><span>Contact</span></a></li>
                        </ul>
                        <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
                    </div>
                </nav>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                            <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                                <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group">
                                        <input className="bg-light form-control d-lg-flex border-0 small" type="text" data-aos="fade" placeholder="Search for ..."/>
                                            <button className="btn btn-primary py-0" type="button">
                                                <i className="fas fa-search"></i>
                                            </button>
                                    </div>
                                    <a href="/about">Acerca de</a>
                                    <a href="/home">Home</a>
                                    <a href="/contact">Contactanos</a>
                                </form>
                                
                            </div>
                        </nav>
                        <div className="container-fluid">
                            <div className="text-center mt-5">
                                <div className="error mx-auto" data-text="404">
                                    <p className="m-0">404</p>
                                    
                                </div>
                                <p className="text-dark mb-5 lead">Pagina No Encontrada</p>
                                <p className="text-black-50 mb-0"><br/>Parece que encontraste una falla en la Matrix ...<br/></p><a href="/home">← Volver al Inicio</a>
                            </div>
                        </div>
                    </div>
                    <footer className="bg-white sticky-footer">
                        <div className="container my-auto">
                            <div className="text-center my-auto copyright"><span>Copyright © FullPelis 2021</span></div>
                        </div>
                    </footer>
                </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
            </div>        
        </body>
    )
}

export default notFound;