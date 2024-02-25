import React, {useContext} from 'react';
import Portada from '../../images/LogoMaisbella.png';
import Catalogo from'../../images/catalogo.png';
import Pay from '../../images/pay.png';
import Rastrear from   '../../images/rastrear.png';
import { DataContext } from "../../context/DataProvider";
import { ProductosNew } from "../Productos/ProductosNew";
import '../../styles/Inicio.css';




export const Inicio = () => {

    const value = useContext(DataContext)
	const [neproductos] = value.neproductos;
  
    return (

     <>

        <div className='row'>
        <div className='inicioP'>
                    <div className='row'>
                        <h1>Inicio</h1>
                    </div>
                    <div className='row'>
                        <img  src ={Portada} alt="producto" />
                    </div>

                </div>
        </div>
       
        <div className="info">
                <div className='titulo' >
                    <h1>Nueva Coleccion</h1>
                </div>
                <div className="productos">
                        {
                                        neproductos.map(neproductos =>(
                                            <ProductosNew 
                                                key={neproductos.id}
                                                title={neproductos.title}
                                                image={neproductos.image}
                                                author={neproductos.author}
                                                summary={neproductos.summary}
                                                id={neproductos.id}
                                            />
                                            
                                        ))
                                    }	

                    			
                </div>
        </div>
        <div className="info">

        <div className='titulo' >
           <h1>Informacion</h1>
        </div>
        <div className='infoContainer'>
        <div className='cardInfo'>
            <img src={Catalogo} atl='catalogo'/>
            <h3>Catalogo</h3>
            
        </div>
        

        <div className='cardInfo'>
                <img src={Pay} alt="FormadePago"/>
                <h3>Formas de Pago </h3>
            
            </div>

        <div className='cardInfo'>
                <img src= {Rastrear} alt='rastrear'/>
                <h3>Rastrea tu pedido</h3>
                
            </div>

</div>

    

</div>  
             

       
        
     </>   
    
    )
}

export  default Inicio;