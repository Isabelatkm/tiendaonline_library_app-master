// App.js

import React, { useState, useEffect } from 'react';
import CheckboxWithTextbox from './CheckboxWithTextbox'; // Ajusta la ruta según la estructura de tu proyecto
import axios from 'axios';

const App = ({ onConcatenatedValueChange }) => {
  const [values, setValues] = useState({});
  const [concatenatedValue, setConcatenatedValue] = useState([]);
  const [filtro, setFiltro]= useState('');
  const [valorFiltro, setValorFiltro]= useState('');
  const [datos, setDatos] = useState([]);

  const handleTextboxChange = (textboxId, value) => {
    setValues((prevValues) => ({ ...prevValues, [textboxId]: value }));
    
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8085/ms-book-catalog/books?summary='+Object.values(values)[0]);
      console.log(response.data);
      // Aquí puedes manejar la respuesta de la API, por ejemplo, almacenarla en el estado del componente.
      //setDatos(response.data.books);
     // setConcatenatedValue(response.data.books);
      //onConcatenatedValueChange(response.data.books);
    } catch (error) {
      console.error('Error al obtener datos:', error);
      // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje al usuario.
    }
  };

 

  const handleConcatenate = () => {
   
    
    fetchData();
    
    // Levantamiento del estado: pasa el valor concatenado al componente padre
  
    console.log(datos);
  };

  return (
    <div>
      <CheckboxWithTextbox id={1} lblnombre={"title"} onTextboxChange={handleTextboxChange} />
      <CheckboxWithTextbox id={2} lblnombre={"author"} onTextboxChange={handleTextboxChange} />
      <CheckboxWithTextbox id={3} lblnombre={"published"} onTextboxChange={handleTextboxChange} />
      <CheckboxWithTextbox id={4} lblnombre={"isbn10"} onTextboxChange={handleTextboxChange} />
      <CheckboxWithTextbox id={5} lblnombre={"isbn13"} onTextboxChange={handleTextboxChange} />
      <CheckboxWithTextbox id={6} lblnombre={"publisher"} onTextboxChange={handleTextboxChange} />
      <CheckboxWithTextbox id={7} lblnombre={"summary"} onTextboxChange={handleTextboxChange} />
      <CheckboxWithTextbox id={8} lblnombre={"cantidad"} onTextboxChange={handleTextboxChange} />
     
      <div>
        <button className="btn btn-primary" onClick={handleConcatenate}>Concatenar Valores</button>
      </div>

      <div>
        <label>Concatenated Values: {concatenatedValue}</label>
      </div>
    </div>
  );
};

export default App;
