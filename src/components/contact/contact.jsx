import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { useState } from "react"
import emailjs from "emailjs-com"


export function Validacion(input){
    let errors = {}
    if(!input.email){
        errors.email = "Correo Electronico es requirido"
    } else if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email = "Correo Electronico debe ser una direccion de correo valida"
    }

    if(!input.name){
        errors.name = "El Nombre es requerido"
    } else if(Object.keys(input.name).length<3){
        errors.name = "El Nombre debe tener al menos 3 caracteres"
    }

    if(!input.message){
        errors.message = "El Mensaje es requerido"
    } else if(Object.keys(input.message).length>256){
        errors.message = "El Mensaje no debe superar los 256 caracteres"
    }
    return errors;
}

export default function Contact() {
    // const [username, setUsername] = useState("");
    // const [asunto, setAsunto] = useState("");
    // const [mensaje, SetMensaje] = useState("");

    
    const [state, setState] = useState({
        email: '',
        name: '',
        message:''
    })

    const [fails, setFails] = useState({
        email: "Correo Electronico es requirido",
        name: "El Nombre es requerido",
        message:"El Mensaje es requerido"
        })  

    function onSubmitForm(e) {
        e.preventDefault();
        emailjs.sendForm('service_akbwd8o', 'template_k4riam9', e.target, 'user_3KLQnK8X1eJKjg1WLGiAj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
        alert("Mensaje enviado");
        
    }

    function onHandleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

        setFails( Validacion({
            ...state, 
            [e.target.name]: e.target.value
        }))
    } 

    return( 
        <div>
            
             <Container className="containerForm"> 
             
                <Row>

                    <Col> </Col>
                    
                    <Col xs={6}>
                    
                        <Form onSubmit={(e)=>onSubmitForm(e)}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <FloatingLabel controlId="floatingInput" label="Nombre" className="mb-3">
                                    <Form.Control type="text" value={state.asunto} name="name"
                                    placeholder="Nombre" onChange={(e) => onHandleChange(e)}/>
                                    {fails.name ? <p style={{color:"orange"}}>{fails.name}</p> : null}
                                </FloatingLabel>                    
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <FloatingLabel controlId="floating" label="Correo Electronico" className="mb-3">
                                    <Form.Control type="email" name="email" value={state.email} onChange={(e) => onHandleChange(e)}  />
                                    {fails.email ? <p style={{color:"orange"}}>{fails.email}</p> : null}
                                </FloatingLabel>                    
                            </Form.Group>                            
                            
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <FloatingLabel controlId="floatingInput" label="Mensaje" className="mb-3">
                                    <Form.Control as="textarea" rows={6} value={state.mensaje} name="message"
                                    placeholder="Mensaje" onChange={(e) => onHandleChange(e)}/>
                                    {fails.message ? <p style={{color:"orange"}}>{fails.message}</p> : null}
                                </FloatingLabel>                      
                            </Form.Group>
                            <div className="d-flex justify-content-around">
                            <Button classname="mx-2" variant="primary" type="submit" disabled={ fails.email || fails.name ||fails.message ? true : false }>
                                Enviar
                            </Button>
                            <Button variant="danger" type="submit" href="/home">
                                Cancelar
                            </Button>
                            </div>
                        </Form>
                    </Col>
                    
                    <Col></Col>
                    
                </Row>
              
            </Container>
        </div>
    )
}

