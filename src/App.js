import React from 'react';
import 'boxicons';
import { Header }   from './componentes/Header';  //se declara solo header por que el nomre dir = componente 
import {Paginas} from './componentes/Paginas';
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './context/DataProvider';
import { Carrito } from "./componentes/Carrito";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Paginas />

      </Router>
      
    </div>
    <div class="mt-5 p-4 bg-dark text-white text-center">
      <p>Footer</p>
    </div>
    
    </DataProvider>
  );
}

export default App;
