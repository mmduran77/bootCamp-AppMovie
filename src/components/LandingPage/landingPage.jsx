import React from "react";
import "./landingPage.css"

import Footer from "../../components/Footer/footer"
import inicio from "../../assets/peliculas.png";
import travel_02 from "../../assets/travel-02.jpg";
import travel_03 from "../../assets/travel-03.jpg";
import Button from "react-bootstrap/Button"
import Slider from "./slider";

const landingPage = ({ imageSrc }) => {
  
  return (
    <div>
     
      {/* <Navegacion/>
       */}
      <div className="hero">
        <img src={inicio} alt="" className="hero__image" />
        <h1 className="h1">El mas completo catalogo peliculas<br/>
        <center>
        <Button variant="info" href="/home">Ingresar</Button>
        </center>
        </h1>
      
    </div>
    
    <Slider
        imageSrc={travel_02}
        title={"Nuestro Catalogo"}
        subtitle={
          "Actualmente contamos con más de 280.000 titulos, actualizados diariamente con resoluciones de hasta 2000x3000."
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Descripcion Detallada"}
        subtitle={"Obtenen información completa de películas, todo el contenido y las imágenes del sitio."}
        flipped={true}
      />
         
      <Footer/>
      
    </div>
  );
};

export default landingPage;