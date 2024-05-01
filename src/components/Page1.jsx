import React from 'react';
import '../App.css';
import MonPortfolio from '../MonPortfolio';
import IMG_20231229_061057 from "./photos/IMG_20231229_061057.jpg";
import bienvenue from "./photos/photo2/bienvenue.jpg"

export default function Page1() {
  return (
    <div class="container">
      <br /><br /><br /><br />
      <div class="row">
        <div class="col-sm-8">
          <div class="card form-control bg-x">
            <div class="card-body ">
              <img src={bienvenue} width="652" height="500" alt="Cinque Terre" />
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card form-control bg-x">
            <div class="card-body ">
              <div>
                <center>
                  <img src={IMG_20231229_061057} width="452" height="300" class="rounded-circle" alt="Cinque Terre" />

                  <h1>Tina Lalaina</h1>

                  <center>

                    <MonPortfolio />
                  </center>
                </center>
              </div>
            </div>
          </div>
        </div>

        <div>
          <br />

          <div class="card form-control bg-x">
            <div class="card-body ">
              <center>

                <h1><i> Devéloppeur Web front & back-end. je suis à votre disposition pour répondre à tout type de projets de création de sites internet, de 
                  développement spécifique ou d'applications web.</i> </h1>
                  <br />
                  <h1>
                    Passionné par les technologies liées au web. je mets mes compétences au service de vos besoins dans divers domaines.
                  </h1>
                  <p className='incones'><i class="fab fa-wordpress"></i> <i class="fab fa-elementor"></i> <i class="fab fa-react"></i> <i class="fab fa-html5"></i> <i class="fab fa-js-square"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-bootstrap"></i> <i class="fab fa-php"></i> <i class="fab fa-laravel"></i> <i class="fab fa-node"></i> <i class="fab fa-vuejs"></i> <i class="fab fa-linux"></i> <i class="fab fa-ubuntu"></i> <i class="fab fa-java"></i> <i class="fab fa-python"></i>
                  </p>
              </center>

            </div>
          </div>
        </div>

      </div>
      <br />
      <div class="card form-control bg-x">
            <div class="card-body ">
              <h1 className='contact'>CONTACTEZ-MOI <i class="far fa-address-card"></i></h1>
              <h1 class="text-decoration-underline">RAKOLOZAFINDRALAKY TINA LALAINA</h1>
             <h2><i class="fas fa-location-arrow"></i> ADRESSE</h2>
             <p>Lot II H 44 D Soaviamasoandro ANTANANARIVO</p>
             <p>Code postal : 101</p>
             <h2><i class="fas fa-phone-volume"></i> TELEPHONE </h2>
             <p>0380646602</p>
             
             <h2><i class="fas fa-mail-bulk"></i> E-MAIL</h2>
             <p>tinalalaina14@gmail.com</p>
             
             <h2><i class="fab fa-facebook"></i> / <i class="fab fa-facebook-messenger"></i> FACEBOOK</h2>
             <p>Tina lalaina Rakl</p>
            </div>
      </div>


      <br /><br /><br /><br />

    </div>
  )
}
