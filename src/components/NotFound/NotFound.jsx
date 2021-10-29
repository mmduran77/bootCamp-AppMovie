import React from "react";
import "../../assets/css/styles.min.css"
import "../../assets/bootstrap/css/bootstrap.min.css"
import "../../assets/css/Contact-Form-Clean.css"
import imagen from '../../assets/error404.png'

const notFound = () => {
    return (
        <body id="page-top" className="text-white">
            <div id="wrapper">
                
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        
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