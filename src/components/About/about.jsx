import React from "react";
import Card from "react-bootstrap/Card";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import CardImg from "react-bootstrap/CardImg"; 
import ImgDuran from "../../assets/image-1.jpg"
import ImgMarcos from "../../assets/image-2.jpg"
import "./about.css"
import Contact from "../contact/contact";
import "../../assets/css/styles.min.css"
import "../../assets/bootstrap/css/bootstrap.min.css"
import "../../assets/css/Contact-Form-Clean.css"
import Footer1 from "../Footer/footer1";
import { useHistory } from "react-router";

const About = () => {
    const History = useHistory();
    
    const redireccionamiento = () => {
        History.push("/contact")
    }
    return(
        <div className="container contact-clean">
            <div className="container-fluid">
                <h3 className="text-dark mb-4">Acerca de Nosotros</h3>
                <div className="row mb-3">
                    <div className="col-lg-3">
                        <div className="card mb-3">
                            <div className="card-body text-center shadow">
                                <img className="rounded-circle mb-3 mt-4" src={ImgDuran} alt="" width="160" height="160"/>
                                <div className="mb-3">
                                    <button onClick={redireccionamiento} className="btn btn-primary btn-sm" type="button">Miguel Duran</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card shadow mb-3">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 fw-bold">Quien soy</p>
                            </div>
                            <div className="card-body">
                                <p>Hello! I’m Mauro Duran. I am passionate about UI/UX design and Web Design. I am a skilled <strong>front-end developer</strong> and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done.</p>
                                <p>I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="text-primary fw-bold m-0">Habilidades Profesionales&nbsp;</h6>
                            </div>
                            <div className="card-body">
                            <h4 className="small fw-bold">HTML
                                        <span className="float-end">Avanzado</span>
                                    </h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-danger" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}><span className="visually-hidden">80%</span>
                                        </div>
                                    </div>
                                    <h4 className="small fw-bold">CSS
                                        <span className="float-end">Intermdio</span>
                                    </h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-warning" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}><span className="visually-hidden">60%</span></div>
                                    </div>
                                    <h4 className="small fw-bold">Javascript
                                        <span className="float-end">Basico</span>
                                    </h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-primary" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}>
                                            <span className="visually-hidden">50%</span>
                                        </div>
                                    </div>
                                    <h4 className="small fw-bold">CorelDraw
                                        <span className="float-end">Avanzado</span>
                                    </h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-info" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                            <span className="visually-hidden">70%</span>
                                        </div>
                                    </div>
                                    <h4 className="small fw-bold">React JS
                                        <span className="float-end">Basico</span>
                                    </h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}>
                                            <span className="visually-hidden">50%</span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>                           
                </div>
                <hr/>
                <div className="container-fluid">
                    <div className="row mb-3">
                        <div className="col-lg-3">
                            <div className="card mb-3">
                                <div className="card-body text-center shadow">
                                    <img className="rounded-circle mb-3 mt-4" src={ImgMarcos} alt="" width="160" height="160"/>
                                    <div className="mb-3">
                                        <button onClick={redireccionamiento} className="btn btn-primary btn-sm" type="button">Marcos Ferreira</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <p className="text-primary m-0 fw-bold">Quien soy</p>
                                </div>
                                <div className="card-body">
                                    <p>Hello! I’m Mauro Duran. I am passionate about UI/UX design and Web Design. I am a skilled <strong>front-end developer</strong> and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done.</p>
                                    <p>I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="text-primary fw-bold m-0">Habilidades Profesionales&nbsp;</h6>
                                </div>
                                <div className="card-body">
                                    <h4 className="small fw-bold">HTML
                                        <span className="float-end">Avanzado</span>
                                    </h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-danger" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}><span className="visually-hidden">80%</span>
                                        </div>
                                    </div>
                                    <h4 className="small fw-bold">CSS
                                        <span className="float-end">Basico</span>
                                    </h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}><span className="visually-hidden">40%</span></div>
                                    </div>
                                    <h4 className="small fw-bold">Javascript
                                        <span className="float-end">Intermedio</span>
                                    </h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-primary" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                            <span className="visually-hidden">70%</span>
                                        </div>
                                    </div>
                                    <h4 className="small fw-bold">CorelDraw
                                        <span className="float-end">Basico</span>
                                    </h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-info" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}>
                                            <span className="visually-hidden">20%</span>
                                        </div>
                                    </div>
                                    <h4 className="small fw-bold">React JS
                                        <span className="float-end">Intermedio</span>
                                    </h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                            <span className="visually-hidden">60%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <Footer1/>
        </div>
    )
}
export default About;