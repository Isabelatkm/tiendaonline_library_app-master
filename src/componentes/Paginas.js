import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Inicio} from './Inicio';
import {ProductosLista} from './Productos/index.js';
import { ProductosDetalles } from "./Productos/ProductosDetalles";
import{ContactForm}from './ContacUs/ContactForm';
import{Nosotros}from './Informacion/Nosotros';




export const Paginas = () => {

  
    return (
        
         <section> 
       
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/productos" exact component={ProductosLista} />
                <Route path="/producto/:id" exact component={ProductosDetalles} />
                <Route path="/contact" exact component={ContactForm} />
                <Route path="/nosotros" exact component={Nosotros} />
               
            </Switch>
       
         </section>   
       
   
      
    )
}

export default Paginas;