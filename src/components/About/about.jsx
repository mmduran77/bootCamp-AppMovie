import React from "react";
import Card from "react-bootstrap/Card";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import CardImg from "react-bootstrap/CardImg"; 
import ImgDuran from "../../assets/image-1.jpg"
import ImgMarcos from "../../assets/image-2.png"
import Container from "react-bootstrap/esm/Container";

const about = () => {
    return(
        <div>
            <Container className="containerForm">
            <header className="d-print-none">
                <div className="container text-center text-lg-left">
                    <div className="pt-4 clearfix">
                        <h1>Acerca de Nosotros</h1>
                    <Row>
                        <Col>
                            <Card className="site-title mb-0" style={{padding:"1rem"}}>
                                <Card.Title>Mauro Duran</Card.Title>
                                <CardImg src={ImgDuran} style={{padding:"1rem"}, {borderRadius:"50%"}, {maxWidth:"150px"}} ></CardImg>
                                <Card.Header>
                                    <h2 className="h2 fw-light mb-4">About Me</h2>
                                    probando contenido 1
                                    <p>Hello! I’m Mauro Duran. I am passionate about UI/UX design and Web Design. I am a skilled <strong>front-end developer</strong> and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done.</p>
                                    <p>I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
                                </Card.Header>
                                
                                <Card.Body>
                                <div className="row mt-2">
                        <h2 className="h2 fw-light mb-4">Bio</h2>
                        <div className="col-sm-5">
                            <div className="pb-2 fw-bolder"><i className="far fa-calendar-alt pe-2 text-muted" style={{width: "24px"},{opacity:"0.85"}}></i> Age</div>
                        </div>
                        <div className="col-sm-7">
                            <div className="pb-2">43</div>
                        </div>
                        <div className="col-sm-5">
                            <div className="pb-2 fw-bolder"><i className="far fa-envelope pe-2 text-muted" style={{width: "24px"}}></i> Email</div>
                        </div>
                        <div className="col-sm-7">
                            <div className="pb-2">mmduran77@gmail.com</div>
                        </div>
                        <div className="col-sm-5">
                            <div className="pb-2 fw-bolder"><i className="fab fa-skype pe-2 text-muted" style={{width: "24px"}}></i> Skype</div>
                        </div>
                        <div className="col-sm-7">
                            <div className="pb-2">mmduran@skype.com</div>
                        </div>
                        <div className="col-sm-5">
                            <div className="pb-2 fw-bolder"><i className="fas fa-phone pe-2 text-muted" style={{Width: "24px"}}></i> Phone</div>
                        </div>
                        <div className="col-sm-7">
                            <div className="pb-2">+0388-514-3808</div>
                        </div>
                        <div className="col-sm-5">
                            <div className="pb-2 fw-bolder"><i className="fas fa-map-marker-alt pe-2 text-muted" style={{opacity: "0.85"} , {Width: "24px"}}></i> Address</div>
                        </div>
                        <div className="col-sm-7">
                            <div className="pb-2">La Quiaca, Jujuy, Argentina</div>
                        </div>
                    </div>
                                </Card.Body>

                            </Card>
                        </Col>

                        <Col>
                        <Card className="site-title mb-0" style={{padding:"1rem"}}>
                                <Card.Title>Marcos Ferreira</Card.Title>
                                <CardImg src={ImgMarcos} style={{padding:"1rem"}} width="100" height="400"></CardImg>
                                <Card.Header>
                                    <h2 className="h2 fw-light mb-4">About Me</h2>
                                    probando contenido 2
                                    <p>Hello! I’m Mauro Duran. I am passionate about UI/UX design and Web Design. I am a skilled <strong>front-end developer</strong> and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done.</p>
                                    <p>I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
                                </Card.Header>
                                
                                <Card.Body>
                                    <div className="row mt-2">
                                        <h2 className="h2 fw-light mb-4">Bio</h2>
                                        <div className="col-sm-5">
                                            <div className="pb-2 fw-bolder"><i className="far fa-calendar-alt pe-2 text-muted" style={{width: "24px"},{opacity:"0.85"}}></i> Age</div>
                                        </div>
                                        <div className="col-sm-7">
                                            <div className="pb-2">33</div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="pb-2 fw-bolder"><i className="far fa-envelope pe-2 text-muted" style={{width: "24px"}}></i> Email</div>
                                        </div>
                                        <div className="col-sm-7">
                                            <div className="pb-2">marcosferreira83@gmail.com</div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="pb-2 fw-bolder"><i className="fab fa-skype pe-2 text-muted" style={{width: "24px"}}></i> Skype</div>
                                        </div>
                                        <div className="col-sm-7">
                                            <div className="pb-2">marcosferreira@skype.com</div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="pb-2 fw-bolder"><i className="fas fa-phone pe-2 text-muted" style={{Width: "24px"}}></i> Phone</div>
                                        </div>
                                        <div className="col-sm-7">
                                            <div className="pb-2">+011-3171-0962</div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="pb-2 fw-bolder"><i className="fas fa-map-marker-alt pe-2 text-muted" style={{opacity: "0.85"} , {Width: "24px"}}></i> Address</div>
                                        </div>
                                        <div className="col-sm-7">
                                            <div className="pb-2">La Quiaca, Jujuy, Argentina</div>
                                        </div>
                                    </div>
                                </Card.Body>

                            </Card>
                        </Col>
                    
                    </Row>
                    </div>
                </div>
            </header>

            <div className="page-content">
                <div className="container">
                    <div className="resume-container">
                        <div className="shadow-1-strong bg-white my-5" id="intro">
                            <div className="bg-info text-white">
                                <div className="cover bg-image">
                                    <img src="images/header-background.jpg" alt=""/>
                                    <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.7)"},  {backdropFilter:"blur(2px)"}}/>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-1-strong bg-white my-5 p-5" id="skills">
                            <div className="skills-section">
                                <h2 className="h2 fw-light mb-4">Professional Skills</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3"><span className="fw-bolder">HTML</span>
                                                <div className="progress my-2 rounded" style={{height: "20px"}}>
                                                     <div className="progress-bar bg-info" role="progressbar" data-aos="zoom-in-right" data-aos-delay="100" data-aos-anchor=".skills-section" style={{width: "70%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">Advanced</div>
                                                </div>
                                            </div>
                                            <div className="mb-3"><span className="fw-bolder">CSS</span>
                                                <div className="progress my-2 rounded" style={{height: "20px"}}>
                                                    <div className="progress-bar bg-info" role="progressbar" data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor=".skills-section" style={{width: "60%" }}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Advanced</div>
                                                </div>
                                            </div>
                                            <div className="mb-3"><span className="fw-bolder">JavaScript</span>
                                                <div className="progress my-2 rounded" style={{height: "20px"}}>
                                                    <div className="progress-bar bg-info" role="progressbar" data-aos="zoom-in-right" data-aos-delay="300" data-aos-anchor=".skills-section" style={{width: "75%" }}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Advanced</div>
                                                </div>
                                            </div>
                                            <div className="mb-3"><span className="fw-bolder">WordPress</span>
                                                <div className="progress my-2 rounded" style={{height: "20px"}}>
                                                    <div className="progress-bar bg-info" role="progressbar" data-aos="zoom-in-right" data-aos-delay="300" data-aos-anchor=".skills-section" style={{width: "40%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Benninger</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3"><span className="fw-bolder">Adobe Photoshop</span>
                                                <div className="progress my-2 rounded" style={{height: "20px"}}>
                                                    <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="400" data-aos-anchor=".skills-section" style={{width: "50%"}}aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">Advanced</div>
                                                </div>
                                            </div>
                                            <div className="mb-3"><span className="fw-bolder">Corel Draw</span>
                                                <div className="progress my-2 rounded" style={{height: "20px"}}>
                                                    <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="400" data-aos-anchor=".skills-section" style={{width: "80%" }}aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">Expert</div>
                                                </div>
                                            </div>
                                            <div className="mb-3"><span className="fw-bolder">C#</span>
                                                <div className="progress my-2 rounded" style={{height: "20px"}}>
                                                    <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="500" data-aos-anchor=".skills-section" style={{width: "70%" }}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Advanced</div>
                                                </div>
                                            </div>
                                            <div className="mb-3"><span className="fw-bolder">Go</span>
                                                <div className="progress my-2 rounded" style={{height: "20px"}}>
                                                    <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="600" data-aos-anchor=".skills-section" style={{width: "35%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Beginner</div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
            </Container>
        </div>     
    )
}
export default about;