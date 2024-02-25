import React, {useState, useContext} from 'react'
import { DataContext } from "../../context/DataProvider";
import { ProductoItem } from "./ProductoItem";
import Buscador from './Buscador';
export const ProductosLista = () => {
	const value = useContext(DataContext)
	const [productos, setProductos] = value.productos;
	const [concatenatedValueFromApp, setConcatenatedValueFromApp] = useState([]);

	const handleConcatenatedValueChange = (value) => {
		// Actualiza el valor en el componente Index
		//setConcatenatedValueFromApp(console.log(value[0]);value);
		
		
	  };

    return (
			<>
			<div className='detalles'>
				<h1 >PRODUCTOS</h1>
			</div>
			<div>
			<Buscador onConcatenatedValueChange={handleConcatenatedValueChange} />
			</div>
			
       	<div className="productos">
            {
							productos.map(producto =>(
								<ProductoItem 
									key={producto.id}
									title={producto.title}
									image={producto.image}
									author={producto.author}
									published={producto.published}
									summary={producto.summary}
									id={producto.id}
								/>
							))
						}					
        </div>

				</>
    )
}
