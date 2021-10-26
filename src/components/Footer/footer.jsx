import React from "react";



export default function footer(){
    return(
     

            <footer className="text-center text-white" style={{backgroundColor: "grey"}}>
            
            <div className="container pt-4">
                
                <section className="mb-4">                
                    <a  className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://es-la.facebook.com/"
                        role="button"
                        data-mdb-ripple-color="red">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    
                    <a  className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://twitter.com/?lang=es"
                        role="button"
                        data-mdb-ripple-color="white">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a  className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.google.com/"
                        role="button"
                        data-mdb-ripple-color="dark">
                        <i className="fab fa-google"></i>
                    </a>
                    
                    <a  className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.instagram.com/?hl=es"
                        role="button"
                        data-mdb-ripple-color="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    
                    <a  className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://ar.linkedin.com/"
                        role="button"
                        data-mdb-ripple-color="dark"> 
                        <i className="fab fa-linkedin"></i>
                    </a>
                    
                    <a  className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://github.com/mmduran77/bootCamp-AppMovie/"
                        role="button"
                        data-mdb-ripple-color="dark">
                        <i className="fab fa-github"></i>
                    </a>
                </section>
                
            </div>
            

            
            <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2021 Copyright 
                <a className="text-dark" href="https://mdbootstrap.com/">FullPelis</a>
            </div>
            
            </footer>
            
           
    )
}
