import React, { createContext, useState, useEffect } from "react";
import Data from "../Data";
import DataNew from "../DataNewColeccion";
import DataGit from "../DataGits"; 

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [productos, setProductos] = useState([]);
	const [menu, setMenu] = useState(false)
	const [carrito, setCarrito] =useState([])
	const [total, setTotal] = useState(0)
	const [neproductos,setNewProductos] =useState([]);
    const [datos, setDatos] = useState([]);
	const [gits,setgits] =useState([]);

	useEffect(() => {
		const fetchData = async () => {
		  try {
			// URL de la API
			const apiUrl = 'http://localhost:8085/ms-book-catalog/books';
	
			// Configuración del encabezado
			const headers = {
			  'Content-Type': 'application/json'
			};
	
			// Realizar la solicitud utilizando fetch
			const response = await fetch(apiUrl, { headers });
	
			// Verificar si la solicitud fue exitosa (código de estado 200)
			if (response.ok) {
			  // Convertir la respuesta a formato JSON
			  const result = await response.json();

			  

			 
			  setDatos(result.books);
			} else {
			  // Manejar errores aquí (puedes lanzar una excepción o mostrar un mensaje de error)
			  console.error('Error al obtener datos:', response.statusText);
			}
		  } catch (error) {
			console.error('Error en la solicitud:', error);
		  }
		};
	
		// Llamar a la función de solicitud al montar el componente
		fetchData();
	  }, []);
	   // La dependencia vacía asegura que se ejecute solo una vez al montar el componente
	console.log(datos);

    useEffect(() => {
		const producto = datos;
		if(producto){
			setProductos(producto)
		}else{
			setProductos([])
		}
	}, []);

	useEffect(() => {
		const neproductos = DataNew.items 
		if(neproductos){
			setNewProductos(neproductos)
		}else{
			setNewProductos([])
		}
	}, []);

	useEffect(() => {
		const gits = DataGit.items 
		if(gits){
			setgits(gits)
		}else{
			setgits([])
		}
	}, []);



	const addCarrito = (id) =>{
		const check = carrito.every(item =>{
			return item.id !== id
			
		})
		if(check){
			const data = productos.filter(producto =>{
				return producto.id === id
			})
			setCarrito([...carrito, ...data])
		}else{
			alert("El producto se ha añadido al carrito")
		}
	}
	useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if(dataCarrito){
			setCarrito(dataCarrito)
		}
	},[])

	useEffect(() =>{
		localStorage.setItem('dataCarrito', JSON.stringify(carrito))
	},[carrito])

	useEffect(() =>{
		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (5 * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])
	
	const value = {
		productos : [productos],
		neproductos : [neproductos],
		gits:[gits],
		menu: [menu, setMenu],
		carrito: [carrito, setCarrito],
		addCarrito: addCarrito,
		total: [total, setTotal]
	}
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};
