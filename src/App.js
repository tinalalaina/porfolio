import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
function App() {
  return (
    <div >
      <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'rgba(169,169,169,0.5)'}} >
        
        <div class="container-fluid">
          <a class="navbar-brand" ><h1 className='log'><i><i class="fab fa-codepen"></i> RAKOLOZAFINDRALAKY</i></h1><h1 className='log '><i class="fab fa-codepen"></i> TINA LALAINA</h1></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> </span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavDropdown">
          <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/porfolio" class="nav-link active font-monospace" aria-current="page"><i class="fas fa-home"></i> About</Link>
              </li>
              <li class="nav-item">
              <Link to="user/page2" class="nav-link active font-monospace" aria-current="page"><i class="fab fa-buromobelexperte"></i> Experience</Link>
              </li>
              <li class="nav-item active">
              <Link to="user/page3" class="nav-link active font-monospace"aria-current="page"><i class="fas fa-project-diagram"></i> Projects</Link>
              </li>
             
            </ul>
          </div>
          
        </div>
         
      </nav>
      <Routes>
          <Route path="/porfolio" element={<Page1/>} />
          <Route path="user/page2" element={<Page2 />} />
          <Route path="user/page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
