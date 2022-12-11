import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar1 from './Navbar1';
import Botonera from './Botonera';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //renderizo los componentes Navbar, Botonera y App
  <body>
    <header>
      <Navbar1/>
    </header>
    <main>
      <Botonera/>
      <App/>
    </main>
  </body>
  
);

