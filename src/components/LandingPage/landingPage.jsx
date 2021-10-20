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
        <h1 className="h1">Buscar peliculas Facilmente.<br/>
        <center>
        <Button variant="info" href="/home">Ingresar</Button>
        </center>
        </h1>
      
    </div>
    
    <Slider
        imageSrc={travel_02}
        title={"Ser un videomaniaco."}
        subtitle={
          "Nuestra plataforma ofrece una amplia variedad de Peliculas!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
         
      <Footer/>
      
    </div>
  );
};

export default landingPage;