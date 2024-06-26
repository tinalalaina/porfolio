import React from 'react';
import '../css/1.css';
import logo from "./photos/logo.PNG";
import IMG_20240113_145137 from "./photos/IMG_20240113_145137.jpg";
export default function Page2() {
  return (
    <div className='container-fluid'>
      <br /><br /><br /><br />
      <div class="card form-control bg-x">
        <div class="card-body ">
          <center>
            <img src={IMG_20240113_145137} width="auto" height="158" />
          </center>
          <br />
          <h3><i>"Titulaire d'une licence en génie logiciel de l'Université CNTMAD, j'ai acquis des compétences approfondies dans le développement de logiciels grâce à un programme d'enseignement à distance. Mon expérience comprend la conception, la programmation et la maintenance de systèmes logiciels, démontrant ainsi ma capacité à résoudre des problèmes
            complexes et à contribuer de manière significative au développement de projets informatiques."</i></h3>
          <center><h3>
            * Dégree: Licence (2023), Master (en cours...)
          </h3></center>
        </div>
      </div>
      <br />
      <div class="card form-control bg-x">
        <div class="card-body ">
          <center>
            <img src={logo} class="rounded-circle" width="258" height="158" />
          </center>
          <br />
          <h3>
          <i>"En tant que développeur stagiaire au sein d'un Ministère de l’Emploi, de l’Enseignement Technique et de la Formation Professionnelle (METPF), j'ai dirigé un projet majeur axé sur la création d'un système de gestion d'événements. Ma responsabilité consistait à concevoir, développer et déployer une solution logicielle complète 
          pour optimiser la planification, la coordination et le suivi des événements institutionnels."</i>
          </h3>
          <center><h3>
            * 2022 
          </h3></center>
        </div>
      </div>
      <br />
      <div class="card form-control bg-secondary">
        <div class="card-body ">
          <h1>"Employeur : GEOX2"</h1>
        </div>
        <div class="card-body bg-x ">
          <h3>Poste tenu : Agent d'appui.</h3>
          <h3><i>"Titre du Manda: Appuyer les animateurs fonciers, les agents suppléants à la realisation de
            l'Opération de Certification Foncière Massive (OCFM) dans leur commune d'intervention."</i></h3>
          <center>
            <h3>* Aout 2023 - Decembre 2023</h3>
          </center>
        </div>
        
      </div>
      <br />
      <div class="card form-control bg-secondary">
        <div class="card-body ">
          <h1>"Employeur : Vivetic"</h1>
        </div>
        <div class="card-body bg-x ">
          <h3><i>Poste tenu : Agent de saisie.</i></h3>
          <center>
            <h3>* 2019</h3>
          </center>
        </div>
        
      </div>
      <br /><br /><br /><br />
    </div>
  )
}
