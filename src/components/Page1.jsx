import React from 'react';
import '../App.css';
import MonPortfolio from '../MonPortfolio';
import IMG_20231229_061057 from "./photos/IMG_20231229_061057.jpg";
export default function Page1() {
  return (
    <div class="container">
      <br /><br /><br /><br />
      <div class="card form-control bg-x">
        <div class="card-body ">
     
      <div>
        <center>
          <img src={IMG_20231229_061057} width="420" height="420" class="rounded-circle" alt="Cinque Terre" />

        </center>
        <br /><br />

        <h1>Rakolozafindralaky</h1>
        <h1>Tina Lalaina</h1>
        
      <div class="card form-control bg-x">
        <div class="card-body ">
          <center>
         <h2> tel : +261 38 06 466 02</h2> 
          </center>
        
        </div>
        </div>

      </div>
      
      <br />
      <p>"Autodidacte passionné d'informatique, je me plonge avec enthousiasme dans le
        monde des technologies, toujours avide d'apprendre et de relever de nouveaux défis"</p>
      <br /><br />
      <div>
        <center>

          <MonPortfolio />
        </center>

      </div>


      <div>
        <br />

      </div>
      


    </div>
  </div>
  <br /><br /><br /><br />
  </div>
  )
}
