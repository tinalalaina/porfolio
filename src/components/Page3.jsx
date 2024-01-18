import React from 'react'
import WordPress from "./photos/WordPress.jpg";
import elementor from "./photos/elementor.jpg";
import reactnaive from "./photos/reactnaive.jpg";
import cssetjs from "./photos/cssetjs.jpg";
import bulm from "./photos/bulm.jpg";
import bootstrap from "./photos/bootstrap.jpg";
import lrv from "./photos/lrv.jpg";
import nodejs from "./photos/nodejs.jpg";
export default function page3() {
  return (
    <div className='container-fluid'>
      <br /><br /><br /><br />
      <center>
      <div class="card form-control bg-x container">
        <div class="card-body ">
          <h1>Projet réaliser</h1>
          </div></div>
      </center>
<br />
      <div class="card form-control bg-x">
        <div class="card-body ">
          <h3>Site E-comerce avec :</h3>
          <div class="card form-control container">
            <div class="card-body ">
          <center>
            <img src={WordPress} width="100" height="" />  + <img src={elementor} width="" height="100" />
          </center>
          </div>
          </div>
          <br />

          <h1>Wordpress + Elementor </h1>
          <center>
            <br /><h3>
            lien:  <a href="https://dev-tinalalaina14.pantheonsite.io">https://dev-tinalalaina14.pantheonsite.io</a>

            </h3></center>
        </div>
      </div>

<br />

<div class="card form-control bg-x">
        <div class="card-body ">
          <h3>Gestion d'étudiant :</h3>
          <div class="card form-control container">
            <div class="card-body ">
              <center>
                <img src={reactnaive} width="" height="100" />   +   <img src={cssetjs} width="" height="100" /> +
                <img src={bulm} width="" height="100" />
              </center>
            </div>
          </div>
          <br />

          <h1>React + Javascript + Bootstrap</h1>
          <center>
            <br /><h3>
              lien:  <a href="https://github.com/tinalalaina/etudiantq"> https://github.com/tinalalaina/etudiantq </a>
            </h3></center>
        </div>
      </div>
      <br /><br />
      <div class="card form-control bg-x">
        <div class="card-body ">
          <h3>Mon Porfolio avec :</h3>
          <div class="card form-control container">
            <div class="card-body ">
              <center>
                <img src="/logo512.png" width="100" height="100" />   +   <img src={cssetjs} width="" height="100"  /> +
                <img src={bootstrap} width="100" height="100" />
              </center>
            </div>
          </div>
          <br />

          <h1>React + Javascript + Bootstrap</h1>
          <center>
            <br /><h3>
              lien:  <a href="https://github.com/tinalalaina/porfolio"> https://github.com/tinalalaina/porfolio </a>
            </h3></center>
        </div>
      </div>
      <br /><br />
      <div class="card form-control  bg-x ">
        <div class="card-body ">
          <h3>Gestion d'événements avec :</h3>
          <div class="card form-control container">
            <div class="card-body ">
              <center>
                <img src="/photos/php.jpg" width="200" height="" /> +  <img src={bootstrap} width="" height="100" />
                + <img src={cssetjs} width="200" height="" />
              </center>
            </div></div>
          <br />

          <h1>PHP + Bootstrap + Javascript</h1>
          <center>
            <br /><h3>
              lien:  <a href="https://github.com/tinalalaina/gs"> https://github.com/tinalalaina/gs </a>
            </h3></center>
          <br />
          </div>
          </div>
          <br />

          <div class="card form-control bg-x">
            <div class="card-body ">
              <h3>Gestion de produit avec :</h3>
              
          <div class="card form-control container">
            <div class="card-body ">
              <center>
                <img src={lrv} width="150" height="" /> +  <img src={nodejs} width="" height="100"  />
                + <img src={bootstrap} width="100" height="100" />
              </center>
              </div></div>
            </div>
          
          <br />

          <h1>Laravel + Node.js + Bootstrap</h1>
          <center>
            <br /><h3>
              lien:  <a href="https://github.com/tinalalaina/gp"> https://github.com/tinalalaina/gp </a>
            </h3></center>
        </div>
      
      <br />

  
      <br />

    </div>
  )
}
