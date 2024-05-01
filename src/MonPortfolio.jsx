import React from 'react';
import cv from "./components/photos/cv_tina_lalaina_dev.pdf";
import './index.css';
const MonPortfolio = () => {
    
    return (
        <div>
            {/* ... autres contenus ... */}
            
            {/* Bouton pour voir le CV au format PDF */}
            <a href={cv} download>
            <button type="button" class="btn btn-secondary">
                Télécharger mon CV <i class="fas fa-download"></i></button>
            </a>
        </div>
    );
}

export default MonPortfolio;