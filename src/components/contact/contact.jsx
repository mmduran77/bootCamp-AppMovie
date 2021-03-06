import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { useState } from "react"
import { useHistory } from "react-router";
import emailjs from "emailjs-com"
import "../../assets/css/styles.min.css"
import "../../assets/bootstrap/css/bootstrap.min.css"
import "../../assets/css/Contact-Form-Clean.css"
import Footer1 from "../Footer/footer1";


// CONTROL DE VALIDACIONES DEL FORMULARIO
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
    
    const history = useHistory();
    
    const redireccionamiento = () => {
        history.push("/home")
    }; 

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

    //METODO QUE ENVIA A TRAVES DE EMAILJS UN MENSAJE A UN CORREO ELECTRONICO
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
        redireccionamiento();
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
            
            <section className="contact-clean">
                    <form onSubmit={(e)=>onSubmitForm(e)}>
                        <h2 className="text-center">Cont??ctanos</h2>
                        <div className="mb-3">
                            <input className="form-control" type="text" value={state.asunto} name="name" placeholder="Nombre" onChange={(e) => onHandleChange(e)}/>
                            <small className="form-text text-danger">{fails.name ? <p>{fails.name}</p> : null}</small>
                        </div>
                        <div className="mb-3">
                            <input className="form-control is-invalid" type="email" name="email" value={state.email} onChange={(e) => onHandleChange(e)} placeholder="Correo Electronico"/>
                            <small className="form-text text-danger">
                                {fails.email ? <p> {fails.email} </p> : null}
                            </small>
                        </div>

                        <div className="mb-3">
                            <textarea className="form-control" name="message" onChange={(e) => onHandleChange(e)} placeholder="Mensaje" rows="14"></textarea>
                            <small className="form-text text-danger">
                                {fails.message ? <p> {fails.message} </p> : null}
                            </small>                           
                        </div>

                        <div className="d-xl-flex d-flex justify-content-around">
                            <button className="btn btn-primary" type="submit" disabled={ fails.email || fails.name ||fails.message ? true : false }>enviar</button>
                            <button onClick={redireccionamiento} className="btn btn-primary" type="submit">cancelar</button>
                        </div>
                    </form>
                </section>          
                <Footer1/>  
        </div>
    )
}

