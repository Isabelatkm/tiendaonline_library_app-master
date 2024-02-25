import React from 'react';
import '../../styles/Nosotros.css';
export const Nosotros = () => {

    return (
        <>
                <div className='inicio'>
                    <div className='row'>
                        <h1>Nosotros</h1>
                    </div>

                </div>

                <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                    
                    <p>Sigueme en:</p>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                        <a className="nav-link active" href="https://www.instagram.com/maisbellaboutique_123/">Instagram</a>
                        </li>
                    </ul>
                    <hr className="d-sm-none"/>
                    </div>
                    <div className="col-sm-8">
                    <h2>COMPANY</h2>
                    <h5>LIBRERIA </h5>

                    <p>Diaponemos gran cantidad de libros</p>
                    <p></p>

                  </div>
                </div>
                </div>

        </>
        

        
       
    )
}
