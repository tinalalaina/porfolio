import React from 'react';
import '../App3.css';
import consmeties from "./photos/photo2/consmeties.jpg";
import Gp from "./photos/photo2/Gp.jpg";
import gs from "./photos/photo2/gs.jpg";
import Ge from "./photos/photo2/Ge.png";
import Gu from "./photos/photo2/Gu.jpg";
import bulm from "./photos/bulm.jpg";
export default function page3() {
  return (
    <div className='container-fluid'>
      <br /><br /><br /><br />
      <center>
      <div class="card form-control bg-x container">
        <div class="card-body ">
          <h1>Projet réaliser</h1>
          <h1><i class="fas fa-project-diagram"></i> </h1>
          </div></div>
      </center>
<br />
      <div class="card form-control bg-x">
        <div class="card-body ">
          <h3>Site E-comerce avec :</h3>
          <div class="card form-control container">
            <div class="card-body ">
           
          <center>
          <img src={consmeties} className="img"width="652" height="500" /> 
          </center>
          </div>
          </div>
          <br />

          <h1>Réaliser par : Wordpress <i class="fab fa-wordpress"></i> & Elementor <i class="fab fa-elementor"></i></h1>
        
          <center>
            <br /><h3>
            Lien vers la page:  <a href="https://dev-tinalalaina14.pantheonsite.io">https://dev-tinalalaina14.pantheonsite.io</a>

            </h3></center>
        </div>
      </div>

<br />

<div class="card form-control bg-x">
        <div class="card-body ">
          <h3>Gestion de stock :</h3>
          <div class="card form-control container">
            <div class="card-body ">
              <center>
                <img src={gs} className="img"  width="352" height="200"/>
              </center>
            </div>
          </div>
          <br />

          <h1>Réaliser par : React <i class="fab fa-react"></i> & Javascript <i class="fab fa-js"></i> & Bootstrap <i class="fab fa-bootstrap"></i></h1>
        <center>
            <br /><h3>
            Code source avec quelques photos :   <a href="https://github.com/tinalalaina/gst"> https://github.com/tinalalaina/gst </a>
            </h3></center>
        </div>
      </div>
      <br /><br />
      <div class="card form-control bg-x">
        <div class="card-body ">
          <h3>Gestion d'evenement :</h3>
          <div class="card form-control container">
            <div class="card-body ">
              <center>
                 <img src={Ge} className="img"  width="352" height="200"/>
              </center>
            </div>
          </div>
          <br />

          <h1>Réaliser par : React <i class="fab fa-react"></i> & Javascript <i class="fab fa-js"></i> & Bootstrap <i class="fab fa-bootstrap"></i></h1>
          <center>
            <br /><h3>
            Code source avec quelques photos :  <a href="https://github.com/tinalalaina/gs"> https://github.com/tinalalaina/gs </a>
            </h3></center>
        </div>
      </div>
      <br />
          <br />

          <div class="card form-control bg-x">
            <div class="card-body ">
              <h3>Gestion de produit :</h3>
              
          <div class="card form-control container">
            <div class="card-body ">
              <center>
                <img src={Gp} className="img" width="352" height="200"/> 
              </center>
              </div></div>
            </div>
          
          <br />

          <h1>Réaliser par : Laravel <i class="fab fa-laravel"></i> & Node.js <i class="fab fa-node"></i> & Bootstrap <i class="fab fa-bootstrap"></i></h1>
          <center>
            <br /><h3>
            Code source avec quelques photos :  <a href="https://github.com/tinalalaina/gp"> https://github.com/tinalalaina/gp </a>
            </h3></center>
        </div>
      <br />
      <div class="card form-control bg-x">
        <div class="card-body ">
          <h3>Gestion d’utilisateur :</h3>
          <div class="card form-control container">
            <div class="card-body ">
           
          <center>
          <img src={Gu} className="img"width="552" height="400" /> 
          </center>
          </div>
          </div>
          <br />
           
          <h1>Réaliser par : React redux <i class="fab fa-reacteurope"></i> & express <i class="fab fa-node"></i> & <i class="fab fa-js-square"></i> &  <img src={bulm} className="img"width="202" height="250" /></h1>
          <center>
            <br /><h3>
            Code source avec quelques photos :  <a href="https://github.com/tinalalaina/etudiant">https://github.com/tinalalaina/etudiant</a>

            </h3></center>
        </div>
      </div>
  
      <br />

    </div>
  )
}
